import type { NextPage } from "next";
import { Button, Checkbox, Input } from "@krtech-digital/krtech-ui";
import style from "../styles/Profile.module.css"

const Login: NextPage = () => {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <div className={style.banner}>
                    <img className={style.bannerimg} src="https://pcchip.hr/ostalo/zanimljivosti/znadete-li-sto-je-bliss/" alt="" />
                </div>
                name email
            </div>
        </div>
    );
};

export default Login;
