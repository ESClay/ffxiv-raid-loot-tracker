import React from "react";
const AppContext = React.createContext({
	username: "",
	loggedIn: false
})

export const AppProvider = AppContext.Provider;
export default AppContext;