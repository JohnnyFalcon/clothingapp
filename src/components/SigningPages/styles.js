import { FormControl, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
const FormControlStyled = styled(FormControl)({
  "& label.Mui-focused": {
    color: " darkcyan"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "darkcyan"
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "darkcyan"
    }
  }
});

const ButtonStyled = styled(Button)({
  "&:hover": {
    backgroundColor: "white",
    color: "darkcyan"
  }
});

const ButtonOutlined = styled(Button)({
  color: "darkcyan",
  borderColor: "#004a4a",
  width: "200px",

  "&:hover": {
    borderColor: "black"
  }
});

const ButtonSimple = styled(Button)({
  "&:hover": {
    backgroundColor: "black",
    opacity: 0.8
  }
});

const ButtonOutlined2 = styled(Button)({
  borderColor: "black",
  width: "250px",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
    borderColor: "black"
  }
});
export {
  FormControlStyled,
  ButtonStyled,
  ButtonOutlined,
  ButtonSimple,
  ButtonOutlined2
};
