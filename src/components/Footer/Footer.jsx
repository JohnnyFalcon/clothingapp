import {
  Box,
  Paper,
  InputBase,
  useMediaQuery,
  Alert,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Collapse
} from "@mui/material";
import { Link } from "react-router-dom";
import { ButtonContained } from "../SigningPages/styles";
import React, { useState } from "react";
import "./styles.css";
import { addNewSubscriber } from "../../utils/firebase/firebase.utils";
import { ListItemButtonStyled } from "./styles";
import { ErrorOutline } from "@mui/icons-material";
const Footer = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMouseOver = () => {
    setOpen(!open);
  };

  const handleMobileClick = (open) => {
    setOpenMobile(openMobile === open ? false : open);
  };
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addNewSubscriber(input);
    } catch (error) {
      console.log(error);
    }

    setInput("");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  return (
    <>
      <Box
        className="Box-footer"
        sx={{
          display: "flex",
          justifyContent: !isMobile && "space-around",
          flexDirection: isMobile && "column",
          alignItems: "center"
        }}
      >
        <p className="news-text">SIGN UP FOR OUR NEWSLETTER!</p>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              justifyContent: "space-around",
              display: "flex",
              alignItems: "center",
              mb: isMobile && 5
            }}
          >
            {alert ? (
              <Alert
                severity="success"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: isMobile ? 200 : 300,
                  mr: 2,
                  height: "40px",
                  letterSpacing: 2
                }}
              >
                Thank you for subscribing!
              </Alert>
            ) : (
              <Paper
                elevation={2}
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: isMobile ? 200 : 300,
                  mr: 2,
                  height: "40px"
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your email address"
                  type="email"
                  required
                  onChange={handleInput}
                  value={input}
                />
              </Paper>
            )}
            <ButtonContained
              type="submit"
              variant="outlined"
              sx={{ width: isMobile ? "100px" : "200px" }}
            >
              Subscribe
            </ButtonContained>
          </Box>
        </form>
      </Box>
      <Box
        className="Box-footer2"
        onMouseEnter={() => {
          !isMobile && handleMouseOver();
        }}
        onMouseLeave={() => {
          !isMobile && handleMouseOver();
        }}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-around"
        }}
      >
        <Box
          sx={{ pl: isMobile ? 5 : "7%" }}
          value={"one"}
          onClick={() => {
            isMobile && handleMobileClick("one");
          }}
        >
          <p className="list-title">POPULAR CATEGORIES</p>
          <List component="nav" disablePadding>
            <Collapse
              in={isMobile ? openMobile === "one" : open}
              timeout="auto"
            >
              <List
                sx={{
                  py: 0
                }}
              >
                <Link to="/shop/hats" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Hats" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="/shop/t-shirts" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="T-shirts" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="/shop/sneakers" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Sneakers" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="/shop/women" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Women" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="/shop/men" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Men" />
                  </ListItemButtonStyled>
                </Link>
              </List>
            </Collapse>
          </List>
        </Box>

        <Divider
          orientation={isMobile ? "horizontal" : "vertical"}
          variant="middle"
          flexItem
        />
        <Box
          onClick={() => {
            isMobile && handleMobileClick("two");
          }}
          sx={{ pl: isMobile && 5 }}
        >
          <p className="list-title">ORDER PROCESSING</p>
          <List
            component="nav"
            sx={{
              py: 0
            }}
          >
            <Collapse
              in={isMobile ? openMobile === "two" : open}
              timeout="auto"
            >
              <List component="div" disablePadding>
                <Link to="delivery" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Delivery" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="payment-methods" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Payment methods" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="returns" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Returns" />
                  </ListItemButtonStyled>{" "}
                </Link>
                <Link to="complaints" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Complaints" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="how-to-place-an-order" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="How to place an order ?" />
                  </ListItemButtonStyled>{" "}
                </Link>
                <Link to="faq" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="FAQ" />
                  </ListItemButtonStyled>{" "}
                </Link>
              </List>
            </Collapse>
          </List>
        </Box>
        <Divider
          orientation={isMobile ? "horizontal" : "vertical"}
          variant="middle"
          flexItem
        />
        <Box
          onClick={() => {
            isMobile && handleMobileClick("three");
          }}
          sx={{ pl: isMobile && 5 }}
        >
          <p className="list-title">GOOD TO KNOW</p>
          <List
            component="nav"
            sx={{
              py: 0
            }}
          >
            <Collapse
              in={isMobile ? openMobile === "three" : open}
              timeout="auto"
            >
              <List component="div" disablePadding>
                {" "}
                <Link to="terms-and-conditions" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Terms and conditions" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="registration-benefits" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Registration benefits" />
                  </ListItemButtonStyled>{" "}
                </Link>
                <Link to="cookie-policy" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Cookie policy" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="promotion-regulations" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Promotion regulations" />
                  </ListItemButtonStyled>{" "}
                </Link>
              </List>
            </Collapse>
          </List>
        </Box>

        <Divider
          orientation={isMobile ? "horizontal" : "vertical"}
          variant="middle"
          flexItem
        />
        <Box
          onClick={() => {
            isMobile && handleMobileClick("four");
          }}
          sx={{ pl: isMobile && 5 }}
        >
          <p className="list-title">ABOUT US</p>
          <List
            component="nav"
            sx={{
              py: 0
            }}
          >
            <Collapse
              in={isMobile ? openMobile === "four" : open}
              timeout="auto"
            >
              <List component="div" disablePadding>
                <Link to="about-us" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="About us" />
                  </ListItemButtonStyled>{" "}
                </Link>
                <Link to="for-business" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="For business" />
                  </ListItemButtonStyled>
                </Link>
                <Link to="ambassadors" className="link2">
                  <ListItemButtonStyled>
                    <ListItemText primary="Ambassadors" />
                  </ListItemButtonStyled>
                </Link>
                <ListItem sx={{ pt: 3, pl: 0 }}>
                  <ListItemText primary="CONTACT" />
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemText secondary="Contact us" />
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemText secondary="+48 00 000 00 00 (8:00am - 8:00pm GTM+1)" />
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemText secondary="support@premiumclothing.com" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
      </Box>

      <div className="footer-links" style={{ paddingBottom: "3%" }}>
        <Typography
          variant="body2"
          style={{ color: "black", textAlign: "center" }}
        >
          Copyright © 2022&nbsp;
          <Link to="/" style={{ color: "black", fontWeight: "bold" }}>
            PremiumClothing Inc.
          </Link>
          <br />
          All Rights Reserved.
        </Typography>
        <Typography variant="body2">
          <a
            className="execution"
            href="https://www.jakubsokolowski.me/"
            target="blank"
          >
            Execution - <span>jakubsokolowski.me</span>
          </a>
        </Typography>
      </div>
    </>
  );
};

export default Footer;
