export interface WeekDay {
  dateOfWeek: string;
  date: string;
  month: string;
  year?: string;
  fullDate?: string; // dd-mm-yyyy
  isToday?: boolean; // Đánh dấu ngày hôm nay
  isInput?: boolean; // Đánh dấu ngày input
  weekNumber?: number;
}

export interface WeekRange {
  startDate: string;
  endDate: string;
  weekNumber: number;
  year: number;
}

export interface Options {
  includeYear?: boolean;
  includeFullDate?: boolean;
  markToday?: boolean;
  markInput?: boolean;
  shortDayName?: boolean; // T2, T3... thay vì Thứ 2, Thứ 3
  includeWeekNumber?: boolean;
}

/**
 * Lấy số tuần trong năm theo chuẩn ISO 8601
 */
export function getISOWeekNumber(date: Date): number {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
  return weekNo;
}

export function getWeekDays(dateStr: string, options: Options = {}): WeekDay[] {
  const {
    includeYear = false,
    includeFullDate = false,
    markToday = false,
    markInput = false,
    shortDayName = false,
    includeWeekNumber = false,
  } = options;

  // Support both dd-mm-yyyy and yyyymmdd
  let inputDate: Date;
  if (/^\d{8}$/.test(dateStr)) {
    const year = parseInt(dateStr.substring(0, 4), 10);
    const month = parseInt(dateStr.substring(4, 6), 10) - 1;
    const day = parseInt(dateStr.substring(6, 8), 10);
    inputDate = new Date(year, month, day);
  } else if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
    const [dayStr, monthStr, yearStr] = dateStr.split("-");
    const day = parseInt(dayStr, 10);
    const month = parseInt(monthStr, 10) - 1;
    const year = parseInt(yearStr, 10);
    inputDate = new Date(year, month, day);
  } else {
    throw new Error("Invalid format. Expected: dd-mm-yyyy or yyyymmdd");
  }

  if (isNaN(inputDate.getTime())) {
    throw new Error("Invalid date");
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dayOfWeek = inputDate.getDay();
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const monday = new Date(inputDate);
  monday.setDate(inputDate.getDate() - daysToMonday);

  const weekDays: WeekDay[] = [];

  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(monday);
    currentDay.setDate(monday.getDate() + i);

    const date = String(currentDay.getDate()).padStart(2, "0");
    const monthStr = String(currentDay.getMonth() + 1).padStart(2, "0");
    const yearStr = String(currentDay.getFullYear());

    // Tên thứ
    let dateOfWeek: string;
    if (i === 6) {
      dateOfWeek = shortDayName ? "CN" : "Chủ nhật";
    } else {
      dateOfWeek = shortDayName ? `T${i + 2}` : `Thứ ${i + 2}`;
    }

    const weekDay: WeekDay = {
      dateOfWeek,
      date,
      month: monthStr,
    };

    if (includeYear) {
      weekDay.year = yearStr;
    }

    if (includeFullDate) {
      weekDay.fullDate = `${date}-${monthStr}-${yearStr}`;
    }

    if (markToday) {
      currentDay.setHours(0, 0, 0, 0);
      weekDay.isToday = currentDay.getTime() === today.getTime();
    }

    if (markInput) {
      weekDay.isInput = currentDay.getTime() === inputDate.getTime();
    }

    if (includeWeekNumber) {
      weekDay.weekNumber = getISOWeekNumber(currentDay);
    }

    weekDays.push(weekDay);
  }

  return weekDays;
}

export const getWeekRange = (dateStr: string): WeekRange => {
  const weekDays = getWeekDays(dateStr, {
    includeFullDate: true,
    includeYear: true,
    includeWeekNumber: true,
  });

  const startDate = weekDays[0].fullDate || "";
  const endDate = weekDays[6].fullDate || "";
  const weekNumber = weekDays[0].weekNumber || 0;
  const year = parseInt(weekDays[0].year || "0", 10);

  return { startDate, endDate, weekNumber, year };
};
