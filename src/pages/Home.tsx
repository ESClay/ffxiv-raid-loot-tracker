import * as React from "react"
import {AppBar, Toolbar, Button, Typography} from "@material-ui/core";


export const Home : React.FC = () => {
	return (
		<div>
			<Button>Sign Up</Button>
			<Typography>---or---</Typography>
			<Button>Log In with Discord</Button>
		</div>
	)
}