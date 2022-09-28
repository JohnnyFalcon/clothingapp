import React, { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import { InputLabel, Input, Box, useMediaQuery } from "@mui/material";
import PasswordInput from "./PasswordInput";
import { FormControlStyled, ButtonStyled, ButtonOutlined } from "./styles";
import { Container } from "@mui/system";

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
      const { user } = await signInAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );

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
    await signInWithGooglePopup();
  };
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Container
        fixed
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <Box
          sx={{
            width: "570px",
            textAlign: "center",
            mt: isMobile && 7
          }}
        >
          <h1 style={{ letterSpacing: "2px" }}>Already have an account?</h1>
          <span style={{ fontSize: "1.2rem", color: "darkcyan" }}>
            Sign up with your email and password
          </span>
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
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{
                mt: 4,
                flexDirection: isMobile && "column",
                alignItems: isMobile && "center"
              }}
            >
              <ButtonOutlined
                type="submit"
                variant="outlined"
                sx={{ mr: !isMobile && "10%", mb: isMobile && 2 }}
              >
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
      </Container>
    </>
  );
};

export default SignIn;
