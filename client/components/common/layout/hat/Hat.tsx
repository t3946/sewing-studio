import * as React from "react";
import Styles from "@components/common/layout/hat/Hat.module.scss";
import cn from "classnames";
import {modalOpen} from "@redux/reducer/Popup";
import {useDispatch} from "react-redux";
import useSelector from "@hooks/useSelector";
import UserPanel from "@components/common/layout/hat/UserPanel";
import Link from "next/link";
import MenuDesktop from "@components/common/layout/hat/MenuDesktop";
import HatMobile from "@components/common/layout/hat/mobile/HatMobile";
import ModalLogin from "@components/pages/main/modal-login/ModalLogin";
import ModalRegister from "@components/pages/main/modal-register/ModalRegister";
import Button from 'react-bootstrap/Button';

export const Hat: React.FC = function () {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  function openModalLogin() {
    dispatch(
      modalOpen({
        modal: "login",
      })
    );
  }

  return (
    <>
      <HatMobile className={["d-lg-none"]}/>

      <div className={cn([Styles.hatContainer])}>
        <header className={cn(Styles.hat, "d-none", "d-lg-block", "container-lg")}>
          <div className="row m-lg-0">
            <div className={cn("col-auto", "d-flex", "align-items-center")}>
              <Link href={"/main"}>
                <a>
                  <img
                    src={"/images/pages/main/logo.png"}
                    alt={"site log"}
                    className={Styles.logo}
                  />
                </a>
              </Link>
            </div>

            <div className="col d-none d-lg-flex align-items-center justify-content-center">
              <MenuDesktop/>
            </div>

            <div className={cn(["col-auto", "d-flex", "align-items-center"])}>
              {!user && (
                <Button variant="outline-dark" onClick={openModalLogin}>Войти</Button>
              )}

              {user && <UserPanel/>}
            </div>
          </div>
        </header>
      </div>

      <ModalLogin/>

      <ModalRegister/>
    </>
  );
};

export default Hat;
