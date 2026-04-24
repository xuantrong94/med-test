import { FOOTER_MOBILE } from "@/shared/constants/urls";
import NavItem from "../NavItem";

export default function CollapseNav() {
  return (
    <div>
      {FOOTER_MOBILE.map(item => (
        <NavItem
          key={item.key}
          label={item.label}
          items={"items" in item ? item.items : undefined}
        />
      ))}
    </div>
  );
}
