import DownloadApp from "../DownloadApp";
import DrawerContacts from "../DrawerContacts";
import DrawerNavigators from "../DrawerNavigators";
import DrawerPatientInfo from "../DrawerPatientInfo";
import DrawerTop from "../DrawerTop";
import styles from "@/layouts/Header/Header.module.scss";

interface DrawerProps {
  show?: boolean;
  setShow?: (show: boolean) => void;
}

export default function Drawer({
  show = true,
  setShow,
}: Readonly<DrawerProps>) {
  return (
    <div className={`${styles.dr_container} ${show ? styles.show : styles.hide}`}>
      <DrawerTop setShow={setShow} />
      <DrawerPatientInfo />
      <DrawerNavigators />
      <DrawerContacts />
      <DownloadApp />
    </div>
  );
}
