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

export { FormControlStyled, ButtonStyled, ButtonOutlined };
