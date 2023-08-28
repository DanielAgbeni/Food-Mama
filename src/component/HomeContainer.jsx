/** @format */

import React from 'react'
import Delivery from '../img/delivery.png'
import TypingAnimation from './TypingAnimation'
import heroBg from '../img/heroBg.png'
import I1 from '../img/i1.png'

const local = Navigator.geolocation
const formCurr = (value) =>
	new Intl.NumberFormat(local, {
		style: 'currency',
		currency: 'NGN',
	}).format(value)

const HomeContainer = () => {
	return (
		<section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen'>
			<div className='py-2 flex-1 flex flex-col items-start justify-center gap-6 top-0'>
				<div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
					<p className='text-base text-orange-500 font-semibold'>
						Bike Delivery
					</p>
					<div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
						<img
							src={Delivery}
							className='w-full h-full object-contain'
							alt='delivery'
						/>
					</div>
				</div>
				<div className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
					{/* The Fastest{' '}
					<span className='text-orange-600 text-[3rem] lg:text-[5rem]'>
						Food
					</span>{' '}
					Delievery in{' '}
					<span className='text-orange-600 text-[3rem] lg:text-[5rem]'>
						Your City
					</span> */}
					<TypingAnimation />
				</div>
				<p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit
					ut ab. Cum debitis optio dolor accusantium adipisci fugiat, ipsa
					itaque laboriosam dolores rem molestias, omnis illo exercitationem
					quas nobis assumenda dicta libero possimus ipsum! Aspernatur quia
					tempora odit magnam?
				</p>
				<button className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
					Order Now
				</button>
			</div>
			<div className='py-2 flex-1 flex items-center relative'>
				<img src={heroBg} alt='herobg' className='ml-auto md:h-370 lg:h-650' />
				<div className='w-full h-full absolute flex top-0 left-0 items-center justify-center px-32 py-4'>
					<div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col items-center justify-center'>
						<img src={I1} className='w-40 -mt-20' alt='I1' />
						<p className='text-base font-semibold text-textColor'>Icecream</p>
						<p className='text-sm text-lighttextGray font-semibold'>
							Chocolate & Vanilla
						</p>
						<p className='text-sm font-semibold text-headingColor'>
							{formCurr(200)}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeContainer
