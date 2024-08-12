import { Heading } from "../components/Heading.jsx";
import { SubHeading } from "../components/SubHeading.jsx";
import { InputBox } from "../components/InputBox.jsx";
import { Button } from "../components/Button.jsx";
import { BottomWarning } from "../components/BottomWarning.jsx";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

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
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox
          label={"First Name"}
          placeholder={"Shivraj"}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <InputBox
          label={"Last Name"}
          placeholder={"Choudhary"}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <InputBox
          label={"Email"}
          placeholder={"example@gmail.com"}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <InputBox
          label={"Password"}
          placeholder={"Enter your password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          label={"Sign Up"}
          onClick={async () => {
            const data = {
              username: username,
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
            }
            try {
              const response = await fetch(
                "http://localhost:3000/api/v1/user/signup",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json", // This ensures that the Content-Length is correctly set
                  },
                  body: json(data)
                }
              );
              // const data = await response.json();
              // console.log(data);

            } catch (error) {
              return console.error(error);
            }

            localStorage.setItem("authorization", data.token);
            Navigate("/dashboard");
          }}
        />
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in"}
          to={"/signin"}
        />
      </form>
    </>
  );
};
