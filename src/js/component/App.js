import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { CardsHolder } from "./CardsHolder";
import { Footer } from "./Footer";

export const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<CardsHolder />
			<Footer />
		</React.Fragment>
	);
};
