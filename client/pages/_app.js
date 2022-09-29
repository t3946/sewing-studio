import "@styles/globals.css";
import { Provider } from "react-redux";
import getStore from "@redux/Store";
import React from "react";
import { SSRProvider } from "react-bootstrap";
import axios from "axios";
import NextApp from "next/app";
import Page from "@components/common/layout/page/Page";

function App({ Component, pageProps }) {
  return (
    <Provider store={getStore(pageProps.storeInitialData)}>
      <SSRProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </SSRProvider>
    </Provider>
  );
}

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  const catalog = {
    hoodies: [
      {
        productId: 1,
        image: "/images/pages/main/hoodies1.jpg",
        name: "Худи красный",
        description: "футер трёхнитка, с начёсом",
        price: 3800,
      },
      {
        productId: 2,
        image: "/images/pages/main/hoodies2.jpg",
        name: "Худи синий",
        description: "футер трёхнитка, с начёсом",
        price: 3800,
      },
      {
        productId: 3,
        image: "/images/pages/main/hoodies3.jpg",
        name: "Худи двухцветный",
        description: "футер трёхнитка, с начёсом",
        price: 4500,
      },
    ],
  };

  const cookieString = appContext.ctx.req?.cookies?.cart;
  let cart;

  if (cookieString) {
    cart = JSON.parse(cookieString);
  }

  appProps.pageProps.storeInitialData = {
    catalog,
    cart,
  };

  return { ...appProps };
};

export default App;
