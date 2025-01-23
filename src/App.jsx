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

// import { useEffect, useState } from "react";
// import "./App.css";
// import { useFetch, usePostTitle } from "./useFetch";

// function App() {
// 	const { finalData } = useFetch(
// 		"https://jsonplaceholder.typicode.com/posts/1"
// 	);
// 	return <div>{JSON.stringify(finalData)}</div>;
// }
// export default App;

// import { useEffect, useState } from "react";
// import "./App.css";
// import { useFetch } from "./useFetch";

// function App() {
// 	const [currentPost, setCurrentPost] = useState(1);

// 	const { finalData, loading } = useFetch(
// 		"https://jsonplaceholder.typicode.com/posts/" + currentPost
// 	);
// 	if (loading) {
// 		return <div>Loading...</div>;
// 	}
// 	return (
// // 		<div>
// 			<button onClick={() => setCurrentPost(1)}>1</button>
// 			<button onClick={() => setCurrentPost(2)}>2</button>
// 			<button onClick={() => setCurrentPost(3)}>3</button>
// 			{JSON.stringify(finalData)}
// 		</div>
// );
// }
// // export default App;
// import { useEffect, useState } from "react";
// import { usePrev } from "./user-prev";
// function App() {
// 	const [state, setState] = useState(0);
// 	const prev = usePrev(state);
// 	return (
// 		<>
// 			<p>{state}</p>
// 			<button
// 				onClick={() => {
// 					setState((curr) => curr + 1);
// 				}}
// 			>
// 				click
// 			</button>
// 			<p>the prev value was {prev}</p>
// 		</>
// 	);
// }
// export default App;
// // export default App;
// import { useEffect, useState } from "react";
// import { usePrev } from "./user-prev";
// function useCounter() {
// 	const [count, setCount] = useState(0);
// 	function increaseCount() {
// 		setCount((c) => c + 1);
// 	}
// 	function decreaseCount() {
// 		setCount((c) => c - 1);
// 	}
// 	return {
// 		count,
// 		increaseCount,
// 		decreaseCount,
// 	};
// }
// function App() {
// 	const { count, increaseCount, decreaseCount } = useCounter();
// 	return (
// 		<>
// 			<button onClick={increaseCount}>Increase</button>
// 			<button onClick={decreaseCount}>decrease</button>
// 			<p>{count}</p>
// 		</>
// 	);
// }
// // export default App;
// import React, { useState, useEffect, createContext, useContext } from "react";

// const CountContext = createContext();

// function CountContextProvider({ children }) {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<CountContext.Provider value={{ count, setCount }}>
// 			{" "}
// 			{children}
// 		</CountContext.Provider>
// 	);
// }
// function Parent() {
// 	return (
// 		<CountContextProvider>
// 			<Increase />
// 			<Decrease />
// 			<Value />
// 		</CountContextProvider>
// 	);
// }
// function Decrease() {
// 	const { count, setCount } = useContext(CountContext);

// 	return (
// 		<div>
// 			<button onClick={() => setCount(count - 1)}>Decrease</button>
// 		</div>
// 	);
// }
// function Increase() {
// 	const { count, setCount } = useContext(CountContext);

// 	return (
// 		<div>
// 			<button onClick={() => setCount(count + 1)}>Increase</button>
// 		</div>
// 	);
// }
// function Value() {
// 	const { count } = useContext(CountContext);
// 	return <p>{count}</p>;
// }
// const App = () => {
// 	return (
// 		<div>
// 			<Parent />
// 		</div>
// 	);
// };
// export default App;

// import { useState, useEffect, createContext } from "react";
// import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from "recoil";

// const count = atom({
// 	key: "countstate",
// 	default: 0,
// });
// function Parent() {
// 	return (
// 		<RecoilRoot>
// 			<Increase />
// 			<Decrease />
// 			<Value />
// 		</RecoilRoot>
// 	);
// }
// function Decrease() {
// 	const setCount = useSetRecoilState(count);
// 	return (
// 		<button onClick={() => setCount((count) => count - 1)}>Decrease</button>
// 	);
// }
// function Increase() {
// 	const setCount = useSetRecoilState(count);
// 	return (
// 		<button onClick={() => setCount((count) => count + 1)}>Increase</button>
// 	);
// }
// function Value() {
// 	const countValue = useRecoilValue(count);
// 	return <p>Count :{countValue}</p>;
// }
// const App = () => {
// 	return (
// 		<div>
// 			<Parent />
// 		</div>
// 	);
// };
// export default App;

// import { useState, memo } from "react";
// import {
// 	RecoilRoot,
// 	atom,
// 	selector,
// 	useRecoilValue,
// 	useSetRecoilState,
// } from "recoil";
// import { counterAtom } from "./counter";
// function App() {
// 	return (
// 		<RecoilRoot>
// 			<Counter />
// 		</RecoilRoot>
// 	);
// }
// function Counter() {
// 	return (
// 		<div>
// 			<CurrentCount />
// 			<Buttons />
// 		</div>
// 	);
// }

// function CurrentCount() {
// 	const count = useRecoilValue(counterAtom);
// 	return <div>{count}</div>;
// }
// const Buttons = memo(function () {
// 	const setCount = useSetRecoilState(counterAtom);

// 	function increase() {
// 		setCount((c) => c + 1);
// 	}
// 	function decrease() {
// 		setCount((c) => c - 1);
// 	}
// 	return (
// 		<div>
// 			<button onClick={increase}>increase</button>
// 			<button onClick={decrease}>decrease</button>
// 		</div>
// 	);
// });
// export default App;

// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import { networkAtom } from "./atoms";
// import { jobsAtom } from "./atoms";
// import { notificationsAtom } from "./atoms";
// import { messageAtom } from "./atoms";
// import { totalNotificationSelector } from "./atoms";
// function App() {
// 	return (
// 		<RecoilRoot>
// 			<MainApp />
// 		</RecoilRoot>
// 	);
// }
// function MainApp() {
// 	const networkNotificationCount = useRecoilValue(networkAtom);
// 	const jobsNotificationCount = useRecoilValue(jobsAtom);
// 	const notificationCount = useRecoilValue(notificationsAtom);
// 	const messageNotificationCount = useRecoilValue(messageAtom);

// 	const totalNotificationCount = useRecoilValue(totalNotificationSelector);

// 	return (
// 		<div>
// 			<button>Home</button>
// 			<button>
// 				My Network (
// 				{networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
// 			</button>
// 			<button>
// 				Jobs ({jobsNotificationCount >= 100 ? "99+" : jobsNotificationCount})
// 			</button>
// 			<button>
// 				Notifications ({notificationCount >= 100 ? "99+" : notificationCount})
// 			</button>
// 			<button>
// 				notifcat (
// 				{messageNotificationCount >= 100 ? "99+" : messageNotificationCount})
// 			</button>

// 			<button>({totalNotificationCount}) hi</button>
// 		</div>
// 	);
// }
// export default App;

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./atoms";

function App() {
	return (
		<RecoilRoot>
			<MainApp />
		</RecoilRoot>
	);
}
function MainApp() {
	const [networkCount, setNetworkCount] = useRecoilState(notifications);
	const totalNotificationCount = useRecoilValue(totalNotificationSelector);
	return (
		<>
			<button>Home</button>
			<button>
				My Network (
				{networkCount.networks >= 100 ? "99+" : networkCount.network})
			</button>
			<button>Jobs {networkCount.jobs}</button>
			<button>messagings ({networkCount.messaging})</button>
			<button>notifications ({networkCount.notifications})</button>
			<button>me ({totalNotificationCount})</button>
		</>
	);
}
export default App;
