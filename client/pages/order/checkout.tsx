import Head from "next/head";
import React from "react";
import Checkout from "@components/pages/checkout/Checkout";

export default function Page(props: any) {
  return (
    <>
      <Head>
        <title>Оформление заказа</title>
      </Head>

      <Checkout />
    </>
  );
}
