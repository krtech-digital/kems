import type { NextPage } from "next";
import { Button, Checkbox, Input } from "@krtech-digital/krtech-ui";
import "./style.css";

const Register: NextPage = () => {
    return (
        <div className="main">
            <Button buttonText="register" variant="primary"></Button>
            <Checkbox label="Do you want to register?"></Checkbox>
        </div>
    );
};

export default Register;
