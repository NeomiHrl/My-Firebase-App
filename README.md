# React + Vite
MovieApp – Movie Management App with Firebase

A responsive web app built with React, using Firebase for user authentication and cloud data management.  
Users can register, log in, view a list of movies, and add new ones. All data is stored and updated in real time via Firebase.

> Note: This project is still in progress and not yet finalized.

Technologies Used:
- React (JavaScript)
- Firebase (Authentication + Firestore Database)
- Material UI (MUI) – Styling and UI components

Key Features:
- User Registration & Login – Handled via Firebase Authentication
- Protected Routes – Only logged-in users can access app pages via the Sidebar
- View Movies – Fetch and display a list of movies from Firestore
- Add New Movie – Logged-in users can add a movie, which is saved in the cloud
- Real-time Updates – Data is synced live using Firebase Firestore (NoSQL)

How to Run:
1. Clone the repository  
2. Run npm install  
3. Create a Firebase project and add your Firebase config to a .env file or config file  
4. Run the app with:  
   bash
   npm run dev
