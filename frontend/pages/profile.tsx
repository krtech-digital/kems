import type { NextPage } from "next";
import { Button, Checkbox, Input } from "@krtech-digital/krtech-ui";
import style from "../styles/Profile.module.css"

const Login: NextPage = () => {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <div>
                    <p className={style.username}>username</p>
                    <p className={style.email}>email</p>
                </div>
                <br></br>
                <Button buttonText="Log out" variant="primary"></Button>
            </div>
        </div>
    );
};

export default Login;
