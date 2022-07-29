import * as React from "react";
import cn from "classnames";

export interface IProps {
  className?: any;
}

export const Truck: React.FC<IProps> = function (props) {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      className={cn(className)}
      fill="currentColor"
    >
      <path
        className="fa-primary"
        d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H574.9C567.1 361.7 520.4 320 464 320C407.6 320 360.9 361.7 353.1 416H286.9C279.1 361.7 232.4 320 176 320C119.6 320 72.9 361.7 65.13 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416z"
      />
      <path
        className="fa-secondary"
        opacity={0.4}
        d="M96 432C96 387.8 131.8 352 176 352C220.2 352 256 387.8 256 432C256 476.2 220.2 512 176 512C131.8 512 96 476.2 96 432zM384 432C384 387.8 419.8 352 464 352C508.2 352 544 387.8 544 432C544 476.2 508.2 512 464 512C419.8 512 384 476.2 384 432z"
      />
    </svg>
  );
};

export default Truck;
