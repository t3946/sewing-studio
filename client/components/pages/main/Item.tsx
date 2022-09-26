import * as React from "react";
import cn from "classnames";
import Style from "@components/pages/main/Item.module.scss";
import Button from 'react-bootstrap/Button';

export interface IProps {
  product: Record<any, any>;
}

export const Item: React.FC<IProps> = function (props) {
  const {product} = props;

  return <div className={cn("d-flex", "mb-2", Style.container)}>
    <img
      src={product.image}
      alt={"site log"}
      className={cn("user-drag-none", "user-select-none")}
      width={200}
      height={200}
    />

    <div className={cn("flex-grow-1", Style.descriptionBlock)}>{product.description}</div>

    <div className={cn(Style.priceBlock, Style.priceBlock)}>
      цена: <b>{product.price} руб.</b><br/>
      <Button variant={"outline-primary"} className={"w-100"}>Купить</Button>
    </div>
  </div>;
};

export default Item;
