import styles from '../styles/register.module.css';
import type { NextPage } from "next";
import { Button} from "@krtech-digital/krtech-ui";
import { Input } from "@krtech-digital/krtech-ui";

const Register: NextPage = () => {
  return (
    <>
    <div className={styles.test}>
      <p>Sign Up</p>
      <p>Want to Sign up fill out this form!</p>
    <Input label="First name" placeholder='Jamie'/>
    <Input label="Last name" placeholder="Oliver"/>
    <Input label="Username" placeholder='Jamie123'/>
    <Input label="Password" type="password"/>
    <Button buttonText="Sign Up" variant="primary" style={{ margin: 25 }} />
    </div>
    </>
  )
};

export default Register;
