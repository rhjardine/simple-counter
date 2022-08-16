import React from "react";
import PropTypes from "prop-types";

export function Newcounter(props) {
	return (
		<div className="Container d-flex bg-danger">
			<div className="align-content-center col-3 fs-1" id="Clock">
				<p className="text-light text-center">
					<i className="fas fa-clock"></i>
				</p>
			</div>
			<div className="text-light justify-content-center col-2 fs-1">
				{Math.floor(props.seconds / 100000) % 1000000}
			</div>
			<div className="text-light justify-content-center col-2 fs-1">
				{Math.floor(props.seconds / 1000) % 10000}
			</div>
			<div className="text-light justify-content-center col-2 fs-1">
				{Math.floor(props.seconds / 100) % 1000}
			</div>
			<div className="text-light justify-content-center col-2 fs-1">
				{Math.floor(props.seconds / 10) % 10}
			</div>
			<div className="text-light justify-content-center col-2 fs-1">
				{props.seconds % 10}
			</div>
		</div>
	);
}