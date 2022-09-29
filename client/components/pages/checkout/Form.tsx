import * as React from "react";
import Button from "react-bootstrap/Button";
import BForm from "react-bootstrap/Form";
import InputMask from "react-input-mask";

export const Form: React.FC = function () {
  return (
    <div>
      <BForm>
        <BForm.Group className="mb-3" controlId="checkoutPhone">
          <BForm.Label>Телефон *</BForm.Label>
          <InputMask mask="8 999 999 99" maskChar="_">
            {(inputProps) => <BForm.Control {...inputProps} type="tel" required />}
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
