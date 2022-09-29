import * as React from "react";
import Button from "react-bootstrap/Button";
import BForm from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import { setContacts } from "@redux/reducer/Order";
import { useDispatch } from "react-redux";

export interface IProps {
  submit?: any;
}

export const Form: React.FC<IProps> = function (props: IProps) {
  const { submit } = props;
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    const phone = e.target["checkoutPhone"].value;
    const email = e.target["checkoutEmail"].value;
    dispatch(setContacts({ phone, email }));
    submit && submit();
  }

  return (
    <div>
      <BForm onSubmit={submitHandler}>
        <BForm.Group className="mb-3" controlId="checkoutPhone">
          <BForm.Label>Телефон *</BForm.Label>
          <InputMask mask="8 999 999 99 99" maskChar="_">
            {(inputProps) => (
              <BForm.Control {...inputProps} type="tel" required />
            )}
          </InputMask>

          <BForm.Text className="text-muted">
            Вы будете получать смс с информацие о заказе
          </BForm.Text>
        </BForm.Group>

        <BForm.Group className="mb-3" controlId="checkoutEmail">
          <BForm.Label>Email (необязательно)</BForm.Label>
          <BForm.Control type="email" />

          <BForm.Text className="text-muted">
            Вы будете получать письма с информацие о заказе
          </BForm.Text>
        </BForm.Group>

        <div className={"text-center"}>
          <Button variant="primary" type="submit">
            Перейти к оплате
          </Button>
        </div>
      </BForm>
    </div>
  );
};

export default Form;
