/** @format */

import { useState } from 'react'
import './App.css'
import { Header, MainContainer, CreateContainer } from './component'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
	return (
		<AnimatePresence>
			<div className='w-screen h-auto flex flex-auto bg-primary'>
				<Header />
				<main className='mt-14 md:mt-20 px-4 py-4 w-full'>
					<Routes>
						<Route path='/*' element={<MainContainer />} />
						<Route path='/adminPanel' element={<CreateContainer />} />
					</Routes>
				</main>
			</div>
		</AnimatePresence>
	)
}

export default App
