import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Grid } from "@mui/material";
function Homepage({ categories }) {
  return (
    <Grid container sx={{ pl: 6, pr: 6 }} spacing={5}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Grid>
  );
}

export default Homepage;
