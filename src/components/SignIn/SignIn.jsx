import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import { Button } from "@mui/material";
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign-in</h1>
      <Button variant="outlined" onClick={logGoogleUser}>
        Sign in with Google Popup
      </Button>
    </>
  );
}

export default SignIn;
