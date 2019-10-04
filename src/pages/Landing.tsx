import { Navbar } from "../components/Navbar"

import React from "react"

import { Container } from "@material-ui/core"

import { Home } from "./Home"
import { Login } from "./Login"

export const Landing: React.FC = () => {
	//If cookie exists, get user and present regular page.  otherwhise, pass to login/sign up
return <Login />
	// return (
	// 	<div>
	// 		<Navbar />
	// 		<Container>
	// 			<Home />
	// 		</Container>
	// 	</div>
	// )
}