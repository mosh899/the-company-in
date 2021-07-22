import axios from "axios";

export const getCompany = (companyDomain) => {
  const url = `${process.env.REACT_APP_COMPANYIN_API}/${process.env.REACT_APP_COMPANY_API_CONTROL}`;

  const params = { companyDomain };
  return axios.get(url, { params }).then((res) => res.data);
};
