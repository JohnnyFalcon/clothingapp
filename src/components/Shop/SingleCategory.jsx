import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Grid, Paper, Box, Skeleton, useMediaQuery } from "@mui/material";
import { ButtonStyled, ButtonStyledMobile } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { useParams } from "react-router-dom";
const SingleCategory = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);
  const { category } = useParams();
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          pb: !isMobile && 2,
          justifyContent: "center"
        }}
      >
        <h2 className="category-title2">{category}</h2>
      </Box>

      <Grid container spacing={2}>
        {categoriesMap[category]?.map((product) => (
          <Grid
            item
            lg={3}
            sm={6}
            xs={6}
            key={product.id}
            sx={{ pb: !isMobile && 2 }}
          >
            <Paper
              className={`${isMobile ? "product-mobile" : "product"}`}
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
              {isMobile ? (
                <ButtonStyledMobile
                  variant="contained"
                  onClick={() => addItemToCart(product)}
                >
                  Add to card
                </ButtonStyledMobile>
              ) : (
                <ButtonStyled
                  className="button"
                  variant="contained"
                  onClick={() => addItemToCart(product)}
                >
                  Add to card
                </ButtonStyled>
              )}
            </Paper>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p className="title">{product.name}</p>
              <p className="title">{product.price}$</p>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Set Skeleton of page whenever data is loading */}
      <Grid container spacing={2}>
        {!categoriesMap[category] &&
          Array.from(Array(8)).map((_, index) => (
            <Grid item lg={3} sm={6} xs={6} key={index} sx={{ pb: 2 }}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="100%"
                height="500px"
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default SingleCategory;