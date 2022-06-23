import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import "./styles.css";
function CategoryItem({ category }) {
  const { image, title } = category;
  return (
    <Grid item lg={category.id > 3 ? 6 : 4} xs={6} sm={6}>
      <Paper elevation={6} className="category-item">
        <Box
          className="img-box"
          style={{
            backgroundImage: `url(${image})`
          }}
        ></Box>
        <Paper
          elevation={3}
          className="category-name"
          sx={{ background: "rgba(255, 255, 255, 0.7) " }}
        >
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Paper>
      </Paper>
    </Grid>
  );
}

export default CategoryItem;
