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
  const baseUrl = "http://localhost:3080/api";
  // fake catalog
  // const catalog = await axios.get(baseUrl + "/category").then((res) => {
  //   return res.data.catalog;
  // });
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

  const headers = {
    cookie: `auth=${appContext.ctx.req?.cookies?.auth}`,
  };

  const user = await axios
    .get(baseUrl + "/auth/info", {
      withCredentials: true,
      headers,
    })
    .then((res) => {
      return res.data.user;
    })
    .catch((err) => {
      return null;
    });

  const cookieString = appContext.ctx.req?.cookies?.cart;
  let cart;

  if (cookieString) {
    cart = JSON.parse(cookieString);
  }

  appProps.pageProps.storeInitialData = {
    catalog,
    user: {
      user,
    },
    cart,
  };

  return { ...appProps };
};

export default App;
