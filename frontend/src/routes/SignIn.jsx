import {Heading} from "../components/Heading.jsx"
import {SubHeading} from "../components/SubHeading.jsx"
import {InputBox} from "../components/InputBox.jsx"
import {Button} from "../components/Button.jsx"
import {BottomWarning} from "../components/BottomWarning.jsx"
export const SignIn = ()=>{
  return (
    <>
      <form
        action=""
        style={{
          width: "500px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Heading label={"Sign In"}/>
        <SubHeading label={"Enter your credentials to access your account"}/>
        <InputBox label={"Email"} placeholder={"example@gmail.com"}/>
        <InputBox label={"Password"} placeholder={"Enter your password"}/>
        <Button label={"Sign In"}/>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signin"}/>
      </form>
    </>
  );
};