import React, { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import type { ColumnsType, TableProps } from "antd/es/table";
import styles from "./doctor-schedule-list.module.scss";
import { Doctor } from "@/types/doctor";

interface DataType extends Partial<Doctor> {
  key: React.Key;
  name?: string; // Keep for fallback if needed, but aim for title
}

const Table = dynamic(() => import("antd/es/table"), {
  ssr: false,
}) as React.FC<TableProps<DataType>>;

const data: DataType[] = [
  { key: 0, title: "TS BS Nguyễn Văn A" },
  { key: 1, title: "TS BS Nguyễn Văn A" },
];

export const DoctorScheduleList: FunctionComponent = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Bác sĩ",
      dataIndex: "title",
      key: "title",
      render: (_, { title, name }) => (
        <div className={styles.doctorInfo}>
          <div className={styles.avatar}></div>
          <span className={styles.doctorName}>{title || name}</span>
        </div>
      ),
    },
    {
      title: "",
      key: "action",
      render: () => (
        <div className={styles.tableBtnGroup}>
          <button className={styles.tableSeeDetail}>Xem chi tiết</button>
          <button className={styles.tableBookNow}>Đặt khám ngay</button>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.doctorScheduleList}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};
