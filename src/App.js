import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import hatsImage from "./images/hats.jpg";
import tshirtsImage from "./images/tshirts.jpg";
import sneakersImage from "./images/sneakers.jpg";
import womenImage from "./images/women.jpg";
import menImage from "./images/men.jpg";
import SignUp from "./components/SigningPages/SignUp";
import SignIn from "./components/SigningPages/SignIn";

import { ThemeProvider } from "@mui/material";
import Shop from "./components/Shop/Shop";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import SingleCategory from "./components/Shop/SingleCategory";
import Footer from "./components/Footer/Footer";
import InfoPage from "./components/InfoPages/InfoPage";
import { theme } from "./theme";
import Snowfall from "react-snowfall";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      image: hatsImage
    },
    {
      id: 2,
      title: "Jackets",
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
      image: womenImage,
      xmas: true
    },
    {
      id: 5,
      title: "Men",
      image: menImage,
      xmas: true
    }
  ];

  const [snow, setSnow] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSnow(false);
  //   }, 8000);
  // });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {snow && (
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              zIndex: 10,
              pointerEvents: "none"
            }}
          >
            <Snowfall />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage categories={categories} />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:category" element={<SingleCategory />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path=":info" element={<InfoPage />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
