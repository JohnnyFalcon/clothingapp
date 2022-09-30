import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Toolbar,
  Box,
  Chip,
  useMediaQuery,
  IconButton,
  Stack,
  SwipeableDrawer,
  Divider
} from "@mui/material";
import logo from "../../images/premium_clothing_logo.png";
import "./styles.css";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Basket } from "./Basket";
import { CategoriesContext } from "../../contexts/categories.context";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  const { currentUser, userName } = useContext(UserContext);
  // Creatning user nickname to display on the page
  const userName1 = userName?.split(".")[0].split("@")[0];
  const userName2 = userName1?.charAt(0).toUpperCase() + userName1?.slice(1);

  const isMobile = useMediaQuery("(max-width:900px)");
  const { setBasketOpen } = useContext(CategoriesContext);

  const [state, setState] = useState(false);
  const toggleDrawer = (open) => {
    setState(open);
    setBasketOpen(open);
  };

  return (
    <>
      <Toolbar
        sx={{
          mt: 2,
          mb: isMobile ? 1 : 5,
          ml: isMobile ? "-10px" : "6%",
          mr: isMobile ? "-10px" : "6%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Box display="flex">
          <Link to="/" className="link-logo">
            <img src={logo} alt="logo" style={{ height: "80px" }} />
          </Link>
        </Box>
        <Box display={{ xs: "none", sm: "flex" }}>
          <Link className="link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span
              className="link"
              style={{ cursor: "pointer" }}
              onClick={signOutUser}
            >
              SIGN OUT
            </span>
          ) : (
            <Link className="link" to="/sign-in">
              SIGN IN
            </Link>
          )}

          <Link
            style={{
              textDecoration: "none",
              marginLeft: "40px",
              letterSpacing: "2px "
            }}
            to="/sign-up"
          >
            <Chip
              label="SIGN UP NOW"
              clickable
              sx={{
                backgroundColor: "darkcyan",
                fontSize: "1rem",
                "&:active": {
                  transform: "translateY(-1px)"
                }
              }}
            />
          </Link>
          <Basket />
          {currentUser && (
            <>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ ml: 2, backgroundColor: "darkcyan" }}
              />
              <Box sx={{ ml: 2 }}>
                <span>
                  Hello,
                  <br /> {userName2}
                </span>
              </Box>
            </>
          )}
        </Box>
        {/* -- Mobile verison --  */}
        <Box display={{ xs: "flex", sm: "none" }}>
          <Basket />
          <IconButton onClick={() => toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: "2rem", ml: 2 }} />
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            open={state}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
            sx={{ ".MuiDrawer-paper": { pl: "5%", pr: "5%" } }}
          >
            <Stack spacing={2} justifyContent="space-evenly" sx={{ pt: 2 }}>
              {currentUser && (
                <>
                  <Box sx={{}}>
                    <span>
                      Hello,
                      <br /> {userName2}
                    </span>
                    <Divider
                      variant="fullWidth"
                      sx={{
                        backgroundColor: "darkcyan",
                        ml: -2,
                        mr: -2,
                        mt: 1
                      }}
                    />
                  </Box>
                </>
              )}
              <Link
                className="link linkMobile"
                to="/shop"
                onClick={() => toggleDrawer(false)}
              >
                Shop
              </Link>
              <hr className="hrLineMobile" />
              {currentUser ? (
                <span
                  className="link"
                  style={{ cursor: "pointer" }}
                  onClick={signOutUser}
                >
                  SIGN OUT
                </span>
              ) : (
                <Link
                  className="link linkMobile"
                  to="/sign-in"
                  onClick={() => toggleDrawer(false)}
                >
                  SIGN IN
                </Link>
              )}
              <hr className="hrLineMobile" />
              <Link
                style={{
                  textDecoration: "none"
                }}
                to="/sign-up"
                onClick={() => toggleDrawer(false)}
              >
                <Chip
                  label="SIGN UP NOW"
                  clickable
                  sx={{
                    backgroundColor: "darkcyan",
                    fontSize: "1rem",
                    "&:active": {
                      transform: "translateY(-1px)"
                    }
                  }}
                />
              </Link>
              <hr className="hrLineMobile" />
            </Stack>
          </SwipeableDrawer>
        </Box>
        <hr className="hrLine" />
      </Toolbar>

      <Outlet />
    </>
  );
}

export default Navbar;
