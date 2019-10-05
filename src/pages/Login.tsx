import React, { useContext } from "react"

import { Button, Typography, makeStyles, Theme, createStyles, Paper, Container, Divider, ButtonGroup } from "@material-ui/core"
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from "react-router-dom"
import { Home } from "./Home";
import {EnhancedLink} from "../components/EnhancedLink";
import AppContext from "../components/AppContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
	 top: "35%",
	 bottom: "35%",
	 left: "35%",
	 right:"35%",
	 position: "absolute",
	 textAlign: "center",
	 textAnchor:"middle",
	 flexGrow:1,
	 
    },
	children: {
		paddingTop: "15%",
	}
  }),
);

export const Login : React.FC = () => {
	const classes = useStyles();
	let history = useHistory();
	const context = useContext(AppContext);
	
	function discordLogin() {
		console.log("Trying to push to home...");
		
		context.loggedIn = true;
		
		history.push("/home");
	}
	function googleLogin() {
		context.loggedIn = true;
		history.push("/home");
	}
	return (
		<Container>
			<Paper className={classes.root}>
				<div className={classes.children}>
				<Button variant="contained" href="/signup" fullWidth={true}>Sign Up</Button>
				<Divider/>
				<Typography variant="h5">OR</Typography>
				<Divider/>
				<ButtonGroup>
					<Button variant="contained" fullWidth={true} onClick={discordLogin}>Log In with Discord</Button>
					<Button variant="contained" fullWidth={true} onClick={googleLogin}>Log In with Google</Button>
				</ButtonGroup>
				</div>
			</Paper>
		</Container>
	)
}