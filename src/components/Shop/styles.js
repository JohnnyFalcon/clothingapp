import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonStyled = styled(Button)({
  color: "darkcyan",
  backgroundColor: "white",
  width: "80%",
  height: "50px",
  position: "absolute",
  display: "none",
  position: "absolute",
  opacity: 0.7,
  marginBottom: "8%",
  "&:hover": {
    backgroundColor: "darkcyan",
    color: "white"
  }
});

export { ButtonStyled };
