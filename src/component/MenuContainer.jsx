/** @format */

import React, { useState } from 'react'
import { useStateValue } from '../context/StateProvider'
import RowContainer from './RowContainer'
import { IoFastFood } from 'react-icons/io5'

const MenuContainer = () => {
	const [filter, setFilter] = useState('chicken')

	const [{ foodItems }, dispatch] = useStateValue()
	return (
		<section className='w-full my-6' id='menu'>
			<div className='w-full flex flex-col items-center justify-center'>
				<p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>
					Our Hottest Dishes
				</p>
				<div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
					<div></div>
				</div>

				<div className='w-full'>
					<RowContainer
						flag={false}
						data={foodItems?.filter((n) => n.category == filter)}
					/>
				</div>
			</div>
		</section>
	)
}

export default MenuContainer
