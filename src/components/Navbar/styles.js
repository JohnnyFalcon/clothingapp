import { Paper, Button, Typography, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonStyled = styled(Button)({
  backgroundColor: "darkcyan",
  width: "200px",
  boxShadow: 0,
  marginBottom: 12,

  "&:hover": {
    backgroundColor: "white",
    color: "darkcyan",
    border: "1px solid darkcyan",
    transform: "translateY(-1px)"
  }
});
const PaperStyled = styled(Paper)({
  border: "1px solid black",
  height: "340px",
  width: "240px",
  marginTop: "17px",
  display: "flex",
  justifyContent: "center"
});
const TypographyStyled = styled(Typography)({
  position: "absolute",
  top: "35%",
  left: "12%",
  fontSize: "1.5rem",
  zIndex: 1
});

export { ButtonStyled, PaperStyled, TypographyStyled };
