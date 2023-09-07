/** @format */

import React, { useState, useEffect } from 'react'
import './TypingAnimation.css' // Import your CSS file

const TypingAnimation = () => {
	const [text, setText] = useState('')
	const fullText = 'The Fastest Food Delievery in'

	useEffect(() => {
		let currentIndex = 0
		const interval = setInterval(() => {
			if (currentIndex === fullText.length) {
				clearInterval(interval)
			} else {
				setText(fullText.slice(0, currentIndex + 1))
				currentIndex++
			}
		}, 100) // Adjust the typing speed here

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='typing-animation'>
			<span className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
				{text}
			</span>
			<span className='text-orange-600 text-[3rem] lg:text-[5rem] transition-all delay-200'>
				Your City
			</span>
		</div>
	)
}

export default TypingAnimation
