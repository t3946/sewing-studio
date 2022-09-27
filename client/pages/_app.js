import "@styles/globals.css";
import { Provider } from "react-redux";
import getStore from "@redux/Store";
import React from "react";
import { SSRProvider } from "react-bootstrap";
import axios from "axios";
import NextApp from "next/app";
import Page from "@components/common/layout/page/Page";
import Cookies from "js-cookie";

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

  if (typeof window !== "undefined") {
    appProps.pageProps.storeInitialData = {};
    return { ...appProps };
  }

  const baseUrl = "http://localhost:3080/api";
  const catalog = await axios.get(baseUrl + "/category").then((res) => {
    return res.data.catalog;
  });
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

  const cookieString = Cookies.get("cart");
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
