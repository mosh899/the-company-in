import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HOME_PAGE,
  COMPANY_DETAILS_PAGE,
  getPathName,
  COMPANY_NAME_PARAM,
} from "../utils/Consts";
import { CompanyDetailsPage } from "./companyDetails";
import { HomePage } from "./home";
import { CompanyProvider } from "../contexts/CompanyContext";

export const TheCompanyIn = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={getPathName(COMPANY_DETAILS_PAGE) + "/:" + COMPANY_NAME_PARAM}
        >
          <CompanyDetailsPage />
        </Route>
        <Route path={getPathName(HOME_PAGE)}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};
