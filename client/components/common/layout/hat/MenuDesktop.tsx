import * as React from "react";
import Style from "@components/common/layout/hat/MenuDesktop.module.scss";
import cn from "classnames";
import Link from "next/link";

export const MenuDesktop: React.FC = function () {
  const menu = [
    {
      link: "/#catalog",
      label: "Магазин",
    },
    {
      link: "/#studio",
      label: "Ателье",
    },
    {
      link: "/#contacts",
      label: "Контакты",
    },
  ];

  const items = [];

  for (const i in menu) {
    const menuItem = menu[i];

    items.push(
      <li className={Style.navItem} key={`menu-item-${i}`}>
        <Link href={menuItem.link}>
          <a className={cn(Style.navLink, "link-unstyled")}>{menuItem.label}</a>
        </Link>
      </li>
    );
  }

  return (
    <ul
      className={cn("list-unstyled", "m-0", "d-none", "d-xl-flex", Style.list)}
    >
      {items}
    </ul>
  );
};

export default MenuDesktop;
