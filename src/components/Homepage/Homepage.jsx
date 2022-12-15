import React, { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Box, Paper, useMediaQuery, Switch } from "@mui/material";
import "./styles.css";
import xmasMain from "../../images/main-page-photo-xmas.png";
import xmasMainMb from "../../images/main-page-photo-xmas-mobile.png";
import { Link } from "react-router-dom";

import { alpha, styled } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { CartContext } from "../../contexts/CartContext";
function Homepage({ categories }) {
  const { setCategory } = useContext(CategoriesContext);
  const isMobile = useMediaQuery("(max-width:900px)");
  const { handleToggle, snowToggle } = useContext(CartContext);
  const SnowSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: cyan[700],
      "&:hover": {
        backgroundColor: alpha(cyan[700], theme.palette.action.hoverOpacity)
      }
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: cyan[700]
    }
  }));

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <div className="main-photo">
        <img
          className="xmas-img"
          src={isMobile ? xmasMainMb : xmasMain}
          alt="Christmas scenery with discount of 30%"
        />
        <Link className="link-shop-now" to="/shop">
          <button className="animated-button">Shop now</button>
        </Link>
        {!isMobile && (
          <div className="switch">
            <div className="snowflake">
              {" "}
              <AcUnitIcon style={{ color: !snowToggle && "darkcyan" }} />
            </div>

            <SnowSwitch
              {...label}
              onClick={handleToggle}
              checked={snowToggle}
            />

            <span
              className="switch-label"
              style={{ color: !snowToggle && "black" }}
            >
              {snowToggle ? "Hide" : "Show"} Snowfall
            </span>
            <div className="snowflake">
              {" "}
              <AcUnitIcon style={{ color: !snowToggle && "darkcyan" }} />
            </div>
          </div>
        )}
      </div>

      {isMobile && (
        <div className="switch">
          <div className="snowflake">
            {" "}
            <AcUnitIcon style={{ color: !snowToggle && "darkcyan" }} />
          </div>

          <SnowSwitch {...label} onClick={handleToggle} checked={snowToggle} />

          <span
            className="switch-label"
            style={{ color: !snowToggle && "black" }}
          >
            {snowToggle ? "Hide" : "Show"} Snowfall
          </span>
          <div className="snowflake">
            {" "}
            <AcUnitIcon style={{ color: !snowToggle && "darkcyan" }} />
          </div>
        </div>
      )}

      <div className="buttons-box">
        {categories.map(
          (category) =>
            !category.xmas && (
              <Link
                className="link-buttons"
                to={`shop/${category.title.toLowerCase()}`}
                onClick={() => setCategory(category.title.toLowerCase())}
              >
                <button className="category-button">
                  <p>{category.title}</p>
                </button>
              </Link>
            )
        )}
      </div>

      <div
        className="category-box"
        style={{ flexDirection: isMobile && "column" }}
      >
        {categories.map(
          (category) =>
            category.xmas && (
              <Link
                className="link-category"
                to={`shop/${category.title.toLowerCase()}`}
                onClick={() => setCategory(category.title.toLowerCase())}
              >
                <Paper elevation={6} className="category-item">
                  <Box
                    className="img-box"
                    sx={{
                      backgroundImage: `url(${category.image})`
                    }}
                  />
                  <Paper
                    elevation={3}
                    className="category-name"
                    sx={{ background: "rgba(255, 255, 255, 0.7) " }}
                  >
                    <h2>{category.title}</h2>
                    <p>Shop Now</p>
                  </Paper>
                </Paper>
              </Link>
            )
        )}
      </div>

      {
        // ----- Version before christmas update ------
        /* <Grid container spacing={isMobile ? 2 : 5}>
        {categories.map((category) => (
          <Grid
            item
            lg={category.id > 3 ? 6 : 4}
            md={category.id > 3 ? 6 : 4}
            xs={category.id > 4 ? 12 : 6}
            sm={category.id > 4 ? 12 : 6}
            key={category.id}
          >
            
              <Link
                className="link"
                to={`shop/${category.title.toLowerCase()}`}
                onClick={() => setCategory(category.title.toLowerCase())}
              >
                <Paper elevation={6} className="category-item">
                  <Box
                    className="img-box"
                    sx={{
                      backgroundImage: `url(${category.image})`
                    }}
                  />
                  <Paper
                    elevation={3}
                    className="category-name"
                    sx={{ background: "rgba(255, 255, 255, 0.7) " }}
                  >
                    <h2>{category.title}</h2>
                    <p>Shop Now</p>
                  </Paper>
                </Paper>
              </Link>
          </Grid>
        ))}
      </Grid> */
      }
    </>
  );
}

export default Homepage;
