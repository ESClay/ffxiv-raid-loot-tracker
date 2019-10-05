

import React from "react"


import { Login } from "./Login"
import { Switch, Route } from "react-router-dom"
import { Home } from "./Home";
import { AppProvider } from "../components/AppContext"

export const Landing: React.FC = () => {
	//If cookie exists, get user and present regular page.  otherwhise, pass to login/sign up
	const user = {username: "Something", loggedIn: false};
	return (
		<div>
			<AppProvider value={user}>
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</AppProvider>
		</div>
	)
	// </div>return <Login />
	// return (
	// 	<div>
	// 		<Navbar />
	// 		<Container>
	// 			<Home />
	// 		</Container>
	// 	</div>
	// )
}