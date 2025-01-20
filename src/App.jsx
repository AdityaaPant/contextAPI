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

// import { useDebugValue, useEffect, useState } from "react";
// import "./App.css";

// function useCounter() {
// 	const [count, setCount] = useState(0);

// 	function increaseCount() {
// 		setCount(count + 1);
// 	}
// 	function decreaseCount() {
// 		setCount(count - 1);
// 	}

// 	return {
// 		count,
// 		increaseCount,
// 		decreaseCount,
// 	};
// }
// function App() {
// 	const { count, increaseCount, decreaseCount } = useCounter();
// 	const [post, setPost] = useState({});
// 	async function getPosts() {
// 		const response = await fetch(
// 			"https://jsonplaceholder.typicode.com/posts/1"
// 		);
// 		const json = await response.json();
// 		setPost(json);
// 	}
// 	useEffect(() => {
// 		getPosts();
// 	}, []);

// 	return (
// 		<div>
// 			<button onClick={increaseCount}>Increese</button>
// 			<button onClick={decreaseCount}>decraese</button>
// 			<p>{count}</p>
// 			<div>{post.title}</div>
// 		</div>
// 	);
// }

// export default App;
