import * as React from "react";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import Style from "@components/common/form/button/Button.module.scss";
import { Button as RBButton } from "react-bootstrap";
import cn from "classnames";

export interface IProps extends PropsWithChildren<any> {
  type?: ButtonHTMLAttributes<any>["type"];
  className?: any;
  disabled?: boolean;
}

export const Button: React.FC<IProps> = function (props) {
  const { children, type = "button", className, disabled } = props;

  return (
    <RBButton
      type={type}
      className={cn(Style.button, className, {
        [Style.button_disabled]: disabled,
      })}
      disabled={disabled}
    >
      {children}
    </RBButton>
  );
};

export default Button;
