import * as React from "react";
import StockItem from "@components/pages/account/stock/StockItem";
import ModalStockItem from "@components/pages/account/stock/ModalStockItem";
import { setData } from "@redux/reducer/Popup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export interface IProps {
  stock: any[];
  header: string;
}

export const Stock: React.FC<IProps> = function (props) {
  const { stock, header } = props;
  const stockItems = [];
  const dispatch = useDispatch();

  function openItemInModal(item) {
    dispatch(
      setData({
        modal: "stockItem",
        data: {
          item,
          show: true,
        },
      })
    );
  }

  for (const stockItem of stock) {
    stockItems.push(
      <StockItem
        stockItem={stockItem}
        key={`stock-item-${stockItem.stock_item_id}`}
        className={"col-3 mb-3"}
        onClick={() => openItemInModal(stockItem.item)}
      />
    );
  }

  return (
    <div>
      <h1>{header}</h1>

      <div className="row">{stockItems}</div>

      <ModalStockItem />
    </div>
  );
};

export default Stock;
