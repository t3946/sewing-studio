import * as React from "react";
import Style from "@components/common/layout/footer/Footer.module.scss";
import cn from "classnames";
import MainPageMap from "@components/common/layout/map/MainPageMap";
import IconEmail from "@components/common/icons/email/Email";
import IconPhone from "@components/common/icons/phone/Phone";
import IconVk from "@components/common/icons/vk/Vk";
import IconTelegram from "@components/common/icons/telegram/Telegram";
import Payments from "@components/common/layout/footer/Payments";
import { useRouter } from "next/router";
import FileWord from "@components/common/icons/file-word/duotone/FileWord";

export const Footer: React.FC = function () {
  const router = useRouter();

  return (
    <div className={cn("mt-5", "d-flex", "flex-column")}>
      {router.route === "/" && <MainPageMap />}

      <div className={cn(Style.footer)}>
        <div className="container-lg">
          <div className="row">
            <div className="col-4" id={"contacts"}>
              <div>Контакты:</div>
              <div className={cn("d-flex", "flex-column", "mb-3")}>
                <a
                  href={"mail:svialence@yandex.ru"}
                  target={"_blank"}
                  className={cn(Style.contactLink, "mb-2", "link-unstyled")}
                >
                  <IconEmail className={cn(Style.contactIcon)} />
                  <span className={"ms-2"}>svialence@yandex.ru</span>
                </a>

                <a
                  href={"tel:8 (958) 665-52-87"}
                  target={"_blank"}
                  className={cn(Style.contactLink, "link-unstyled")}
                >
                  <IconPhone className={cn(Style.contactIcon)} />
                  <span className={"ms-2"}>8 (958) 665-52-87</span>
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

            <div className={cn("col-4")}>
              <div className={cn("d-flex", Style.secondaryText)}>
                <div className={cn("text-end", "me-2")}>
                  <span>ИП:</span>
                  <br />
                  <span>ИНН:</span>
                  <br />
                  <span>ОГРНИП:</span>
                </div>

                <div>
                  <span>Лимонов Владислав Николаевич</span> <br />
                  <span>434587939091</span> <br />
                  <span>322435000009905</span>
                </div>
              </div>

              <div className={"my-3"}>
                <a
                  href={"/oferta.rtf"}
                  target={"_blank"}
                  className={cn(Style.ofertaLink)}
                >
                  <div className={"d-flex align-items-center"}>
                    <FileWord className={Style.ofertaIcon} />
                    <span className={"ms-2"}>Договор оферты</span>
                  </div>
                </a>
              </div>

              <div className={cn(Style.strong, "mt-2")}>
                <span>Техподдержка:</span>
                <br />
                <div className={cn("d-flex", "align-items-center")}>
                  <IconPhone className={cn(Style.phoneSupportIcon, "me-2")} />
                  <span>8 912 723 93 98</span>
                </div>
              </div>
            </div>
          </div>

          <div className={cn("text-center", Style.secondaryText)}>
            © 2022 Студия ТМ. Все права защищены.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
