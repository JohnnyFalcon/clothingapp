import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  IconButton,
  InputAdornment
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControlStyled } from "./styles";
const PasswordInput = ({
  password,
  showPassword,
  labelName,

  setFormFields,
  name,
  formFields,
  typePass
}) => {
  const handlePassChange = (event) => {
    const { value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleClickShowPassword = () => {
    setFormFields({
      ...formFields,
      [typePass]: !showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControlStyled sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password">{labelName}</InputLabel>
      <Input
        required
        type={showPassword ? "text" : "password"}
        onChange={handlePassChange}
        value={password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControlStyled>
  );
};
export default PasswordInput;
