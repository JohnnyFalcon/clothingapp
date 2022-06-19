import { CssBaseline, Typography } from "@mui/material";
import Directory from "./components/Directory/Directory";
import hatsImage from "./images/hats.jpg";
import tshirtsImage from "./images/tshirts.jpg";
import sneakersImage from "./images/sneakers.jpg";
import womenImage from "./images/women.jpg";
import menImage from "./images/men.jpg";
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
      <CssBaseline />
      <Directory categories={categories} />
    </>
  );
};

export default App;
