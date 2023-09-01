/** @format */

import {
	collection,
	doc,
	getDoc,
	orderBy,
	query,
	setDoc,
} from 'firebase/firestore'
import { firestore } from '../firebase.config'

// Saving new Item
export const saveItem = async (data) => {
	await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, {
		merge: true,
	})
}
// getall food items
export const getAllFoodItems = async () => {
	const items = await getDoc(
		query(collection(firestore, 'foodItems'), orderBy('id', 'desc'))
	)

	return items.docs.map((doc) => doc.data())
}
