import * as React from "react";
import Style from "@components/common/layout/hat/MenuDesktop.module.scss";
import Nav from 'react-bootstrap/Nav';
import cn from "classnames";

export const MenuDesktop: React.FC = function () {
  const menu = [
    {
      link: "#catalog",
      label: "Магазин",
    },
    {
      link: "#studio",
      label: "Ателье",
    },
    {
      link: "#reviews",
      label: "Отзывы",
    },
    {
      link: "#contacts",
      label: "Контакты",
    },
  ];

  const items = [];

  for (const i in menu) {
    const menuItem = menu[i];

    items.push(
      <li className={Style.navItem} key={`menu-item-${i}`}>
        <Nav.Link href={menuItem.link} className={Style.navLink}>{menuItem.label}</Nav.Link>
      </li>
    );
  }

  return <ul className={cn("list-unstyled", "m-0", "d-none", "d-xl-flex", Style.list)}>{items}</ul>;
};

export default MenuDesktop;
