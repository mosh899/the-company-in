import React from "react";
import { CompanyContext } from "../../contexts";
import { CompanyDetailsCard } from "../companyDetails";

export const CompaniesList = () => {
  const companyContext = useContext(CompanyContext);
  const companies = Object.keys(companyContext.companies);
  return (
    <Grid>
      {companies.map((c) => (
        <CompanyDetailsCard
          companyName={c.name}
          logo={c.logo}
          companyType={c.type}
        />
      ))}
    </Grid>
  );
};
