import type { NextPage } from "next";
import { Button, Checkbox, Input } from "@krtech-digital/krtech-ui";

const Register: NextPage = () => {
  return (
    <div className="main.style">
        <div className="content.style">
        <Input label="FirstName" placeholder="Please enter first Name"/> 
        <Input label="LastName" placeholder="Please enter last Name"/>
        <Input label="Email" placeholder="Please enter e-mail"/>
        <Input label="Password" placeholder="Please enter password"/> 
        </div>
         <Button buttonText="Submit" variant="primary"/>    
    </div>   
    
  );

  
  
};



export default Register;