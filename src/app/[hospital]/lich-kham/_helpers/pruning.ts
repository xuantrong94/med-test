import normalize from "@/lib/utils/normalize";
import { SearchResultDoctor } from "@/types/doctor";

export const normalizeRoleString = (str: string) => {
  if (!str) return "";
  let n = normalize(str.toLowerCase());
  n = n.replace(/bac si/g, "bs");
  n = n.replace(/[.\s-]/g, "");
  n = n.replace(/ck1/g, "cki");
  n = n.replace(/ck2/g, "ckii");
  return n;
};

export const extractRoleFromTitle = (title: string) => {
  if (!title) return null;
  const prefixes = [
    "PGS.TS.BS.CKII",
    "PGS.TS.BS.CKI",
    "GS.TS.BS",
    "PGS.TS.BS",
    "GS.TS",
    "PGS.TS",
    "ThS.BS.CKII",
    "ThS.BS.CKI",
    "ThS.BS",
    "Ths BSCKI",
    "Ths BSCKII",
    "TS.BS",
    "BS.CKII",
    "BS.CKI",
    "BS.CK2",
    "BS.CK1",
    "BS CKII",
    "BS CKI",
    "BS CK2",
    "BS CK1",
    "BSCKI",
    "BSCKII",
    "Bác sĩ chuyên khoa II",
    "Bác sĩ chuyên khoa I",
    "Bác sĩ chuyên khoa 2",
    "Bác sĩ chuyên khoa 1",
    "Thạc sĩ",
    "Tiến sĩ",
    "Giáo sư",
    "Phó giáo sư",
    "Bác sĩ",
    "GS",
    "PGS",
    "TS",
    "ThS",
    "BS",
  ];

  for (const prefix of prefixes) {
    const pattern = new RegExp(
      `^(${prefix.replace(/\./g, "\\.")})(?:\\.|\\s)*\\s+`,
      "i"
    );
    const match = title.match(pattern);
    if (match) {
      return {
        role: match[1].trim(),
        name: title.replace(match[0], "").trim(),
      };
    }
  }
  return null;
};

export interface PrunedDoctor {
  id: string;
  title: string;
  role: string;
  imageUrl: string;
  tags: { id: string; name: string }[];
  subjects: { id: string; name: string }[];
  trees?: { treeId: string; days: string }[];
  days: string;
  partner?: { name: string };
}

export const pruneDoctor = (doctor: SearchResultDoctor): PrunedDoctor => {
  return {
    id: doctor.id || "",
    title: doctor.title || "",
    role: doctor.role || "",
    imageUrl: doctor.imageUrl || "",
    tags: (doctor.tags || []).map(t => ({ id: t.id, name: t.name })),
    subjects: (doctor.subjects || []).map(s => ({ id: s.id, name: s.name })),
    trees: (doctor.trees || []).map(t => ({
      treeId: t.treeId,
      days: t.days || "",
    })),
    days: doctor.days || "",
    partner: doctor.partner ? { name: doctor.partner.name || "" } : undefined,
  };
};

export const filterDoctors = (
  doctors: SearchResultDoctor[],
  filters: {
    doctor?: string;
    role?: string;
    subjectName?: string;
  }
) => {
  let result = doctors;

  if (filters.role?.trim()) {
    const roleKeyword = normalizeRoleString(filters.role.trim());
    result = result.filter(doctor => {
      const extracted = extractRoleFromTitle(doctor?.title || "");
      const actualRole = extracted ? extracted.role : doctor?.role || "";
      const doctorRole = normalizeRoleString(actualRole);
      let isMatch = doctorRole.includes(roleKeyword);

      if (isMatch && roleKeyword.endsWith("cki")) {
        const withoutCKII = doctorRole.replace(
          new RegExp(roleKeyword + "i", "g"),
          ""
        );
        isMatch = withoutCKII.includes(roleKeyword);
      }

      return isMatch;
    });
  }

  if (filters.doctor?.trim()) {
    const keyword = normalize(filters.doctor.trim());
    result = result.filter(
      doctor =>
        normalize(doctor?.title ?? "").includes(keyword) ||
        normalize(doctor?.partner?.name ?? "").includes(keyword)
    );
  }

  if (filters.subjectName?.trim()) {
    const normalizedFilter = normalize(
      filters.subjectName.trim().toLowerCase()
    );
    result = result.filter(doctor =>
      doctor?.subjects?.some(subject => {
        const n = normalize((subject.name ?? "").toLowerCase());
        return n.includes(normalizedFilter) || normalizedFilter.includes(n);
      })
    );
  }

  return result;
};

export const getUnifiedSubjects = (partnerInfo: any) => {
  if (!partnerInfo) return [];

  const subjects = [...(partnerInfo.subjects ?? [])];
  const specialtys = partnerInfo.specialtys ?? [];

  specialtys.forEach((s: any) => {
    if (!subjects.find((item: any) => item.id === s._id)) {
      subjects.push({
        id: s._id,
        name: s.name,
        imageUrl: s.icon,
        bookingNote: "",
      });
    }
  });

  return subjects;
};

export const pruneDoctorDetail = (doctor: any) => {
  if (!doctor) return undefined;
  return {
    id: doctor.id,
    title: doctor.title,
    role: doctor.role,
    imageUrl: doctor.imageUrl,
    price: doctor.price,
    treatments: doctor.treatments,
    subjects: (doctor.subjects || []).map((s: any) => ({
      id: s.id,
      name: s.name,
    })),
    services: (doctor.services || []).map((svc: any) => ({
      id: svc.id,
      name: svc.name,
      popupContent: svc.popupContent,
      ctas: (svc.ctas || []).map((cta: any) => ({
        partnerId: cta.partnerId,
        doctorId: cta.doctorId,
        serviceId: cta.serviceId,
        subjectId: cta.subjectId,
        treeId: cta.treeId,
        roomId: cta.roomId,
        roomName: cta.roomName,
      })),
    })),
    description: {
      rating: doctor.description?.rating,
      specialty: doctor.description?.specialty,
      seo_description: doctor.description?.seo_description,
      selfIntroduction: doctor.description?.selfIntroduction,
    },
    partner: doctor.partner
      ? {
          name: doctor.partner.name,
          address: doctor.partner.address,
        }
      : undefined,
  };
};

export const prunePartner = (partner: any) => {
  if (!partner) return undefined;
  return {
    id: partner.id,
    name: partner.name,
    address: partner.address,
    imageUrl: partner.imageUrl,
  };
};

export const pruneWeeklyDays = (days: any[]) => {
  if (!days) return [];
  return days.map(day => ({
    date: day.date,
    displayDate: day.displayDate,
    dayOfWeek: day.dayOfWeek,
    timemiliseconds: day.timemiliseconds,
    shifts: (day.shifts || []).map((shift: any) => ({
      timeId: shift.timeId,
      shiftName: shift.shiftName,
      startTime: shift.startTime,
      endTime: shift.endTime,
      roomId: shift.roomId,
      roomName: shift.roomName,
      status: shift.status,
      availableSlot: shift.availableSlot,
      service: {
        id: shift.service?.id,
        name: shift.service?.name,
        price: shift.service?.price,
      },
      treeId: shift.treeId,
      subjectId: shift.subjectId,
    })),
  }));
};
