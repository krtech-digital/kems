import type { NextPage } from "next";
import { Button, Checkbox, Input } from "@krtech-digital/krtech-ui";
import style from "../styles/Login.module.css";

const Login: NextPage = () => {
  return (
    <div>
      <div className={style.Container}>
        <Input label="Username"></Input>
        <Input type="password" label="Password"></Input>
        <Button
          style={{ marginTop: "10px", marginLeft: "110px" }}
          buttonText="Log in"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default Login;
