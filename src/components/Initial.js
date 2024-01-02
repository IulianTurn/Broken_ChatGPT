import { useRef, useState, useContext } from "react";
import { MyContext } from "../context";
import { toast } from "react-toastify";

export default function Initial() {

	const context = useContext(MyContext);
	const textInput = useRef();
	const [showNext, setShowNext] = useState(false);
	const [showError, setShowError] = useState(false);

    const handleChange = ()=> {
        if(textInput.current.value.length>=5)setShowNext(true);
        else setShowNext(false);
    };

	const handleSubmit = ()=> {
		const value = textInput.current.value;
		if(value.length>=30){
			//setShowError(true);
			toast.error("Too long bro!!", {
				position: toast.POSITION.TOP_LEFT,
			});
			return false;
		}
		setShowError(false);
		context.handleGoTo(context.state.screen+1);
		context.handleQuestion(value);

	};

	return (
		<>
			<div>
				<h3>Ask a question</h3>
				<input
					type='text'
					ref={textInput}
					onChange={handleChange}
					name='question'
					className='form-control'
				/>
			</div>
			{showNext && (
				<button
					className='btn animate__animated animate__bounceIn'
					onClick={handleSubmit}>
					Next
				</button>
			)}
			{/*showError && <div className='error'>The question is to long</div>*/}
			{showError && console.log(showError)}
		</>
	);
}
