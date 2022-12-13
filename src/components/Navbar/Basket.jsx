import React, { Fragment } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Popover, Box, Grid, Badge, useMediaQuery } from "@mui/material";
import emptyImage from "../../images/empty.jpg";
import "./styles.css";
import { ButtonStyled, TypographyStyled } from "./styles";
import { CategoriesContext } from "../../contexts/categories.context";
import { Link } from "react-router-dom";
export const Basket = () => {
  const { cartItems, basketCount, removeAll } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [scrollbarV, setScrollbarV] = React.useState(false); // Scrollbar visibility
  const { setBasketOpen } = useContext(CategoriesContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBasketOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setBasketOpen(false);
  };
  const handleScroll = () => {
    setScrollbarV(true);
  };
  const handleMouseOver = () => {
    setScrollbarV(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Badge
        badgeContent={basketCount}
        color="myColor"
        sx={{ mt: isMobile && "5px" }}
      >
        <ShoppingBagOutlinedIcon
          className="basket"
          onClick={handleClick}
          sx={{
            ml: isMobile ? "0" : "40px",

            fontSize: "2rem",
            cursor: "pointer"
          }}
        />
      </Badge>

      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        PaperProps={{
          sx: {
            border: "1px solid black",
            height: "340px",
            width: "264px",
            marginTop: "17px",
            display: "flex",
            flexDirection: "column",
            overscrollBehavior: "contain",
            overflow: cartItems.length === 0 && "hidden"
          }
        }}
      >
        {cartItems.length === 0 ? (
          <>
            <TypographyStyled>Your Cart is empty.</TypographyStyled>
            <img className="basket-img" alt="empty" src={emptyImage} />
          </>
        ) : (
          <>
            <Box
              className={`basket-scroll ${
                scrollbarV ? "basket-scrollOn" : "basket-scrollOff"
              }`}
              onScroll={handleScroll}
              onMouseLeave={handleMouseOver}
            >
              {cartItems.map((cartItem) => (
                <Fragment key={cartItem.id}>
                  <Grid
                    container
                    sx={{
                      margin: 2,
                      height: "120px",
                      width: "auto",
                      paddingRight: !scrollbarV && "7px"
                    }}
                  >
                    <Grid
                      item
                      xs={6}
                      md={6}
                      lg={6}
                      sx={{
                        backgroundImage: `url(${cartItem.imageUrl})`,
                        backgroundSize: "90% 90%",
                        backgroundRepeat: "no-repeat"
                      }}
                    ></Grid>
                    <Grid
                      item
                      xs={6}
                      md={6}
                      lg={6}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center"
                      }}
                    >
                      <span>{cartItem.name}</span>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <span>
                          {cartItem.quantity} x ${cartItem.price}
                        </span>

                        <ClearIcon
                          sx={{
                            ml: 5,
                            mt: "5px",
                            fontSize: "1.2rem",
                            cursor: "pointer"
                          }}
                          onClick={() => removeAll(cartItem)}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Fragment>
              ))}
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "50px",
                position: "absolute",
                top: "85%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <ButtonStyled
                  disableElevation
                  variant="contained"
                  onClick={() => setAnchorEl(null)}
                >
                  View cart
                </ButtonStyled>
              </Link>
            </Box>
          </>
        )}
      </Popover>
    </>
  );
};
