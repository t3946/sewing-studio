import * as React from "react";
import Style from "@components/pages/checkout/OrderProduct.module.scss";
import IconCross from "@components/common/icons/cross-large/CrossLarge";
import cn from "classnames";

export interface IProps {
  product: any;
  count: number;
}

export const OrderProduct: React.FC<IProps> = function (props) {
  const { product, count } = props;

  return (
    <div className={Style.container}>
      <div className={"d-flex"}>
        <div>
          <img src={product.image} alt={product.name} className={Style.image} />
        </div>

        <div className={cn("flex-grow-1", Style.descriptionColumn)}>
          <div className={"mb-2"}>{product.name}</div>
          <div className={"mb-2"}>{product.description}</div>
        </div>

        <div className={Style.multiplyColumn}>
          <IconCross className={Style.iconClose} />
        </div>

        <div className={cn(Style.counterColumn, "pe-2")}>{count}</div>
      </div>
    </div>
  );
};

export default OrderProduct;
