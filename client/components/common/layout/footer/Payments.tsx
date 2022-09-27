import * as React from "react";
import Style from "@components/common/layout/footer/Payments.module.scss";
import cn from "classnames";

export const Payments: React.FC = function () {
  return (
    <div>
      <ul className={"list-unstyled"}>
        <li>
          <div className={cn(Style.payment, Style.payment_mastercard)}></div>
          <div className={cn(Style.payment, Style.payment_visa)}></div>
          <div className={cn(Style.payment, Style.payment_qiwi)}></div>
          <div className={cn(Style.payment, Style.payment_mts)}></div>
          <div className={cn(Style.payment, Style.payment_alphabank)}></div>
        </li>
      </ul>
    </div>
  );
};

export default Payments;
