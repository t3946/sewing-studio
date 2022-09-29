import * as React from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import useSelector from "@hooks/useSelector";
import { useRouter } from "next/router";
import Alert from "react-bootstrap/Alert";

export const Payment: React.FC = function () {
  const { phone, email, orderNumber } = useSelector((state) => state.order);
  const router = useRouter();

  if (!phone || !orderNumber) {
    router.push("/");
    return;
  }

  return (
    <div className={"container-lg"}>
      <h1 className={"header-3 text-center mt-3 mb-4"}>
        Оплата заказа #{orderNumber}
      </h1>

      <Alert variant={"secondary"}>
        <Alert.Heading>Договор оферты</Alert.Heading>
        <p>Нажимая кнопку "Оплатить" вы соглашаетесь с договором оферты.</p>
        <p>
          Ознакомиться с договорм можно по следующей ссылке{" "}
          <a href="/oferta.rtf" target={"_blank"}>
            скачать
          </a>
          .
        </p>
      </Alert>

      <Alert variant={"warning"}>
        <Alert.Heading>Проверьте контактные данные!</Alert.Heading>
        <p>
          Перед обработкой заказа, мы свяжемся с вами по телефону. Если
          связаться не получиться – мы вернём деньги.
        </p>

        <p>
          Сохраните номер заказа, он может понадобиться при возврате средств.
        </p>
        <hr />

        <ul>
          <li>Телефон: {phone}</li>
          {email && <li>Почта: {email}</li>}
        </ul>
      </Alert>

      <div className={"text-center"}>
        <Button variant={"success"}>Оплатить</Button>
      </div>

      <div className={"text-center mt-4"}>
        <Link href={"/order/checkout"}>
          <a>Вернуться к оформлению заказ</a>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
