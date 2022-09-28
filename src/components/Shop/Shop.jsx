import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import {
  Grid,
  Paper,
  Box,
  useMediaQuery,
  Alert,
  Snackbar
} from "@mui/material";
import "./styles.css";
import { ButtonStyled, ButtonStyledMobile } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { CustomTooltipM } from "../CheckoutPage/styles";
const Shop = () => {
  const { categoriesMap, basketOpen } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
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
          open={!basketOpen && isMobile}
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
                  onClick={() => {
                    handleClick();
                    addItemToCart(product);
                    setValue(product.name);
                  }}
                >
                  Add to card
                </ButtonStyledMobile>
              ) : (
                <ButtonStyled
                  className="button"
                  variant="contained"
                  onClick={() => {
                    handleClick();
                    addItemToCart(product);
                    setValue(product.name);
                  }}
                >
                  Add to card
                </ButtonStyled>
              )}
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert
                  severity="success"
                  sx={{
                    width: "100%"
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{value}</span> was
                  successfully added to your shopping cart !
                </Alert>
              </Snackbar>
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
