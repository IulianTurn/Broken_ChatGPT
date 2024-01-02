import { useContext, useState, useEffect } from "react";
import { MyContext } from "../context";

export default function Confirm() {
	const context = useContext(MyContext);
	const [message, setMessage] = useState('');

	const goNext = () => context.handleGoTo(context.state.screen + 1);
	const goBack = () => {
		context.handleGoTo(context.state.screen - 1);
		context.state.question = "";
	};
	let i = 0;
	let txt = context.state.question;
	let speed = 100;
	let typed_message = '';

	function typeWriter() {
		if (i < txt.length) {
			setMessage((typed_message += txt.charAt(i)));
			i++;
			setTimeout(typeWriter, speed);
		} 
	}

	useEffect(typeWriter,[]);

	return (
		<div>
			<h3>Your question is:</h3>
			<div className='viewer'>{message}</div>

			<div className='animate__animated animate__bounceIn animate__delay-1s'>
				<hr />
				<button className='btn' onClick={goNext}>
					Get the answer now!
				</button>
				<button className='btn' onClick={goBack}>
					Ask a new question
				</button>
			</div>
		</div>
	);
}
