import React from "react";
import { Card } from "./Card";

export const CardsHolder = () => {
	return (
		<div className="container-fluid d-flex flex-column align-items-center flex-md-row justify-content-md-center my-3">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};
