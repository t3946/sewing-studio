import React from "react";
import { createApp } from "@submodules/roulette/src/app";
import Style from "@components/pages/box/Game.module.scss";
import cn from "classnames";

interface IProps {
  items: Record<any, any>[];
  handleModalPrizeShow: any;
  setPrize: any;
}

export const Game: React.FC<IProps> = function (props) {
  const { items, handleModalPrizeShow, setPrize } = props;
  const [scene, setScene] = React.useState<any>(null);
  const rouletteItems = items.map((boxItem) => {
    return {
      id: boxItem.item_id,
      image: {
        path: "/storage/" + boxItem.image.name,
        width: boxItem.image.width,
        height: boxItem.image.height,
      },
    };
  });

  React.useEffect(() => {
    const app = createApp({
      canvas: document.getElementById("roulette-game") as HTMLCanvasElement,
      container: document.getElementById(
        "roulette-game-container"
      ) as HTMLElement,
      items: rouletteItems,
      isPrintGui: false,
      isDebug: false,
      cardBackground: "/images/pages/main/roulette/card.png",
    });

    setScene(app.stage.children[0]);
  }, []);

  function startGame() {
    const nextPrizeIndex = Math.round(Math.random() * (items.length - 1));

    scene.gameStart({
      nextWinIndex: nextPrizeIndex,
      onComplete: () => {
        setPrize(items[nextPrizeIndex]);
        handleModalPrizeShow();
      },
    });
  }

  return (
    <div className="row">
      <div className="col">
        <div id="roulette-game-container" className={Style.container}>
          <canvas id="roulette-game" />
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className={Style.buttonsGroup}>
              <button
                className={cn([
                  "roulette-ui-button",
                  Style.rouletteButton,
                  Style.rouletteUiLeftButton,
                ])}
              ></button>

              <button
                className={cn([
                  "roulette-ui-button",
                  Style.rouletteButton,
                  Style.rouletteUiCenterButton,
                ])}
                onClick={startGame}
              ></button>

              <button
                className={cn([
                  "roulette-ui-button",
                  Style.rouletteButton,
                  Style.rouletteUiRightButton,
                ])}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
