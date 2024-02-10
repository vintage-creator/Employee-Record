import React, { useState } from "react";
const myGlobalContext = React.createContext();

const Provider = ({ children }) => {
 
const [showPopUp, setShowPopUp] =useState(false)
const [showPopUp2, setShowPopUp2] =useState(false)

  const store = {
    showPopUp, setShowPopUp,
    showPopUp2, setShowPopUp2
  };

  return (
    <myGlobalContext.Provider value={store}>
      {children}
    </myGlobalContext.Provider>
  );
};
export { Provider };
export default myGlobalContext;