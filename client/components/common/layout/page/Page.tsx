import * as React from "react";
import Hat from "@components/common/layout/hat/Hat";
import Footer from "@components/common/layout/footer/Footer";

export const Page: React.FC = function (props: any) {
  return (
    <div id={"main-container"} className={"mh-100 d-flex flex-column"}>
      <div className="flex-grow-1">
        <Hat/>

        {props.children}
      </div>

      <Footer/>
    </div>
  );
};

export default Page;
