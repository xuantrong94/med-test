import { FunctionComponent, Suspense } from "react";
import styles from "./main-content.module.scss";
import { getPartnerSchedules } from "../../_api/getPartnerSchedules.api";
import { getPartnerInfo } from "@/shared/api/getPartnerInfo.api";
import { getCurrentDate } from "@/lib/utils/date";
import { RoleSelector } from "../role-selector";
import { Schedules } from "./schedules";
import Loading from "../../loading";
import dynamic from "next/dynamic";
import { getHospitalDoctors } from "../../_api/getHospitalDoctors.api";
import { ROLES } from "@/shared/constants/roles";
import { getWeekDays } from "@/lib/utils/date/getWeekDays";
import { ClearFilters } from "../clear-filters";
import { Partner } from "@/types/partner";
import { Subject } from "@/types/subject";

import {
  filterDoctors,
  getUnifiedSubjects,
  pruneDoctor,
} from "../../_helpers/pruning";

const SubjectSelector = dynamic(() =>
  import("../subject-selector").then(mod => mod.SubjectSelector)
);
const DoctorInput = dynamic(() =>
  import("../doctor-input").then(mod => mod.DoctorInput)
);
const FeatureSelector = dynamic(() =>
  import("../feature-selector").then(mod => mod.FeatureSelector)
);
const DateSelector = dynamic(() =>
  import("../date-selector").then(mod => mod.DateSelector)
);
const TypeSegmented = dynamic(() =>
  import("../type-segmented").then(mod => mod.TypeSegmented)
);
const Doctors = dynamic(() => import("../doctors").then(mod => mod.Doctors));
const DoctorsSkeleton = dynamic(() =>
  import("../doctors").then(mod => mod.DoctorsSkeleton)
);
const ResponsiveFilter = dynamic(() =>
  import("../responsive-filter").then(mod => mod.ResponsiveFilter)
);

type Props = {
  partnerId: string;
  subjectId?: string;
  featureId?: string;
  date?: string;
  doctor?: string;
  role?: string;
  type?: "doctor" | "feature";
  page?: string;
};

export const MainContent: FunctionComponent<Props> = ({
  partnerId,
  date,
  subjectId,
  featureId,
  doctor,
  role,
  type,
  page,
}) => {
  const suspenseKey = `${type}-${date}-${subjectId}-${featureId}-${doctor}-${role}-${page}`;

  return (
    <>
      <div className={`container`}>
        <div className={styles.mainContent}>
          <Suspense fallback={<Loading showContainer={false} />}>
            <FilterSection
              partnerId={partnerId}
              type={type}
            />
          </Suspense>
          <Suspense
            key={suspenseKey}
            fallback={
              type === "doctor" ? (
                <DoctorsSkeleton />
              ) : (
                <Loading showContainer={false} />
              )
            }
          >
            {type === "doctor" ? (
              <DoctorsContent
                partnerId={partnerId}
                doctor={doctor}
                role={role}
                subjectId={subjectId}
                page={page}
              />
            ) : (
              <SchedulesContent
                partnerId={partnerId}
                date={date}
                subjectId={subjectId}
                featureId={featureId}
                doctor={doctor}
                role={role}
              />
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
};

const FilterSection = async ({
  partnerId,
  type,
}: {
  partnerId: string;
  type?: "doctor" | "feature";
}) => {
  const [partnerInfo, doctors] = await Promise.all([
    getPartnerInfo(partnerId),
    getHospitalDoctors({
      partnerId: partnerId,
    }),
  ]);

  const hasDoctors = doctors?.length > 0;
  const unifiedSubjects = getUnifiedSubjects(partnerInfo);

  return (
    <>
      {hasDoctors && <TypeSegmented type={type} />}
      {type === "doctor" && (
        <div className={styles.doctorFilterContainer}>
          <ResponsiveFilter>
            <div className={styles.row1}>
              <SubjectSelector
                subjects={unifiedSubjects.map(s => ({
                  id: s.id,
                  name: s.name,
                  imageUrl: s.imageUrl,
                }))}
              />
              <RoleSelector options={ROLES} />
              <DoctorInput />
              <ClearFilters />
            </div>
          </ResponsiveFilter>
        </div>
      )}
    </>
  );
};

const DoctorsContent = async ({
  partnerId,
  doctor,
  role,
  subjectId,
  page = "1",
}: {
  partnerId: string;
  doctor?: string;
  role?: string;
  subjectId?: string;
  page?: string;
}) => {
  const [allDoctors, partnerInfo] = await Promise.all([
    getHospitalDoctors({ partnerId }),
    getPartnerInfo(partnerId),
  ]);

  const unifiedSubjects = getUnifiedSubjects(partnerInfo);
  const subjectName = subjectId
    ? (unifiedSubjects.find(s => s.id === subjectId)?.name ?? subjectId)
    : undefined;

  // Perform filtering on the server
  const filtered = filterDoctors(allDoctors, {
    doctor,
    role,
    subjectName,
  });

  // Perform pagination on the server
  const pageSize = 12;
  const currentPage = parseInt(page, 10) || 1;
  const totalCount = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;

  const paginated = filtered.slice(startIndex, startIndex + pageSize);

  // Prune data to only what's needed for the UI
  const prunedDoctors = paginated.map(pruneDoctor);

  return (
    <Doctors
      initialDoctors={prunedDoctors}
      totalCount={totalCount}
      features={(partnerInfo?.features ?? []).map(f => ({
        id: f.id,
        name: f.name,
        type: f.type,
      }))}
    />
  );
};

const SchedulesContent = async ({
  partnerId,
  date = "",
  subjectId,
  featureId,
  doctor,
  role,
}: Omit<Props, "type">) => {
  const currentDate = getCurrentDate();
  const [partnerSchedules, partnerInfo] = await Promise.all([
    getPartnerSchedules({
      date: date || currentDate,
      partnerId: partnerId,
      subjectId: subjectId,
      featureId: featureId,
      doctor: doctor,
      role: role,
    }),
    getPartnerInfo(partnerId),
  ]);

  const { data: scheduleData } = partnerSchedules;

  const standardizedDates = getWeekDays(date || currentDate).map(
    d => `${d.month}-${d.date}`
  );

  return (
    <Schedules
      data={scheduleData}
      subjects={getUnifiedSubjects(partnerInfo).map(s => ({
        id: s.id,
        name: s.name,
      }))}
      date={date}
      standardizedDates={standardizedDates}
    />
  );
};
