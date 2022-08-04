import type { NextPage } from "next";
import { Input } from "@krtech-digital/krtech-ui";

const Login: NextPage = () => {
  return (
    <div>
      <Input label="Username" />
      <Input label="Password" />
    </div>
  );
};

export default Login;
