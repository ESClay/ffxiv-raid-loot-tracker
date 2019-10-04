import React from "react"

import { Button, Typography, makeStyles, Theme, createStyles, Paper, Container, Divider, ButtonGroup } from "@material-ui/core"
import {BrowserRouter as Router, Switch, Route, Link as RouterLink, LinkProps as RouterLinkProps} from "react-router-dom"
import { Home } from "./Home";
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
const EnhancedLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
	<RouterLink innerRef={ref} {...props} />
  ));
export const Login : React.FC = () => {
	const classes = useStyles();
	return (

		<Container>
			<Router>
				<Paper className={classes.root}>
					<div className={classes.children}>
					<Button variant="contained" href="/signup" fullWidth={true}>Sign Up</Button>
					<Divider/>
					<Typography variant="h5">OR</Typography>
					<Divider/>
					<ButtonGroup>
						<Button variant="contained" fullWidth={true} component={EnhancedLink} to="/login-discord">Log In with Discord</Button>
						<Button variant="contained">Log In with Google</Button>
					</ButtonGroup>
					</div>
				</Paper>
				<Switch>
					<Route path="/signup">
					</Route>
					<Route path="/login-discord">
						<Home />
					</Route>
				</Switch>
			</Router>
		</Container>
	)
}