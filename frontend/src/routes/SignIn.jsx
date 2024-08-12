import {Heading} from "../components/Heading.jsx"
import {SubHeading} from "../components/SubHeading.jsx"
import {InputBox} from "../components/InputBox.jsx"
import {Button} from "../components/Button.jsx"
import {BottomWarning} from "../components/BottomWarning.jsx"
import { useState } from "react"
import { Navigate } from "react-router-dom"
export const SignIn = ()=>{

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
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
        <InputBox label={"Email"} placeholder={"example@gmail.com"} onchange={(e)=>{
          setUsername(e.target.value)
        }}/>
        <InputBox label={"Password"} placeholder={"Enter your password"} onchange={(e)=>{
          setPassword(e.target.value)} }/>
        <Button label={"Sign In"} onClick={async ()=>{
          const response = await fetch("http://localhost:3000/api/v1/user/signin",{
            method: "POST",
            body:{
              username: username,
              password: password
            }
          })
          const data = await response.json()
          console.log(data)
          localStorage.setItem("authorization", data.token)
          Navigate("/dashboard")
        }}/>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signin"}/>
      </form>
    </>
  );
};