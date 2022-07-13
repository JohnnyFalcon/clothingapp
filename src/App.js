import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import hatsImage from "./images/hats.jpg";
import tshirtsImage from "./images/tshirts.jpg";
import sneakersImage from "./images/sneakers.jpg";
import womenImage from "./images/women.jpg";
import menImage from "./images/men.jpg";
import SignUp from "./components/SigningPage/SignUp";
import SignIn from "./components/SigningPage/SignIn";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      image: hatsImage
    },
    {
      id: 2,
      title: "T-shirts",
      image: tshirtsImage
    },
    {
      id: 3,
      title: "Sneakers",
      image: sneakersImage
    },
    {
      id: 4,
      title: "Women",
      image: womenImage
    },
    {
      id: 5,
      title: "Men",
      image: menImage
    }
  ];

  const theme = createTheme({
    typography: {
      fontFamily: ["Saira Semi Condensed", "sans-serif"].join(",")
    }
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage categories={categories} />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
