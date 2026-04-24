import { HEADER_MENU_WITH_COMMUNITY } from "@/shared/constants/urls";
import { NavigatorItem } from "../components/NavigatorItem";
import styles from "@/layouts/Header/Header.module.scss";

export default function DrawerNavigators() {
  return (
    <div>
      <div className={styles.dn_container}>
        {HEADER_MENU_WITH_COMMUNITY.map(item => (
          <NavigatorItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            url={item.url}
          >
            {item.children}
          </NavigatorItem>
        ))}
      </div>
      <div className={styles.dn_spacer} />
    </div>
  );
}
