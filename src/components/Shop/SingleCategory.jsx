import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Grid, Paper, Box } from "@mui/material";
import { ButtonStyled } from "./styles";
import { CartContext } from "../../contexts/CartContext";
const SingleCategory = () => {
  const { categoriesMap, category } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);
  return (
    <>
      <Box sx={{ pb: 2 }}>
        <h2 className="category-title2">{category}</h2>
      </Box>

      <Grid container spacing={2}>
        {categoriesMap[category]?.map((product) => (
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
    </>
  );
};

export default SingleCategory;
