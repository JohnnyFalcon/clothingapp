import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  Grid,
  Box,
  Typography,
  Paper,
  Card,
  CardMedia,
  useMediaQuery
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { ButtonSimple, ButtonOutlined2 } from "../SigningPages/styles";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./styles.css";
import { CustomTooltipM, CustomTooltip } from "./styles";
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
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          letterSpacing: 3,
          mb: "3%"
        }}
      >
        Shopping
        <span style={{ color: "darkcyan" }}>&nbsp;cart</span>{" "}
        {/*  &nbsp; - its adding extra space  */}
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{ pl: isMobile ? "5%" : "14%", pr: isMobile ? "5%" : "7%" }}
      >
        <Grid item xs={12} md={6} lg={8} sx={{}}>
          <Box
            sx={{
              display: { md: "none", xs: "none", lg: "flex" },

              flexDirection: "row"
            }}
          >
            <Typography
              sx={{ mr: "16.5vw", ml: 2, fontWeight: "bold", color: "gray" }}
            >
              PRODUCT
            </Typography>
            <Typography sx={{ mr: "7vw", fontWeight: "bold", color: "gray" }}>
              PRICE
            </Typography>
            <Typography sx={{ mr: "6vw", fontWeight: "bold", color: "gray" }}>
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
                <Grid item lg={2} md={6} xs={6}>
                  <Card sx={{ width: isMobile ? "120px" : "160px" }}>
                    <CardMedia
                      component="img"
                      height="220px"
                      image={`${cartItem.imageUrl}`}
                      alt={`${cartItem.name}`}
                    />
                  </Card>
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={6}
                  xs={6}
                  sx={{
                    pl: "7%",
                    textAlign: "center"
                  }}
                >
                  <Box>
                    <p>{cartItem.name}</p>
                  </Box>
                  <Box display={{ lg: "none" }}>
                    <p style={{ fontSize: "1.2rem" }}>{cartItem.price}$</p>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={4}
                  xs={4}
                  sx={{ pl: "10%" }}
                  display={{ xs: "none", md: "none", lg: "grid" }}
                >
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
                <Grid
                  item
                  lg={2}
                  md={4}
                  xs={4}
                  sx={{
                    pl: isMobile ? "20%" : "15%"
                  }}
                >
                  <Box
                    sx={{
                      fontWeight: "bold",
                      mr: 6,
                      fontSize: "1.2rem",
                      display: "flex"
                    }}
                  >
                    <CustomTooltipM
                      title="Total"
                      placement="bottom"
                      open={isMobile}
                      disableInteractive
                      role="box"
                      display={{ xs: "flex", md: "flex", lg: "none" }}
                    >
                      <p>{cartItem.price * cartItem.quantity}$</p>
                    </CustomTooltipM>
                  </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={4}>
                  <CustomTooltip title="Are you sure ?" placement="bottom">
                    <DeleteForeverIcon
                      className="delete-icon"
                      sx={{ ml: isMobile ? "40%" : "60%", cursor: "pointer" }}
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
              top: "4rem",
              display: isMobile && "none"
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
      <Box
        sx={{
          backgroundColor: "#dae3e3",
          ml: "-3%",
          mr: "-3%",
          display: !isMobile && "none"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3
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
            mt: 2,
            pb: 2
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
      </Box>
    </>
  );
};

export default CheckoutPage;