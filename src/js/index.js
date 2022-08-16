//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle

import { App } from "./component/App";

//  let seconds = 0;
//  setInterval(() => {
// 	let segFive = Math.floor(seconds / 10000);
// 	let segFour = Math.floor(seconds / 1000);
// let segThree = Math.floor(seconds / 100);
// 	let segTwo = Math.floor(seconds / 10);
//  	let segOne = Math.floor(seconds / 1);
// 	seconds++;
//  	console.log(segFive, segFour, segThree, segTwo, segOne);
ReactDOM.render(<App />, document.querySelector("#app"));

//render your react application