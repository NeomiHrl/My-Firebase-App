import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// מחזיר את כל הסרטים מהאוסף 'movies'

import { app } from '../firebase';

const db = getFirestore(app);

// מוסיף סרט חדש עם title ו-description לאוסף 'movies'
export async function addMovie({ title, description }) {
    if (!title || !description) {
        throw new Error('Title and description are required');
    }
	try {
		const docRef = await addDoc(collection(db, 'movies'), {
			title,
			description,
			createdAt: new Date().toISOString(),
		});
		return docRef.id;
	} catch (error) {
		console.error('Error adding movie:', error);
		throw error;
	}
}

export async function getMovies() {
	try {
		const querySnapshot = await getDocs(collection(db, 'movies'));
		return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
	} catch (error) {
		console.error('Error fetching movies:', error);
		throw error;
	}
}
