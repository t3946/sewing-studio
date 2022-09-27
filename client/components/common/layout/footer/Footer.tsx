import * as React from "react";
import Style from "@components/common/layout/footer/Footer.module.scss";
import cn from "classnames";
import MainPageMap from "@components/common/layout/map/MainPageMap";
import IconEmail from "@components/common/icons/email/Email";
import IconPhone from "@components/common/icons/phone/Phone";
import IconVk from "@components/common/icons/vk/Vk";
import IconTelegram from "@components/common/icons/telegram/Telegram";
import Payments from "@components/common/layout/footer/Payments";

export const Footer: React.FC = function () {
  return (
    <div className={cn("mt-5", "d-flex", "flex-column")}>
      <MainPageMap />

      <div className={cn(Style.footer)}>
        <div className="container-lg">
          <div className="row">
            <div className="col-4">
              <div>Контакты:</div>
              <div className={cn("d-flex", "flex-column", "mb-3")}>
                <a
                  href={"mail:svialence@yandex.ru"}
                  target={"_blank"}
                  className={cn(Style.contactLink, "mb-2")}
                >
                  <IconEmail className={cn(Style.contactIcon)} />
                  <span className={"ms-2"}>svialence@yandex.ru</span>
                </a>

                <a
                  href={"tel:+7 (958) 665-52-87"}
                  target={"_blank"}
                  className={Style.contactLink}
                >
                  <IconPhone className={cn(Style.contactIcon)} />
                  <span className={"ms-2"}>+7 (958) 665-52-87</span>
                </a>
              </div>

              <a href={"https://vk.com/studi_tm_atelie"} target={"_blank"}>
                <IconVk className={cn(Style.socialIcon)} />
              </a>

              <a
                href={"https://t.me/+iiw1mRc9rlZjNWZi"}
                target={"_blank"}
                className={"ms-2"}
              >
                <IconTelegram className={cn(Style.socialIcon)} />
              </a>
            </div>

            <div className="col-4 d-flex justify-content-center">
              <div>
                <div>Приём платежей:</div>
                <Payments />
              </div>
            </div>

            <div className="col-4"></div>
          </div>

          <div className={cn("text-center", Style.copyright)}>
            © 2022 Студия ТМ. Все права защищены.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
