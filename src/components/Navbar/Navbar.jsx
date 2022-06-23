import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Container, Box } from "@mui/material";
import { ContainerStyled } from "./styles";
import logo from "../../images/premium_clothing_logo.png";
import "./styles.css";
function Navbar() {
  return (
    <>
      <ContainerStyled maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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
              Contanct
            </Link>
            <Link className="link" to="/sign-in">
              Sign in
            </Link>
          </Box>
        </Toolbar>
      </ContainerStyled>

      <Outlet />
    </>
  );
}

export default Navbar;
