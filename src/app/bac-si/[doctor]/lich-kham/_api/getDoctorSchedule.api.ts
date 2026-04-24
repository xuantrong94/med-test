import { api } from "@/lib/fetch/client";
import { Schedule } from "@/types/schedule";
import { cache } from "react";

const USE_MOCK = false; // TOGGLE THIS FOR MOCK/REAL DATA

const url =
  "https://api-v2.medpro.com.vn/his-gateway/booking-tree-dynamic-current-node";

interface Params {
  doctorId: string;
  serviceId: string;
  subjectId: string;
  treeId: string;
  date: string;
  partnerId: string;
}

export const getDoctorSchedule = cache(
  async ({
    doctorId,
    serviceId,
    subjectId,
    treeId,
    date,
    partnerId,
  }: Params) => {
    if (USE_MOCK) {
      // 1. Parse date (DDMMYYYY) to get Day of Week
      const dayNum = parseInt(date.substring(0, 2));
      const monthNum = parseInt(date.substring(2, 4)) - 1;
      const yearNum = parseInt(date.substring(4, 8));
      const d = new Date(yearNum, monthNum, dayNum);
      const weekday = d.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

      console.log(
        `::: getDoctorSchedule MOCKED for service: ${serviceId}, date: ${date} (Weekday: ${weekday})`
      );

      const shifts: any[] = [];

      // Logic according to requirements
      if (serviceId.includes("157")) {
        // KHÁM CHUYÊN GIA: Chiều Thứ 2 và Thứ 6 - Phòng VIP B
        if (weekday === 1 || weekday === 5) {
          shifts.push({
            id: `shift_cg_${date}`,
            startTime: "13:30",
            endTime: "16:30",
            shiftName: "Chiều",
            roomName: "VIP B",
            doctorId,
            duration: 15,
            maxSlot: 20,
            priorityRoom: 0,
            shiftCode: "AFTERNOON",
            doctorChange: false,
            services: [{ id: serviceId, price: 500000, subjectId }],
            timeSlotInDay: [],
          });
        }
      } else if (serviceId.includes("102")) {
        // KHÁM DỊCH VỤ: Sáng Thứ 2 và Thứ 7 - Phòng VIP B
        if (weekday === 1 || weekday === 6) {
          shifts.push({
            id: `shift_dv_${date}`,
            startTime: "08:00",
            endTime: "11:30",
            shiftName: "Sáng",
            roomName: "VIP B",
            doctorId,
            duration: 15,
            maxSlot: 20,
            priorityRoom: 0,
            shiftCode: "MORNING",
            doctorChange: false,
            services: [{ id: serviceId, price: 300000, subjectId }],
            timeSlotInDay: [],
          });
        }
      } else if (serviceId.includes("1") || serviceId === "bvndgiadinh_1") {
        // KHÁM THƯỜNG: Thứ 3, 4, 6 - Phòng Thường A
        // Gộp lịch: Trả về 2 ca liên tục 08:00-12:00 và 12:00-16:30
        if (weekday === 2 || weekday === 3 || weekday === 5) {
          shifts.push(
            {
              id: `shift_t1_${date}`,
              startTime: "08:00",
              endTime: "12:00",
              shiftName: "Sáng",
              roomName: "Thường A",
              doctorId,
              duration: 15,
              maxSlot: 20,
              priorityRoom: 0,
              shiftCode: "MORNING",
              doctorChange: false,
              services: [{ id: serviceId, price: 150000, subjectId }],
              timeSlotInDay: [],
            },
            {
              id: `shift_t2_${date}`,
              startTime: "12:00",
              endTime: "16:30",
              shiftName: "Chiều",
              roomName: "Thường A",
              doctorId,
              duration: 15,
              maxSlot: 20,
              priorityRoom: 0,
              shiftCode: "AFTERNOON",
              doctorChange: false,
              services: [{ id: serviceId, price: 150000, subjectId }],
              timeSlotInDay: [],
            }
          );
        }
      }

      return {
        id: serviceId,
        type: "subject",
        subType: "doctor",
        days: [
          {
            date: Number(date),
            timemiliseconds: d.getTime(),
            shifts,
            timeSlots: [],
          },
        ],
      } as unknown as Schedule;
    }

    const response = await api.post(
      url,
      {
        doctorId,
        serviceId,
        subjectId,
        treeId,
        date,
      },
      {
        caller: "getDoctorSchedule",
        headers: {
          partnerId,
        },
      }
    );
    return response as unknown as Schedule;
  }
);
