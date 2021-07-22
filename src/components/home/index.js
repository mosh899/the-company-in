import React, { useState } from "react";
import { TextField, Grid } from "@material-ui/core";
import { AddCompany } from "./AddCompany";

export const HomePage = () => {
  return (
    <Grid>
      <AddCompany />
    </Grid>
  );
};
