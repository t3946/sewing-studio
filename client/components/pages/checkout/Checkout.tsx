import * as React from "react";
import OrderProducts from "@components/pages/checkout/OrderProducts";
import Form from "@components/pages/checkout/Form";
import Style from "@components/pages/checkout/Form.module.scss";
import cn from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import useSelector from "@hooks/useSelector";

export const Checkout: React.FC = function () {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.list);

  if (!cart.length) {
    router.back();
  }

  function orderSubmitHandler () {
    router.push("/order/payment");
  }

  return (
    <div className={"container-lg"}>
      <h1 className={"header-3 text-center mt-3 mb-4"}>Оформление заказа</h1>

      <div className={"row"}>
        <div className={cn("col-4", Style.formContainer)}>
          <h2 className={"text-center"}>Конактные данные</h2>

          <Form submit={orderSubmitHandler} />
        </div>

        <div className={"col-8"}>
          <h2 className={"text-center"}>Содержимое заказа</h2>

          <OrderProducts />

          <div className={"text-center"}>
            <Link href={"/#catalog"}>
              <a>Вернуться в магазин</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
