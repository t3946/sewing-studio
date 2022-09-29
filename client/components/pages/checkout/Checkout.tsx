import * as React from "react";
import OrderProducts from "@components/pages/checkout/OrderProducts";
import Form from "C:/OpenServer/domains/localhost/studiatm/client/components/pages/checkout/Form";
import Style from "@components/pages/checkout/Form.module.scss";
import cn from "classnames";

export const Checkout: React.FC = function () {
  return (
    <div className={"container-lg"}>
      <h1 className={"header-3 text-center my-3"}>Оформить заказ</h1>

      <div className={"row"}>
        <div className={cn("col-4", Style.formContainer)}>
          <h2 className={"text-center"}>Конактные данные</h2>

          <Form />
        </div>

        <div className={"col-8"}>
          <h2 className={"text-center"}>Содержимое заказа</h2>

          <OrderProducts />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
