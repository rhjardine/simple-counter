import React, { useState } from "react";
import { Newcounter } from "./Newcounter";

export const App = () => {
	const [time, setTime] = useState(0);

	setTimeout(() => {
		setTime(time + 1);
		console.log(time);
	}, 1000);
	return <Newcounter seconds={time} />;
};