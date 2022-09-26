import * as React from "react";
import Style from "@components/pages/main/Studio.module.scss";
import cn from "classnames";

export const Studio: React.FC = function () {
  return <div>
    {/*определять город по ip. если киров -- выводить блок "Ателье"*/}
    <h2 className={"text-center header-2"}>
      Ателье
    </h2>

    <div className={cn("d-flex", "justify-content-center")}>
      <div className={cn("d-flex", Style.content, "align-items-center")}>
        <img
          src={"/images/pages/main/map-marker-icon.png"}
          alt={"site log"}
          className={cn("user-drag-none", "user-select-none", Style.icon)}
        />

        <div>
          <p className={"text-center"}>Если вы нуждаетесь в ремонте или доработке вашей одежды, вы можете обратиться
            в
            наше ателье по адресу <b>г. Киров ул. Лепсе д. 62</b></p>
          <p className={"text-center"}>Если вы хотите выполнить худи на заказ, то вы можете прийти к нам, чтобы
            снять мерки, посмотреть готовые образцы худи.</p>
        </div>
      </div>
    </div>
  </div>;
};

export default Studio;
