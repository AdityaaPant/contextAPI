// import { createContext, useContext, useState } from "react";
// import "./App.css";
// const BulbContext = createContext();
// function App() {
// 	const [bulbOn, setBulbOn] = useState(true);
// 	return (
// 		<div>
// 			<BulbContext.Provider
// 				value={{
// 					bulbOn: bulbOn,
// 					setBulbOn: setBulbOn,
// 				}}
// 			>
// 				<Light />
// 			</BulbContext.Provider>
// 		</div>
// 	);
// }
// function Light() {
// 	return (
// 		<div>
// 			<LightBulb />
// 			<LightSwitch />
// 		</div>
// 	);
// }
// function LightBulb() {
// 	const { bulbOn } = useContext(BulbContext);
// 	return <div>{bulbOn ? "bulb On" : "bulb off"}</div>;
// }
// function LightSwitch() {
// 	const { bulbOn, setBulbOn } = useContext(BulbContext);
// 	function toggle() {
// 		setBulbOn(!bulbOn);
// 	}
// 	return (
// 		<div>
// 			<button onClick={toggle}>Toggle the bulb</button>
// 		</div>
// 	);
// }
// export default App;

import { useState } from "react";
import "./App.css";
function App() {
	const [count, setCount] = useState(0);
	function increaseCount() {
		setCount(count + 1);
	}
	function decreaseCount() {
		setCount(count - 1);
	}
	return (
		<div>
			<button onClick={increaseCount}>Increse</button>
			<button onClick={decreaseCount}>decrease</button>
			<p>{count}</p>
		</div>
	);
}
export default App;
