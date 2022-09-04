import * as React from "react";
import MainHeader from "@components/common/layout/main-header/MainHeader";
import NeonText from "@components/common/layout/neon-text/NeonText";
import dynamic from "next/dynamic";
import PrizeModal from "@components/pages/box/PrizeModal";
import Catalog from "@components/pages/box/catalog/Catalog";
import ModalItem from "@components/pages/box/catalog/ModalItem";

const Game = dynamic(() => import("@components/pages/box/Game"), {
  ssr: false,
});

export interface IProps {
  box: any;
}

export const Box: React.FC<IProps> = function (props) {
  const { box } = props;
  //prize modal
  const [modalPrizeShow, setModalPrizeShow] = React.useState(false);
  const handleModalPrizeClose = () => setModalPrizeShow(false);
  const handleModalPrizeShow = () => setModalPrizeShow(true);
  //item modal
  const [modalItemShow, setModalItemShow] = React.useState(false);
  const handleModalItemClose = () => setModalItemShow(false);
  const handleModalItemShow = () => setModalItemShow(true);
  const [prize, setPrize] = React.useState(box.items[0]);

  const [itemModal, setItemModal] = React.useState(0);

  return (
    <>
      <div className="row">
        <div className="col">
          <MainHeader>
            <NeonText text={box?.name} />
          </MainHeader>
        </div>
      </div>

      <Game
        items={box.items}
        handleModalPrizeShow={handleModalPrizeShow}
        setPrize={setPrize}
      />

      <Catalog
        items={box.items}
        handleModalItemShow={handleModalItemShow}
        setItemModal={setItemModal}
      />

      <ModalItem
        show={modalItemShow}
        items={box.items}
        handleClose={handleModalItemClose}
        startFrom={itemModal}
      />

      <PrizeModal
        show={modalPrizeShow}
        item={prize}
        handleClose={handleModalPrizeClose}
      />
    </>
  );
};

export default Box;
