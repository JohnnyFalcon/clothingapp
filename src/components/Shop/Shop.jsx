import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Grid, Paper, Box, Button, Typography } from "@mui/material";
import "./styles.css";
import { ButtonStyled } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
const Shop = () => {
  const { categoriesMap, setCategory } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);

  return Object.keys(categoriesMap)?.map((title) => (
    <React.Fragment key={title}>
      <Box sx={{ display: "flex", pb: 2 }} onClick={() => setCategory(title)}>
        <Link className="link" to={title}>
          <h2 className="category-title">{title}</h2>
        </Link>
      </Box>

      <Grid container spacing={2}>
        {/* slice - extracting n elements from object "categoriesMap" */}
        {categoriesMap[title].slice(0, 4)?.map((product) => (
          <Grid item lg={3} sm={6} xs={6} key={product.id} sx={{ pb: 2 }}>
            <Paper
              className="product"
              elevation={4}
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
                width: "100%"
              }}
            >
              <Box
                className="img-box"
                sx={{ backgroundImage: `url(${product.imageUrl})` }}
              />
              <ButtonStyled
                className="button"
                variant="contained"
                onClick={() => addItemToCart(product)}
              >
                Add to card
              </ButtonStyled>
            </Paper>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p className="title">{product.name}</p>
              <p className="title">{product.price}$</p>
            </Box>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  ));
};

export default Shop;
