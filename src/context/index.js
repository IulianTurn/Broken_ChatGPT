import React, { createContext, useState } from "react";

const list = [
	"I am very tiread now, i didn't sleep enough.",
	"I don't remember, sorry.",
	"Can you wait a little, i have to go to the toilet!",
	"Not sure, dificult question!",
	"Nobody knowsss!!!",
	"You know the answer just think about!",
];

const MyContext = createContext();

const MyProvider = ({ children }) => {
	const [state, setState] = useState({
		screen: 0,
		question: "",
		result: "Who knows this?",
	});

	const handleGoTo = (value) => {
		setState((prevState) => ({
			...prevState,
			screen: value,
		}));
	};

	const handleQuestion = (value) => {
		setState((prevState) => ({
			...prevState,
			question: value,
		}));
	};
	console.log(state);

	const getRandomValue = () => {
		return list[Math.floor(Math.random() * list.length)];
	};

	const handleResult = () => {
		let rand = getRandomValue();

		if (state.result !== "") {
			while (rand === state.result) {
				rand = getRandomValue();
			}
		}
			setState((prevState) => ({
				...prevState,
				result: rand,
			}));
			
	};

	const handleReset = () => {
		setState({
			screen: 0,
			question: "",
			result: "Can not answer right now.",
		});
	};

	return (
		<MyContext.Provider
			value={{
				state,
				handleGoTo,
				handleQuestion,
				handleResult,
				handleReset,
			}}>
			{children}
		</MyContext.Provider>
	);
};

export { MyProvider, MyContext };
