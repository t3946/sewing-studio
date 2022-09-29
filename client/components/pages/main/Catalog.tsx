import * as React from "react";
import cn from "classnames";
import Style from "@components/pages/main/Catalog.module.scss";
import Item from "@components/pages/main/Item";
import useSelector from "@hooks/useSelector";

export interface IProps {
  className?: any;
}

export const Catalog: React.FC<IProps> = function (props: IProps) {
  const { className } = props;
  const products = useSelector((state) => state.catalog.hoodies);

  const items = [];

  for (const product of products) {
    items.push(<Item product={product} key={`product-${product.productId}`} />);
  }

  return (
    <div className={cn(className)} id={"catalog"}>
      <h2 className={"text-center header-2"}>Магазин</h2>

      <div className={cn(Style.catalog)}>{items}</div>
    </div>
  );
};

export default Catalog;
