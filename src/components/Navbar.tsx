import React from "react"

import { AppBar, Toolbar, IconButton, Button, makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import {Menu}from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const Navbar : React.FC = () => {
	const classes = useStyles();
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<Menu />
					</IconButton>
					<Typography variant="h6" className={classes.title}>Static Name Here</Typography>
					<Button color="inherit">Logout</Button>
					</Toolbar>
			</AppBar>
		</div>
	)
}