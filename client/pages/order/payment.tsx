import Head from "next/head";
import React from "react";
import Payment from "@components/pages/payment/Payment";

export default function Page(props: any) {
  return (
    <>
      <Head>
        <title>Оплата заказа</title>
      </Head>

      <Payment />
    </>
  );
}
