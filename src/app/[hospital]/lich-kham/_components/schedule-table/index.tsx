"use client";

import { FunctionComponent } from "react";
import { ScheduleData } from "../../_types/schedule.types";
import styles from "./schedule-table.module.scss";
import ResponsiveWrapper from "@/components/ResponsiveWrapper";
import { ScheduleRow } from "./types";
import { ScheduleSkeleton } from "./skeleton";
import { DoctorSchedule } from "@/types/doctor";

import { Subject } from "@/types/subject";

// ─── Deduplicate helper ──── //
export function getUniqueDoctors(doctors: DoctorSchedule[]): DoctorSchedule[] {
  const seen = new Set<string>();
  return doctors.filter(doctor => {
    // If doctor has an ID, use it. Otherwise use the room name/ID as the unique key.
    const key = doctor.id
      ? `doc-${doctor.id}`
      : `room-${doctor.cta.roomName || doctor.cta.roomId || "unknown"}`;

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ─── Transform helper ──── //
function transformScheduleData(
  data: ScheduleData,
  subjectsList: { id: string; name: string }[] = [],
  standardizedDates?: string[]
): {
  feature: ScheduleData["feature"];
  rows: ScheduleRow[];
  dates: string[];
} {
  const schedule = data.schedule;
  const dates = standardizedDates || Object.keys(schedule).sort();
  const rows: ScheduleRow[] = [];

  for (const date of dates) {
    const entries = schedule[date] || [];
    const labelGroupings = new Map<
      string,
      {
        labelType: "subject" | "phase";
        subjectId: string | null;
        doctors: DoctorSchedule[];
      }
    >();

    for (const entry of entries) {
      // Group doctors within this entry by their subjectId (from CTA or entry fallback)
      const doctorsGroupedBySubject = new Map<string, DoctorSchedule[]>();

      for (const doctor of entry.doctors) {
        // Only show doctors with a valid ID and title (representing an actual doctor with a name)
        if (!doctor.id || !doctor.title) continue;

        const sid = doctor.cta.subjectId || entry.subjectId || "none";
        if (!doctorsGroupedBySubject.has(sid)) {
          doctorsGroupedBySubject.set(sid, []);
        }
        doctorsGroupedBySubject.get(sid)!.push(doctor);
      }

      // Process each subject group found in this entry
      for (const [sid, doctors] of doctorsGroupedBySubject) {
        const firstDoctorCta = doctors[0]?.cta;
        const actualSubjectId = sid === "none" ? null : sid;
        const labelType =
          firstDoctorCta?.treeId !== "VIP" ? "subject" : "phase";

        const subjectNameFromDoctors = doctors.find(d => d.cta.subjectName)?.cta
          .subjectName;

        const subjectNameFromList =
          !subjectNameFromDoctors && !entry.subjectName && actualSubjectId
            ? subjectsList.find(s => s.id === actualSubjectId)?.name
            : null;

        const label =
          labelType === "subject"
            ? subjectNameFromDoctors ||
              entry.subjectName ||
              subjectNameFromList ||
              actualSubjectId ||
              "Chuyên khoa"
            : entry.phase || "Ca khám";

        // Merge into the label group for this date
        if (!labelGroupings.has(label)) {
          labelGroupings.set(label, {
            labelType,
            // subjectId: labelType === "subject" ? actualSubjectId : null,
            subjectId: actualSubjectId,
            doctors: [],
          });
        }
        labelGroupings.get(label)!.doctors.push(...doctors);
      }
    }

    // After all entries for this date are processed, deduplicate and push to rows
    for (const [label, group] of labelGroupings) {
      rows.push({
        date,
        label,
        labelType: group.labelType,
        subjectId: group.subjectId,
        doctors: getUniqueDoctors(group.doctors),
      });
    }
  }

  return { feature: data.feature, rows, dates };
}

// ═══════════════════════════════════════════════════════════════════
//  EXPORTED WRAPPER – renders both views using ResponsiveWrapper
// ═══════════════════════════════════════════════════════════════════

export const ScheduleTable: FunctionComponent<{
  data: ScheduleData;
  subjects?: { id: string; name: string }[];
  openFeatureId?: string | null;
  onToggleFeature?: (_id: string | null) => void;
  date?: string;
  standardizedDates?: string[];
}> = ({
  data,
  subjects,
  openFeatureId,
  onToggleFeature,
  date,
  standardizedDates,
}) => {
  const { feature, rows, dates } = transformScheduleData(
    data,
    subjects,
    standardizedDates
  );

  if (rows.length === 0) {
    // return (
    //   <div className={styles.emptyState}>
    //     <p>Không có lịch khám cho dịch vụ «{feature.name}»</p>
    //   </div>
    // );
    return null;
  }

  return (
    <section
      className={styles.section}
      id={`schedule-${feature.slug}`}
    >
      <ResponsiveWrapper
        breakpoint={1024}
        desktopImport={async () => {
          const mod = await import("./views/TableGridView");
          return function DesktopView() {
            return (
              <mod.TableGridView
                rows={rows}
                dates={dates}
                featureName={feature.name}
                selectedDate={date}
              />
            );
          };
        }}
        mobileImport={async () => {
          const mod = await import("./views/MobileAccordionView");
          return function MobileView() {
            return (
              <mod.MobileAccordionView
                rows={rows}
                featureId={feature.id}
                featureName={feature.name}
                openFeatureId={openFeatureId}
                onToggleFeature={onToggleFeature}
                selectedDate={date}
                standardizedDates={dates}
              />
            );
          };
        }}
        loadingComponent={<ScheduleSkeleton />}
      />
    </section>
  );
};
