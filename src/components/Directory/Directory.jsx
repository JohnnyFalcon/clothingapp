import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Grid } from "@mui/material";
function Directory({ categories }) {
  return (
    <Grid container sx={{ p: 4 }} spacing={2}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Grid>
  );
}

export default Directory;
