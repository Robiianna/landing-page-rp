import React from "react";

export const Card = () => {
	return (
		<div className="card m-2" style={{ width: 18 + "rem" }}>
			<img
				src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
				className="card-img-top"
				alt="cat 500x325"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
