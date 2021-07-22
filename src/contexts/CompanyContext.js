import React, { useReducer } from "react";

export const CompanyContext = React.createContext();

const initialState = { companies: {} };
const actions = {
  ADD_COMPANY: "ADD_COMPANY",
  GET_COMPANY: "GET_COMPANY",
  REMOVE_COMPANY: "REMOVE_COMPANY",
  LIKE_COMPANY: "LIKE_COMPANY",
  DISLIKE_COMPANY: "DISLIKE_COMPANY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_COMPANY:
      state[action.value.name] = { ...action.value, like: false };
      return { ...state };
    case actions.LIKE_COMPANY:
      state[action.value.name].like = true;
      return { ...state };
    case actions.DISLIKE_COMPANY:
      state[action.value.name].like = false;
      return { ...state };
  }
};
export const CompanyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    companies: state.companies,
    addCompany: (company) =>
      dispatch({ type: actions.ADD_COMPANY, value: company }),
    likeCompany: (company) =>
      dispatch({ type: actions.LIKE_COMPANY, value: company }),
  };
  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};
