import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Grid, Box, Typography, Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { ButtonSimple, ButtonOutlined2 } from "../SigningPages/styles";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./styles.css";
import { CustomTooltip } from "./styles";
const CheckoutPage = () => {
  const { cartItems, removeAll, removeOne, addItemToCart, total } =
    useContext(CartContext);
  const [color, setColor] = React.useState({ color: "black" });
  const [color2, setColor2] = React.useState({ color: "darkcyan" });

  useEffect(() => {
    const interval = setInterval(() => {
      setColor({ color: "darkcyan" });
      setColor2({ color: "black" });
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setColor({ color: "black" });
      setColor2({ color: "darkcyan" });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          letterSpacing: 3,
          mb: 7
        }}
      >
        Shopping
        <span style={{ color: "darkcyan" }}>&nbsp;cart</span>{" "}
        {/*  &nbsp; - its adding extra space  */}
      </Typography>

      <Grid container spacing={4} sx={{ pl: "14%", pr: "7%" }}>
        <Grid item xs={12} md={6} lg={8} sx={{}}>
          <Box
            sx={{
              display: { md: "none", xs: "none", lg: "flex" },

              flexDirection: "row"
            }}
          >
            <Typography
              sx={{ mr: 40, ml: 2, fontWeight: "bold", color: "gray" }}
            >
              PRODUCT
            </Typography>
            <Typography sx={{ mr: 16, fontWeight: "bold", color: "gray" }}>
              PRICE
            </Typography>
            <Typography sx={{ mr: 16, fontWeight: "bold", color: "gray" }}>
              QUANTITY
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "gray" }}>
              TOTAL
            </Typography>
          </Box>
          <hr className="hrL" />

          {cartItems.map((cartItem) => (
            <>
              <Grid
                container
                key={cartItem.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 3,
                  mb: 3
                }}
              >
                <Grid item lg={2} md={4} xs={4}>
                  <img
                    src={`${cartItem.imageUrl}`}
                    style={{
                      height: "220px",
                      width: "180px",
                      objectFit: "cover"
                    }}
                  />
                </Grid>
                <Grid item lg={2} md={4} xs={4} sx={{ pl: "7%" }}>
                  <Box>
                    <p>{cartItem.name}</p>
                  </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={4} sx={{ pl: "10%" }}>
                  <Box>
                    <p style={{ fontSize: "1.2rem" }}>{cartItem.price}$</p>
                  </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={4} sx={{ pl: "10%" }}>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <RemoveCircleIcon
                      sx={{
                        color: "gray",

                        cursor: "pointer",
                        mt: "3px",
                        zIndex: 10
                      }}
                      onClick={() => removeOne(cartItem)}
                    />
                    <Box
                      sx={{
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        pl: 2,
                        pr: 2
                      }}
                    >
                      <span
                        style={{
                          color: cartItem.quantity % 2 === 0 && "darkcyan",
                          fontSize: "1.2rem"
                        }}
                      >
                        {cartItem.quantity}
                      </span>
                    </Box>

                    <AddCircleIcon
                      sx={{
                        color: "darkcyan",

                        cursor: "pointer",
                        mt: "3px",
                        zIndex: 10
                      }}
                      onClick={() => addItemToCart(cartItem)}
                    />
                  </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={4} sx={{ pl: "15%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Box sx={{ fontWeight: "bold", mr: 6, fontSize: "1.2rem" }}>
                      <p>{cartItem.price * cartItem.quantity}$</p>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={2} md={6} xs={6}>
                  <CustomTooltip title="Are you sure ?" placement="bottom">
                    <DeleteForeverIcon
                      className="delete-icon"
                      sx={{ ml: "60%", cursor: "pointer" }}
                      onClick={() => removeAll(cartItem)}
                    />
                  </CustomTooltip>
                </Grid>
              </Grid>
              <hr className="hrL" />
            </>
          ))}
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Paper
            sx={{
              backgroundColor: "#dae3e3",
              height: "400px",
              width: "300px",
              position: "sticky",
              top: "4rem"
            }}
          >
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                pt: 5
              }}
            >
              Summary
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 3
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                Order total
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                {total}$
              </Typography>
            </Box>
            <hr style={{ margin: 20 }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <ButtonSimple
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  width: "250px",
                  mb: 2,
                  height: "45px"
                }}
              >
                Proceed to checkout
              </ButtonSimple>
              <Link to="/shop" style={{ textDecoration: "none" }}>
                <ButtonOutlined2
                  variant="outlined"
                  sx={{ color: "black", height: "45px" }}
                >
                  Continue shopping
                </ButtonOutlined2>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 3,
                mt: 6
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{
                  color: color,
                  fontSize: "1.8rem",
                  filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
                }}
              />
              <ShoppingCartOutlinedIcon
                sx={{
                  color: color2,
                  fontSize: "1.8rem",
                  filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutPage;
