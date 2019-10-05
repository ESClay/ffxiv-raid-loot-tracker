
import * as React from "react";
import { Landing } from "./pages/Landing";
import {BrowserRouter as Router} from "react-router-dom";

const AppImpl = () => (
//Check stored cookie here, and pass into Landing

	<Router>
		<Landing/>
	</Router>
);

export const App = AppImpl;