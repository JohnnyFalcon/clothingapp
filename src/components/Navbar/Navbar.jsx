import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Toolbar, Box, Chip } from "@mui/material";
import logo from "../../images/premium_clothing_logo.png";
import "./styles.css";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Basket } from "./Basket";
function Navbar() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <Toolbar
        sx={{
          mt: 3,
          mb: 5,
          ml: "6%",
          mr: "6%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Box display="flex">
          <Link to="/" className="link-logo">
            <img
              src={logo}
              alt="logo"
              style={{ height: "80px" }}
              className="logo"
            />
          </Link>
        </Box>
        <Box display="flex">
          <Link className="link" to="/shop">
            Shop
          </Link>
          <Link className="link" to="/contact">
            Contact
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
        </Box>
      </Toolbar>
      <hr className="hrLine" />
      <Outlet />
    </>
  );
}

export default Navbar;
