import * as React from "react";

export const MainPageMap: React.FC = function () {
  return (<div className={"d-flex"}>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Accab12c2407b789d2929a629571c3c453453fd90a50724e6926d3073637010ee&amp;source=constructor"
      width="100%" height="300" frameBorder="0" />
  </div>);
};

export default MainPageMap;
