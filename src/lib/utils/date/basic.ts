export const getCurrentDate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  return `${year}${month}${day}`;
};

export const getDDMMYYYY = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  return `${day}${month}${year}`;
};

/**
 * Add days to YYYYMMDD string and return YYYYMMDD result
 */
export const addDays = (dateStr: string, days: number) => {
  const year = parseInt(dateStr.substring(0, 4));
  const month = parseInt(dateStr.substring(4, 6)) - 1;
  const day = parseInt(dateStr.substring(6, 8));
  const date = new Date(year, month, day);
  date.setDate(date.getDate() + days);

  const resYear = date.getFullYear();
  const resMonth = String(date.getMonth() + 1).padStart(2, "0");
  const resDay = String(date.getDate()).padStart(2, "0");
  return `${resYear}${resMonth}${resDay}`;
};

/**
 * Get difference in weeks between two YYYYMMDD strings
 */
export const getDiffInWeeks = (date1: string, date2: string) => {
  const d1 = new Date(
    parseInt(date1.substring(0, 4)),
    parseInt(date1.substring(4, 6)) - 1,
    parseInt(date1.substring(6, 8))
  );
  const d2 = new Date(
    parseInt(date2.substring(0, 4)),
    parseInt(date2.substring(4, 6)) - 1,
    parseInt(date2.substring(6, 8))
  );
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.floor(diffDays / 7);
};

export const isValidYYYYMMDD = (dateStr: string) => {
  if (!/^\d{8}$/.test(dateStr)) return false;
  const year = parseInt(dateStr.substring(0, 4));
  const month = parseInt(dateStr.substring(4, 6)) - 1;
  const day = parseInt(dateStr.substring(6, 8));
  const d = new Date(year, month, day);
  return (
    d.getFullYear() === year && d.getMonth() === month && d.getDate() === day
  );
};

/**
 * Parse date and time to a Date object.
 * Supports DDMMYYYY or YYYYMMDD formats.
 */
export const parseToDateTime = (dateStr: string, hhmm: string) => {
  if (!dateStr || dateStr.length !== 8) return new Date(NaN);

  let day, month, year;

  // Robust detection:
  // If characters 0-4 are "20xx" or "19xx" AND characters 4-8 are NOT "20xx"/"19xx" -> YYYYMMDD
  // Otherwise, if characters 4-8 are "20xx" or "19xx" -> DDMMYYYY
  const yearHead = parseInt(dateStr.substring(0, 4), 10);
  const yearTail = parseInt(dateStr.substring(4, 8), 10);

  const isYearHead = yearHead >= 1900 && yearHead <= 2100;
  const isYearTail = yearTail >= 1900 && yearTail <= 2100;

  if (isYearHead && !isYearTail) {
    // YYYYMMDD
    year = yearHead;
    month = parseInt(dateStr.substring(4, 6), 10) - 1;
    day = parseInt(dateStr.substring(6, 8), 10);
  } else {
    // DDMMYYYY (Default)
    day = parseInt(dateStr.substring(0, 2), 10);
    month = parseInt(dateStr.substring(2, 4), 10) - 1;
    year = yearTail;
  }

  const [hours, minutes] = (hhmm || "00:00")
    .split(":")
    .map(s => parseInt(s, 10));
  return new Date(year, month, day, hours, minutes);
};

/**
 * Check if a time slot is in the past
 * @param dateStr Date in DDMMYYYY or YYYYMMDD format
 * @param hhmm Time in HH:mm format
 * @param bufferMinutes Optional buffer to disable slots slightly before they start (default 0)
 */
export const isPastTimeSlot = (
  dateStr: string,
  hhmm: string,
  bufferMinutes = 0
) => {
  const slotDate = parseToDateTime(dateStr, hhmm);
  const now = new Date();

  // Add buffer if needed
  if (bufferMinutes > 0 && !isNaN(slotDate.getTime())) {
    slotDate.setMinutes(slotDate.getMinutes() - bufferMinutes);
  }

  // If date is invalid, assume it's NOT in the past to avoid bricking the UI
  if (isNaN(slotDate.getTime())) return false;

  return slotDate.getTime() < now.getTime();
};
