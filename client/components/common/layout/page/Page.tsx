import * as React from "react";
import Hat from "@components/common/layout/hat/Hat";
import Footer from "@components/common/layout/footer/Footer";

export const Page: React.FC = function (props: any) {
  return (
    <div id={"main-container"}>
      <Hat/>

      <div className={"container-lg"}>
        {props.children}

        <Footer/>
      </div>
    </div>
  );
};

export default Page;
