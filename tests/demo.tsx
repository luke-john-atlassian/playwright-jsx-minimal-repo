import * as React from "react";

const ExampleContext = React.createContext({});
const ThisBreaks = () => {
  return <ExampleContext.Provider value={{}}></ExampleContext.Provider>;
};

export const unrelatedString = "";
