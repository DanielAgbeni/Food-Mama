/** @format */
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'
const firebaseConfig = {
	apiKey: 'AIzaSyAQaeV19RAiRnoU2m8dwX7fdcC7mljFiUg',
	authDomain: 'food-delivery-app-49f2d.firebaseapp.com',
	databaseURL: 'https://food-delivery-app-49f2d-default-rtdb.firebaseio.com',
	projectId: 'food-delivery-app-49f2d',
	storageBucket: 'food-delivery-app-49f2d.appspot.com',
	messagingSenderId: '678322793140',
	appId: '1:678322793140:web:8979c9ce2bc870060a05e1',
	measurementId: 'G-H1PFGPMGP1',
}
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)
// const analytics = getAnalytics(app)

export { app, firestore, storage }
