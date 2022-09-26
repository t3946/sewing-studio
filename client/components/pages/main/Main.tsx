import * as React from "react";
import Studio from "@components/pages/main/Studio";
import Catalog from "@components/pages/main/Catalog";

export const Main: React.FC = function () {
  return (<div>
    <div className="container-lg">
      <Catalog className={"mt-4"} />

      <Studio className={"mt-4"}/>
    </div>
  </div>);
};

export default Main;
