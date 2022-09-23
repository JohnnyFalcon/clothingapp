import { Routes, Route, useLocation, useParams } from "react-router-dom";
import React, { useEffect, useContext } from "react";
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
import { CategoriesContext } from "./contexts/categories.context";
import { theme } from "./theme";
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage categories={categories} />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:category" element={<SingleCategory />} />

            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
