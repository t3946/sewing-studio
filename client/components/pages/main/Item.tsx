import * as React from "react";
import cn from "classnames";
import Style from "@components/pages/main/Item.module.scss";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "@redux/reducer/Cart";
import useSelector from "@hooks/useSelector";

export interface IProps {
  product: Record<any, any>;
}

export const Item: React.FC<IProps> = function (props) {
  const { product } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.list);
  const cartProduct = cart.find((elem) => product.productId === elem.productId);
  const count = cartProduct?.count || 0;

  function addToCart() {
    dispatch(
      add({
        productId: product.productId,
        count: 1,
      })
    );
  }

  return (
    <div className={cn("d-flex", "mb-2", Style.container)}>
      <img
        src={product.image}
        alt={"site log"}
        className={cn("user-drag-none", "user-select-none")}
        width={200}
        height={200}
      />

      <div className={cn("flex-grow-1", Style.descriptionBlock)}>
        {product.description}
      </div>

      <div className={cn(Style.priceBlock, Style.priceBlock)}>
        цена: <b>{product.price} руб.</b>
        <br />
        <Button
          variant={"outline-primary"}
          className={"w-100"}
          onClick={addToCart}
        >
          Купить
        </Button>

        {count > 0 && (
          <div suppressHydrationWarning>
            <span className={Style.cartCounter}>В корзине: {count} шт.</span>
            <Button variant={"outline-primary"} className={"w-100"}>
              Чекаут
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
