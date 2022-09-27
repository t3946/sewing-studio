import * as React from "react";
import cn from "classnames";
import Style from "@components/pages/main/Catalog.module.scss";
import Item from "@components/pages/main/Item";

export interface IProps {
  className?: any;
}

export const Catalog: React.FC<IProps> = function (props: IProps) {
  const { className } = props;
  const products = [
    {
      productId: 1,
      image: "/images/pages/main/hoodies1.jpg",
      description: "Худи красный; футер трёхнитка, с начёсом",
      price: 3800,
    },
    {
      productId: 2,
      image: "/images/pages/main/hoodies2.jpg",
      description: "Худи синий; футер трёхнитка, с начёсом",
      price: 3800,
    },
    {
      productId: 3,
      image: "/images/pages/main/hoodies3.jpg",
      description: "Худи двухцветный; футер трёхнитка, с начёсом",
      price: 4500,
    },
  ];

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
