import * as React from "react";
import Style from "@components/common/layout/hat/Hat.module.scss";
import cn from "classnames";
import { modalOpen } from "@redux/reducer/Popup";
import { useDispatch } from "react-redux";
import useSelector from "@hooks/useSelector";
import Link from "next/link";
import MenuDesktop from "@components/common/layout/hat/MenuDesktop";
import HatMobile from "@components/common/layout/hat/mobile/HatMobile";
import ModalLogin from "@components/pages/main/modal-login/ModalLogin";
import ModalRegister from "@components/pages/main/modal-register/ModalRegister";
import IconCart from "@components/common/icons/cart/Cart";
import Badge from "react-bootstrap/Badge";

export const Hat: React.FC = function () {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.list);
  let totalItemsInCart = 0;

  for (const item of cart) {
    totalItemsInCart += item.count;
  }

  function openModalLogin() {
    dispatch(
      modalOpen({
        modal: "login",
      })
    );
  }

  return (
    <>
      <HatMobile className={["d-lg-none"]} />

      <div className={cn([Style.hatContainer])}>
        <header
          className={cn(Style.hat, "d-none", "d-lg-block", "container-lg")}
        >
          <div className="row m-lg-0">
            <div className={cn("col-auto", "d-flex", "align-items-center")}>
              <Link href={"/"}>
                <a>
                  <img
                    src={"/images/pages/main/logo.png"}
                    alt={"site log"}
                    className={Style.logo}
                  />
                </a>
              </Link>
            </div>

            <div className="col d-none d-lg-flex align-items-center justify-content-center">
              <MenuDesktop />
            </div>

            <div className={cn(["col-auto", "d-flex", "align-items-center"])}>
              <div className={Style.iconCart}>
                <Link href={"/checkout"}>
                  <a className={"link-dark"}>
                    <IconCart />
                    {totalItemsInCart > 0 && (
                      <Badge
                        pill
                        bg="danger"
                        className={cn(Style.iconCart_badge, Style.iconCart__badge)}
                      >
                        {totalItemsInCart}
                      </Badge>
                    )}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <ModalLogin />

      <ModalRegister />
    </>
  );
};

export default Hat;
