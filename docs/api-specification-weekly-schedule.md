# API Specification: Doctor Weekly Schedule (v2)

Tài liệu mô tả yêu cầu lịch làm việc của bác sĩ trong 1 tuần. Thay thế cho phương án gọi đến booking-tree-dynamic-current-node nhiều lần (subject _ service _ date).

## 1. Mô tả Endpoint

- **Method**: `GET` (hoặc `POST`)
- **Path**: Backend quyết định (Ví dụ: `/api/v2/doctor-schedule/weekly`)
- **Purpose**: Lấy toàn bộ lịch làm việc của bác sĩ trong 1 tuần, phân nhóm theo Dịch vụ (Service).

## 2. Request Parameters (Query/Body)

| Parameter   | Type   | Required | Description                                                                                           |
| :---------- | :----- | :------- | :---------------------------------------------------------------------------------------------------- |
| `doctorId`  | String | Yes      | ID của bác sĩ                                                                                         |
| `partnerId` | String | Yes      | ID của bệnh viện                                                                                      |
| `subjectId` | String | Yes      | ID của chuyên khoa                                                                                    |
| `date`      | String | No       | Format: `DDMMYYYY`. Default: Today. Backend sẽ tính toán để trả về dữ liệu của cả tuần chứa ngày này. |

## 3. Response Specification (JSON)

Dữ liệu được thiết kế theo mô hình phân cấp thực tế: **Service -> Day -> Shift**.

### 3.1. Cấu trúc Top-Level

```json
{
  "doctorId": "string",
  "partnerId": "string",
  "subjectId": "string",
  "services": [ServiceObject]
}
```

### 3.2. ServiceObject (Dịch vụ/Hình thức khám)

| Field   | Type          | Description                                      |
| :------ | :------------ | :----------------------------------------------- |
| `id`    | String        | ID của dịch vụ (Booking tree node ID).           |
| `name`  | String        | Tên dịch vụ (Khám Chuyên Khoa, v.v.).            |
| `price` | Number        | Giá tiền của dịch vụ này.                        |
| `days`  | `DayObject[]` | Danh sách các ngày có lịch khám của dịch vụ này. |

### 3.3. DayObject (Ngày khám)

| Field             | Type            | Description                                       |
| :---------------- | :-------------- | :------------------------------------------------ |
| `date`            | `DDMMYYYY`      | Mã ngày (23032026).                               |
| `dayOfWeek`       | String          | Thứ 2, Thứ 3, v.v.                                |
| `displayDate`     | String          | Ngày hiển thị (23/03/2026).                       |
| `shifts`          | `ShiftObject[]` | Danh sách các ca khám trong ngày của dịch vụ này. |
| `timemiliseconds` | String          | Timestamp in milliseconds (e.g., "1711234567890") |

### 3.4. ShiftObject (Ca khám)

| Field           | Type    | Description                      |
| :-------------- | :------ | :------------------------------- |
| `timeId`        | String  | ID duy nhất của ca khám.         |
| `shiftName`     | String  | Tên ca (Sáng, Chiều, Tối).       |
| `shiftCode`     | String  | Mã quản lý ca của Backend.       |
| `startTime`     | `HH:mm` | 08:00                            |
| `endTime`       | `HH:mm` | 12:00                            |
| `roomName`      | String  | Tên phòng khám (Phòng 102).      |
| `status`        | Enum    | `AVAILABLE`, `FULL`, `OFF`.      |
| `availableSlot` | Number  | Số lượng chỗ còn trống (Nếu có). |

## 4. Key Logic Requirements for BE

1.  **Hierarchy**: Bắt buộc tuân thủ `Service > Day > Shift`. Đây là luồng logic chuẩn của hệ thống Booking Tree.
2.  **Date Alignment**: Nếu một ngày trong tuần không có ca làm việc, BE có thể không trả về hoặc trả về mảng `shifts: []` cho ngày đó.
3.  **Performance**: Thời gian phản hồi mục tiêu < 200ms cho dữ liệu 1 tuần.

## 5. Example Payload (Success)

```json
{
  "doctorId": "bvndgiadinh_973",
  "partnerId": "bvndgiadinh",
  "subjectId": "bvndgiadinh_60",
  "services": [
    {
      "id": "bvndgiadinh_2",
      "name": "Khám Chuyên Khoa",
      "price": 500000,
      "days": [
        {
          "date": "23032026",
          "dayOfWeek": "Thứ 2",
          "displayDate": "23/03/2026",
          "timemiliseconds": "1711234567890",
          "shifts": [
            {
              "timeId": "shift_1_svc2_2303",
              "shiftName": "Sáng",
              "startTime": "08:00",
              "endTime": "12:00",
              "roomName": "Phòng 102",
              "status": "AVAILABLE"
            }
          ]
        }
      ]
    }
  ]
}
```
