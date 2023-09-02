/** @format */

import React from 'react'
import { MdShoppingCart, MdLogout, MdAdd, MdLogin } from 'react-icons/md'
import { motion } from 'framer-motion'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import { useState } from 'react'
import CartItem from './CartItem'

const Header = () => {
	const auth = getAuth(app)
	const provider = new GoogleAuthProvider()
	const [{ user, cartShow, cartItems }, dispatch] = useStateValue()
	const [isMenu, setIsMenu] = useState(false)
	const Login = () => {
		// if (!user) {
		// 	const {
		// 		user: { refreshToken, providerData },
		// 	} = await signInWithPopup(auth, provider)
		// 	dispatch({
		// 		type: actionType.SET_USER,
		// 		user: providerData[0],
		// 	})
		// 	localStorage.setItem('user', JSON.stringify(providerData[0]))
		// } else {
		setIsMenu(!isMenu)
		// }
	}
	const signIn = async () => {
		const {
			user: { refreshToken, providerData },
		} = await signInWithPopup(auth, provider)
		dispatch({
			type: actionType.SET_USER,
			user: providerData[0],
		})
		localStorage.setItem('user', JSON.stringify(providerData[0]))

		setIsMenu(!isMenu)
	}
	const logout = () => {
		setIsMenu(false)
		localStorage.clear()

		dispatch({
			type: actionType.SET_USER,
			user: null,
		})
	}

	const toggleCart = () => {
		setIsMenu(false)
	}
	const showCart = () => {
		dispatch({
			type: actionType.SET_CART_SHOW,
			cartShow: !cartShow,
		})
	}
	// console.log(user)
	return (
		<header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary drop-shadow-xl'>
			{/* destop  */}
			<div className='hidden md:flex w-full h-full items-center justify-between  shadow-primary'>
				<Link
					to={'/'}
					className='flex items-center gap-2'
					onClick={() => {
						setIsMenu(false)
					}}>
					<img
						src={Logo}
						alt='logo'
						className='w-8 object-cover'
						title='Logo'
					/>
					<p className='text-headingColor text-xl font-bold'>FoodMama</p>
				</Link>
				<div className='flex items-center gap-8'>
					<motion.ul
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						end={{ opacity: 0, x: 200 }}
						className='flex item-center gap-8 ml-auto'>
						<Link to={'/'}>
							<li
								className='cursor-pointer text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out'
								onClick={() => setIsMenu(false)}>
								Home
							</li>
						</Link>
						<li className='cursor-pointer text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out'>
							Menu
						</li>
						<li className='cursor-pointer text-base hover:text-headingColor  text-textColor duration-100 transition-all ease-in-out'>
							About Us
						</li>
						<li className='cursor-pointer text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out'>
							Service
						</li>
					</motion.ul>
					<div
						className='relative flex items-center justify-center'
						onClick={showCart}>
						<MdShoppingCart
							className='text-textColor text-2xl cursor-pointer'
							onClick={toggleCart}
						/>
						{cartItems && cartItems.length > 0 && (
							<div className='absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
								<p className='text-xm text-white font-semibold'>
									{cartItems.length}
								</p>
							</div>
						)}
					</div>
					<div className='relative'>
						<motion.img
							whileTap={{ scale: 0.8 }}
							src={user ? user.photoURL : Avatar}
							alt='Avatar'
							className='w-10 min-w-[40px] h-10 min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer'
							onClick={Login}
							title={user ? user.displayName : 'Not Signed in'}
						/>
						{isMenu && (
							<motion.div
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								className='w-80 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 -right-3 '>
								<div className=' w-full flex flex-col items-center justify-center'>
									<motion.img
										whileTap={{ scale: 0.8 }}
										src={user ? user.photoURL : Avatar}
										alt='Avatar'
										className='w-10 min-w-[60px] h-10 min-h-[60px] mt-3 rounded-full drop-shadow-3xl cursor-pointer '
										onClick={!user ? signIn : ''}
										title={user ? user.displayName : 'Not Signed in'}
									/>
									<p>{user ? user.displayName : 'Not Signed in'}</p>
								</div>
								{!user ? (
									<p
										className='flex px-4 py-2 item-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
										onClick={signIn}>
										Sign In <MdLogin />
									</p>
								) : (
									''
								)}

								{user && user.uid === '102019565432607253558' ? (
									<Link to={'./adminPanel'}>
										<p
											className='flex px-4 py-2 item-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
											onClick={() => setIsMenu(false)}>
											New Item{' '}
											<MdAdd className='text-textColor text-2xl cursor-pointer' />
										</p>
									</Link>
								) : (
									''
								)}
								<p
									className='flex px-4 py-2 item-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
									onClick={logout}>
									Logout <MdLogout />
								</p>
							</motion.div>
						)}
					</div>
				</div>
			</div>
			{/* mobile */}
			<div className='flex items-center justify-between md:hidden w-full h-full'>
				<div
					className='relative flex items-center justify-center'
					onClick={showCart}>
					<MdShoppingCart
						className='text-textColor text-3xl h-8 cursor-pointer'
						onClick={toggleCart}
					/>
					{cartItems && cartItems.length > 0 && (
						<div className='absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
							<p className='text-xm text-white font-semibold'>
								{cartItems.length}
							</p>
						</div>
					)}
				</div>
				<Link
					to={'/'}
					className='flex items-center gap-2'
					onClick={() => {
						setIsMenu(false)
					}}>
					<img src={Logo} className='w-8 object-cover' alt='logo' />
					<p className='text-headingColor text-xl font-bold'> FoodMama</p>
				</Link>

				<div className='relative'>
					<motion.img
						whileTap={{ scale: 0.8 }}
						src={user ? user.photoURL : Avatar}
						alt='Avatar'
						className='w-10 min-w-[40px] h-10 min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer'
						onClick={Login}
						title={user ? user.displayName : 'Not Signed in'}
					/>
					{isMenu && (
						<motion.div
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.6 }}
							className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 -right-3 '>
							<div className=' w-full flex flex-col items-center justify-center'>
								<motion.img
									whileTap={{ scale: 0.8 }}
									src={user ? user.photoURL : Avatar}
									alt='Avatar'
									className='w-10 min-w-[60px] h-10 min-h-[60px] mt-3 rounded-full drop-shadow-3xl cursor-pointer '
									onClick={!user ? signIn : ''}
									title={user ? user.displayName : 'Not Signed in'}
								/>
								<p>{user ? user.displayName : 'Not Signed in'}</p>
							</div>
							{!user ? (
								<p
									className='flex px-4 py-2 item-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
									onClick={signIn}>
									Sign In <MdLogin />
								</p>
							) : (
								''
							)}
							{user && user.uid === '102019565432607253558' ? (
								<Link to={'./adminPanel'}>
									<p
										className='flex px-4 py-2 item-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
										onClick={() => setIsMenu(false)}>
										New Item{' '}
										<MdAdd className='text-textColor text-2xl cursor-pointer' />
									</p>
								</Link>
							) : (
								''
							)}
							<ul className='flex flex-col gap-3 '>
								<Link to={'/'}>
									<li
										className='cursor-pointer text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out px-4 py-2 '
										onClick={() => setIsMenu(false)}>
										Home
									</li>
								</Link>
								<li className='cursor-pointer text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out px-4 py-2 '>
									Menu
								</li>
								<li className='cursor-pointer text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out px-4 py-2 '>
									About Us
								</li>
								<li className='cursor-pointer text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out px-4 py-2 '>
									Service
								</li>
							</ul>
							<p
								className='m-2 p-2 rounded-md shadow-md flex item-center justify-center bg-gray-300 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out  text-textColor text-base'
								onClick={logout}>
								Logout <MdLogout />
							</p>
						</motion.div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
