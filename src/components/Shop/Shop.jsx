import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Grid, Paper, Box, useMediaQuery } from "@mui/material";
import "./styles.css";
import { ButtonStyled, ButtonStyledMobile } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { CustomTooltipM } from "../CheckoutPage/styles";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);
  const isMobile = useMediaQuery("(max-width:900px)");
  return Object.keys(categoriesMap)?.map((title) => (
    <React.Fragment key={title}>
      <Box
        sx={{
          display: "flex",
          pb: !isMobile && 2,
          justifyContent: isMobile && "center"
        }}
      >
        <CustomTooltipM
          title="Tap for more"
          placement="right"
          open={isMobile}
          disableInteractive
          role="box"
        >
          <Link className="linkShop" to={title}>
            <h2 className="category-title">{title}</h2>
          </Link>
        </CustomTooltipM>
      </Box>

      <Grid container spacing={2}>
        {/* slice - extracting n elements from object "categoriesMap" */}
        {categoriesMap[title].slice(0, 4)?.map((product) => (
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
    </React.Fragment>
  ));
};

export default Shop;
