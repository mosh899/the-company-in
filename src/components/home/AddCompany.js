import React, { useState, useContext } from "react";
import { TextField, Grid, Button, Typography } from "@material-ui/core";
import { getCompany } from "../../api/Company";
import { CompanyContext } from "../../contexts/CompanyContext";

export const AddCompany = () => {
  const [companyName, setCompanyName] = useState();
  const [error, setError] = useState("");
  const companyContext = useContext(CompanyContext);

  const handleCompanyNameChange = (event) => setCompanyName(event.target.value);
  const handleAddCompanyClick = (event) => {
    setError("");
    if (!companyName) {
      setError("Empty field");
      return;
    }
    getCompany(companyName)
      .then((comp) => companyContext.value.addCompany(comp))
      .catch((err) => setError("Failed to find company"));
  };
  return (
    <Grid>
      <Grid>
        <TextField
          required
          label="Company Domain"
          onChange={handleCompanyNameChange}
          error={error}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddCompanyClick}
        >
          Add Company
        </Button>
      </Grid>
      <Typography>{error}</Typography>
    </Grid>
  );
};
