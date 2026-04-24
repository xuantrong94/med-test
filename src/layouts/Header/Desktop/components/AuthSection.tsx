"use client";

import React from "react";
import styles from "@/layouts/Header/Header.module.scss";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useUserStore } from "@/shared/stores/use-user.store";
import { useToast } from "@/shared/stores/use-toast.store";
import { userApi } from "@/shared/api/user.api";

// Ant Design Icons
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";
import IdcardOutlined from "@ant-design/icons/lib/icons/IdcardOutlined";
import ProfileOutlined from "@ant-design/icons/lib/icons/ProfileOutlined";
import BellOutlined from "@ant-design/icons/lib/icons/BellOutlined";

// Ant Design Components
import Popover from "antd/es/popover";
import ConfigProvider from "antd/es/config-provider";

const AuthSection: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, setUser, loading } = useUserStore();
  const toast = useToast();
  const tCommon = useTranslations("common");

  React.useEffect(() => {
    if (user && user.fullName && (window as any).authInitTime) {
      const renderTime = performance.now();
      const totalDelay = renderTime - (window as any).authInitTime;
      console.log(
        `[AUTH-FLOW] 4. Desktop UI replaced 'Đăng nhập' with '${user.fullName}'.`
      );
      console.log(
        `[AUTH-FLOW] => Total delay from load to visually logged in: ${totalDelay.toFixed(2)}ms`
      );

      // Clear the timer so it doesn't log on every re-render
      (window as any).authInitTime = null;
    }
  }, [user]);

  const handleLogin = () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
      
      // Preserve existing search parameters to avoid losing state (e.g. filters)
      const currentParams = searchParams.toString();
      const returnPath = currentParams ? `${pathname}?${currentParams}` : pathname;
      
      const returnUrl = new URL(returnPath, baseUrl);
      
      // Flag for our internal silent login logic after redirect
      returnUrl.searchParams.set("fromOptimize", "true");

      const loginUrl = `https://medpro.vn/login?redirectUrl=${encodeURIComponent(
        returnUrl.toString()
      )}`;

      window.location.href = loginUrl;
    } catch (error) {
      console.error("Failed to construct login URL:", error);
      toast.error("Không thể khởi tạo quá trình đăng nhập");
    }
  };

  const handleLogout = () => {
    userApi.logout();
    setUser(null);
    toast.success(tCommon("logoutSuccess") || "Đăng xuất thành công");

    // Remove fromOptimize from URL to prevent unwanted auto-login triggers
    if (searchParams.has("fromOptimize")) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("fromOptimize");
      const queryString = params.toString();
      const updatedUrl = `${pathname}${queryString ? `?${queryString}` : ""}`;
      router.replace(updatedUrl, { scroll: false });
    }
  };

  const UserMenuContent = (
    <div className={styles.userMenu}>
      <div className={styles.userHeader}>
        <div className={styles.avatar}>
          <UserOutlined />
        </div>
        <div className={styles.userInfoDetail}>
          <span className={styles.welcome}>{tCommon("welcome")},</span>
          <span className={styles.name}>{user?.fullName}</span>
        </div>
      </div>
      <div className={styles.menuList}>
        <div className={styles.menuItem}>
          <IdcardOutlined className={styles.icon} />
          <span>{tCommon("records")}</span>
        </div>
        <div className={styles.menuItem}>
          <ProfileOutlined className={styles.icon} />
          <span>{tCommon("bills")}</span>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuItemLeft}>
            <BellOutlined className={styles.icon} />
            <span>{tCommon("notifications")}</span>
          </div>
        </div>
        <div
          className={`${styles.menuItem} ${styles.logout}`}
          onClick={handleLogout}
        >
          <LogoutOutlined className={styles.icon} />
          <span>{tCommon("logout")}</span>
        </div>
      </div>
      <div className={styles.footer}>{tCommon("lastUpdated")}: 17/04/2026</div>
    </div>
  );

  if (user) {
    return (
      <ConfigProvider
        theme={{
          components: {
            Popover: {
              borderRadiusLG: 12,
              colorBgElevated: "transparent",
              boxShadowSecondary: "none",
            },
          },
        }}
      >
        <Popover
          content={UserMenuContent}
          trigger="click"
          placement="bottomRight"
          arrow={false}
        >
          <button className={styles.authBox}>
            <UserOutlined />
            {user?.fullName}
          </button>
        </Popover>
      </ConfigProvider>
    );
  }

  if (loading) {
    return (
      <button
        className={styles.authBox}
        style={{ opacity: 0.7, minWidth: 130 }}
      >
        <span className={styles.loaderIcon}>⏳</span>
        {tCommon("login")}...
      </button>
    );
  }

  return (
    <button className={styles.authBox} onClick={handleLogin}>
      <UserOutlined />
      {tCommon("login")}
    </button>
  );
};

export default AuthSection;
