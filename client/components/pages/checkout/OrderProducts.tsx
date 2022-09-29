import * as React from "react";
import useSelector from "@hooks/useSelector";
import OrderProduct from "@components/pages/checkout/OrderProduct";
import Style from "@components/pages/checkout/OrderProducts.module.scss";

export const OrderProducts: React.FC = function () {
  const catalog = useSelector((state) => state.catalog.hoodies);
  const cart = useSelector((state) => state.cart.list);
  const productInCart = [];

  for (const cartElement of cart) {
    for (const catalogElement of catalog) {
      if (cartElement.productId === catalogElement.productId) {
        productInCart.push(
          <OrderProduct
            product={catalogElement}
            count={cartElement.count}
            key={`product-${catalogElement.productId}`}
          />
        );
      }
    }
  }

  return (
    <div>
      <div className={Style.orderItems}>{productInCart}</div>
    </div>
  );
};

export default OrderProducts;
