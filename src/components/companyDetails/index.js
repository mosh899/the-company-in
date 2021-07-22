import React from "react";
import { useParams } from "react-router-dom";
import { COMPANY_NAME_PARAM } from "../../utils/Consts";

export const CompanyDetailsPage = () => {
  let params = useParams();
  const companyName = params[COMPANY_NAME_PARAM];
  return <div>company: {companyName}</div>;
};
