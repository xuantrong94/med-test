"use client";

import React, { useEffect } from "react";
import Button from "antd/es/button";
import Row from "antd/es/row";
import Col from "antd/es/col";
import styles from "@/layouts/Header/Header.module.scss";
import { useTranslations } from "next-intl";
import { useUserStore } from "@/shared/stores/use-user.store";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useToast } from "@/shared/stores/use-toast.store";
import { userApi } from "@/shared/api/user.api";

// Ant Design Icons - Using direct imports for bundle optimization
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import IdcardOutlined from "@ant-design/icons/lib/icons/IdcardOutlined";
import FileTextOutlined from "@ant-design/icons/lib/icons/FileTextOutlined";
import BellOutlined from "@ant-design/icons/lib/icons/BellOutlined";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";
import Badge from "antd/es/badge";

export default function DrawerPatientInfo() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, setUser, loading } = useUserStore();
  const toast = useToast();

  // Performance logging for Auth Flow on Mobile
  useEffect(() => {
    if (user && user.fullName && (window as any).authInitTime) {
      const renderTime = performance.now();
      const totalDelay = renderTime - (window as any).authInitTime;
      console.log(
        `[AUTH-FLOW-MOBILE] 4. Mobile UI replaced Login with '${user.fullName}'.`
      );
      console.log(
        `[AUTH-FLOW-MOBILE] => Total delay: ${totalDelay.toFixed(2)}ms`
      );
      (window as any).authInitTime = null;
    }
  }, [user]);

  const handleLogin = () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
      const currentParams = searchParams.toString();
      const returnPath = currentParams ? `${pathname}?${currentParams}` : pathname;
      const returnUrl = new URL(returnPath, baseUrl);
      
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
    toast.success(t("logoutSuccess") || "Đăng xuất thành công");

    if (searchParams.has("fromOptimize")) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("fromOptimize");
      const queryString = params.toString();
      const updatedUrl = `${pathname}${queryString ? `?${queryString}` : ""}`;
      router.replace(updatedUrl, { scroll: false });
    }
  };

  return (
    <div className={styles.dpi_container}>
      {/* Start authen box */}
      {loading ? (
        <Row
          gutter={[16, 8]}
          style={{ margin: "16px 0", opacity: 0.6 }}
        >
          <Col span={24}>
            <Button
              className={styles.loginButton}
              style={{ width: "100%", justifyContent: "center" }}
            >
              ⏳ {t("login")}...
            </Button>
          </Col>
        </Row>
      ) : user ? (
        <div className={styles.userSection}>
          <Button className={styles.nameButton}>
            <UserOutlined className={styles.btnIcon} />
            <span>{user.fullName}</span>
          </Button>

          <div className={styles.menuList}>
            <div className={styles.menuItem}>
              <IdcardOutlined className={styles.icon} />
              <span>{t("records")}</span>
            </div>
            <div className={styles.menuItem}>
              <FileTextOutlined className={styles.icon} />
              <span>{t("bills")}</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuItemLeft}>
                <BellOutlined className={styles.icon} />
                <span>{t("notifications")}</span>
              </div>
              <Badge
                count={313}
                className={styles.badge}
              />
            </div>
            <div
              className={`${styles.menuItem} ${styles.logout}`}
              onClick={handleLogout}
              style={{ marginTop: '8px', color: '#ff4d4f' }}
            >
              <LogoutOutlined className={styles.icon} />
              <span>{t("logout")}</span>
            </div>
          </div>
        </div>
      ) : (
        <Row
          gutter={[16, 8]}
          style={{ margin: "16px 0" }}
        >
          <Col span={12}>
            <Button 
              className={styles.registerButton}
              onClick={() => window.location.href = 'https://medpro.vn/register'}
            >
              {t("register")}
            </Button>
          </Col>
          <Col span={12}>
            <Button 
              className={styles.loginButton}
              onClick={handleLogin}
            >
              {t("login")}
            </Button>
          </Col>
        </Row>
      )}
      {/* End authen box */}
      <div className={styles.dpi_spacer}></div>
    </div>
  );
}
