import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export const CompanyDetailsCard = ({ companyName, logo, companyType }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <img src={logo} alt="Logo" />
      </Grid>
      <Grid item xs={3}>
        {companyName}
      </Grid>
      <Grid item xs={3}>
        {type}
      </Grid>
    </Grid>
  );
};

CompanyDetailsCard.prototype = {
    companyName = PropTypes.string,
    logo = PropTypes.string,
    companyType = PropTypes.string
}
