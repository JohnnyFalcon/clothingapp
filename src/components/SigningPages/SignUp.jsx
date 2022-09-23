import React, { useState } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import { InputLabel, Input, Box, useMediaQuery } from "@mui/material";
import PasswordInput from "./PasswordInput";
import { FormControlStyled, ButtonOutlined } from "./styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  showPassword: false,
  showConfirmPassword: false
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const passwordLable = "Password";
  const confirmLable = "Confirm Passowrd";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already exist");
      } else {
        console.log(error);
      }
    }
  };
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Box
        sx={{
          position: isMobile ? "flex" : "absolute",
          top: !isMobile && "40%",
          left: !isMobile && "50%",
          transform: !isMobile && "translate(-50%, -50%)",
          textAlign: "center",
          justifyContent: isMobile && "center",
          mt: isMobile && 7
        }}
      >
        <h1 style={{ letterSpacing: "2px" }}>
          Sign up with your <span style={{ color: "darkcyan" }}>email</span> and
          <span style={{ color: "darkcyan" }}> password</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <FormControlStyled sx={{ m: 1 }} variant="standard">
              <InputLabel>Display Name</InputLabel>
              <Input
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
              ></Input>
            </FormControlStyled>
            <FormControlStyled sx={{ m: 1 }} variant="standard">
              <InputLabel>Email</InputLabel>
              <Input
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
              ></Input>
            </FormControlStyled>
            <PasswordInput
              labelName={passwordLable}
              handleChange={handleChange}
              name={"password"}
              setFormFields={setFormFields}
              password={formFields.password}
              showPassword={formFields.showPassword}
              formFields={formFields}
              typePass={"showPassword"}
            />
            <PasswordInput
              labelName={confirmLable}
              handleChange={handleChange}
              name={"confirmPassword"}
              setFormFields={setFormFields}
              password={formFields.confirmPassword}
              showPassword={formFields.showConfirmPassword}
              formFields={formFields}
              typePass={"showConfirmPassword"}
            />
          </Box>
          <ButtonOutlined
            type="submit"
            variant="outlined"
            sx={{
              mt: 4
            }}
          >
            Sign Up
          </ButtonOutlined>
        </form>
      </Box>
    </>
  );
};

export default SignUp;
