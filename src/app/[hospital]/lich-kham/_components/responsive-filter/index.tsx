"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Button from "antd/es/button";
import FilterOutlined from "@ant-design/icons/lib/icons/FilterOutlined";

const Drawer = dynamic(() => import("antd/es/drawer"), { ssr: false });
import styles from "./responsive-filter.module.scss";

export const ResponsiveFilter = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Hiển thị trên Desktop, ẩn trên Mobile */}
      <div className={styles.desktopFilter}>{children}</div>

      {/* Nút lọc hiển thị trên Mobile, ẩn trên Desktop */}
      <div className={styles.mobileFilterBtn}>
        <Button
          type='primary'
          icon={<FilterOutlined />}
          onClick={() => setOpen(true)}
          block
          size='large'
          className={styles.filterButton}
        >
          Lọc kết quả
        </Button>
      </div>

      <Drawer
        title='Lọc kết quả'
        placement='bottom'
        onClose={() => setOpen(false)}
        open={open}
        size='large' // Cân đối theo nội dung
        rootClassName={styles.mobileDrawer}
      >
        <div className={styles.drawerContent}>{children}</div>
      </Drawer>
    </div>
  );
};
