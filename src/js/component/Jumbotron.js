import React from "react";

export const Jumbotron = () => {
	return (
		<div
			className="p-5 mb-4 bg-secondary rounded-3 bg-opacity-10"
			style={{ width: 90 + "vw", margin: 20 + "px auto" }}>
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
				<p className="col-md-8 fs-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Example button
				</button>
			</div>
		</div>
	);
};
