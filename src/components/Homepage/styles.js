import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  maxWidth: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center"
  //   "&:hover": {
  //     transform: "scale(1.1)",
  //     transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)"
  //   }
});

const BoxStyled = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "90px",
  padding: "0 25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
  backgroundColor: "white",
  opacity: 0.7
});

const H2 = styled("h2")({
  fontWeight: "bold",
  margin: "0 6px 0",
  fontSize: "22px",
  color: "#4a4a4a"
});
const P = styled("p")({
  fontWeight: "lighter",
  fontSize: "16px",
  marginTop: 5,
  marginBottom: 6
});
const GridStyled = styled(Grid)({
  position: "relative",
  border: "1px solid black",
  "&:hover": {
    cursor: "pointer",
    "& .BoxStyled": {
      opacity: 0.9
    }
  }
});
export { GridStyled, Img, BoxStyled, H2, P };
