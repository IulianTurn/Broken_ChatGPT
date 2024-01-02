import { useContext, useState, useEffect } from "react";
import { MyContext } from "../context";

export default function Result() {
	const context = useContext(MyContext);
	const [answer, setAnswer] = useState("");

	let i = 0;
	let txt = context.state.result;
	let speed = 100;
	let typed_message = "";
	console.log(context.state.result);
	function typeWriter() {
		if (i < txt.length) {
			setAnswer((typed_message += txt.charAt(i)));
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	useEffect(() => typeWriter, [context.handleResult]);

	return (
		<div>
			<h3>Your answer is:</h3>
			<div className='viewer'>{answer}</div>

			<div className='animate__animated animate__bounceIn animate__delay-1s'>
				<hr />
				<button className='btn' onClick={context.handleReset}>
					Ask a new question
				</button>
				<button className='btn' onClick={context.handleResult}>
					Get another answer!
				</button>
			</div>
		</div>
	);
}
