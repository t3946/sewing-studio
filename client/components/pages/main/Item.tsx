import * as React from "react";
import cn from "classnames";
import Style from "@components/pages/main/Item.module.scss";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add, remove } from "@redux/reducer/Cart";
import useSelector from "@hooks/useSelector";
import Link from "next/link";

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

  function removeFromCart() {
    dispatch(
      remove({
        productId: product.productId,
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
        <div>
          <b>{product.name}</b>
        </div>
        <p>{product.description}</p>
      </div>

      <div className={cn(Style.priceBlock, Style.priceBlock)} suppressHydrationWarning>
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
          <div>
            <span className={Style.cartCounter}>В корзине: {count} шт.</span>
            <br />
            <Button
              variant={"outline-danger"}
              className={"w-100"}
              onClick={removeFromCart}
            >
              Убрать
            </Button>
            <br />
            <Link href={"/order/checkout"}>
              <a className={Style.checkoutLink}>Оформить заказ</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
