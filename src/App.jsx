/** @format */

import { useState } from 'react'
import './App.css'
import {
	Header,
	MainContainer,
	CreateContainer,
	Footer,
	About,
	Service,
} from './component'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { useEffect } from 'react'
import { getAllFoodItems } from './utils/firebaseFunction'
import { actionType } from './context/reducer'

const App = () => {
	const [{ foodItems }, dispatch] = useStateValue()

	const fetchData = async () => {
		await getAllFoodItems().then((data) => {
			dispatch({
				type: actionType.SET_FOOD_ITEMS,
				foodItems: data,
			})
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<AnimatePresence>
			<div className='w-screen h-auto flex flex-auto bg-primary'>
				<Header />
				<main className='mt-14 md:mt-20 px-4 py-4 w-full'>
					<Routes>
						<Route path='/*' element={<MainContainer />} />
						<Route path='/adminPanel' element={<CreateContainer />} />
						<Route path='/about' element={<About />} />
						<Route path='/service' element={<Service />} />
					</Routes>
				</main>
			</div>
			<Footer className=' bg-primary' />
		</AnimatePresence>
	)
}

export default App
