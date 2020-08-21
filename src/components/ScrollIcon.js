import React from 'react'
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

const ScrollIcon = () => {
	let scrollToAbout = () => {
		let about = document.getElementById("about")
		about.scrollIntoView()
	}

	return (
		<div className="scroll-icon">
			<ArrowDropDownCircleOutlinedIcon fontSize="large" style={{ color: 'white' }} id="scroll-arrow" onClick={scrollToAbout} />
		</div>
	)
}

export default ScrollIcon;
