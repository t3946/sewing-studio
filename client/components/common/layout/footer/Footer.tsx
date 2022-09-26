import * as React from "react";
import Styles from "@components/common/layout/footer/Footer.module.scss";
import cn from "classnames";
import MainPageMap from "@components/common/layout/map/MainPageMap";

export const Footer: React.FC = function () {
  return (
    <div className={cn("mt-5", "d-flex", "flex-column")}>
      <MainPageMap/>

      <div
        className={cn(
          "d-flex",
          "align-items-center",
          "justify-content-center",
          Styles.footer,
          "flex-column"
        )}
      >
        <div>Email для связи с администрацией: admin@boxdust.ru</div>
        <div>ИНН: 434587939091</div>
        <div>ОГРНИП: 322435000009905</div>
        <div>© 2022</div>
      </div>
    </div>
  );
};

export default Footer;
