import * as React from "react"
import {AppBar, Toolbar, Button, Typography, Container} from "@material-ui/core";
import { Navbar } from "../components/Navbar";
import AppContext from "../components/AppContext";
import { useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";


export const Home : React.FC = () => {
	let history = useHistory();
	const user = useContext(AppContext);
	const {username, loggedIn} = user;
	if (!loggedIn){
		console.log("User is not logged in, moving to login..");
		return <Redirect to="/login"/>
	} else {
		return (
			<div>
				<Navbar />
				<Container>
					Some thing here for the home area.
				</Container>		
			</div>
		)
	}
}