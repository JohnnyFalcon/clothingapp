import React, { useState } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import { Button, InputLabel, Input, Box } from "@mui/material";
import PasswordInput from "./PasswordInput";
import { FormControlStyled, ButtonStyled, ButtonOutlined } from "./styles";

const defaultFormFields = {
  email: "",
  password: "",
  showPassword: false
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const passwordLable = "Password";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorect password");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}
      >
        <h2>Already have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <FormControlStyled sx={{ m: 1 }} variant="standard">
              <InputLabel>Email</InputLabel>
              <Input
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={formFields.email}
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
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{ mt: 4 }}>
            <ButtonOutlined type="submit" variant="outlined" sx={{ mr: "10%" }}>
              Sign In
            </ButtonOutlined>
            <ButtonStyled
              onClick={signInWithGoogle}
              variant="contained"
              sx={{ backgroundColor: "darkcyan", width: "200px" }}
            >
              Google sign in
            </ButtonStyled>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default SignIn;
