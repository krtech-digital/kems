import type { NextPage } from "next";
import { Button, Checkbox, Input } from "@krtech-digital/krtech-ui";
import style from "../styles/Register.module.css";

const Register: NextPage = () => {
  return (
    <div>
      <div className={style.Container}>
        <Input label="First name"></Input>
        <Input label="Last name"></Input>
        <Input label="Username"></Input>
        <Input type="password" label="Password"></Input>
        <Button
          style={{ marginTop: "10px", marginLeft: "110px" }}
          buttonText="Sign up"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default Register;
