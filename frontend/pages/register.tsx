import type { NextPage } from "next";
import { Button, Checkbox, Input } from "@krtech-digital/krtech-ui";
import style from "../styles/Register.module.css"

const Register: NextPage = () => {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <div className={style.input}>
                    <Input label="Enter name" id="email-username" placeholder="Name"></Input>
                    <Input label="Enter surname" id="" placeholder="Surname"></Input>
                    <Input label="Enter e-mail" id="email-username" placeholder="name@email.com" ></Input>
                    <Input label="Enter password" id="" placeholder="password"></Input>
                </div>
                <div className={style.break}></div>
                <Button buttonText="register" variant="primary"></Button>
                <Checkbox label="Do you want to register?"></Checkbox>
            </div>
        </div>
    );
};

export default Register;
