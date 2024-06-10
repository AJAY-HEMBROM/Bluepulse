import { app } from "../../../../firebase"; // Adjust the path accordingly
import { getDatabase, ref, set } from "firebase/database";
import { NextResponse } from "next/server";

// Initialize Firebase Realtime Database
const db = getDatabase(app);

export async function POST(request) {
    try {
        const { firstName, lastName, email, password } = await request.json();

        // Generate a unique user ID (for example, using Firebase Authentication)
        const userId = generateUserId(); // You need to implement this function

        // Save user data to Firebase Realtime Database
        function writeUserData(userId, name, email, imageUrl) {
            set(ref(db, 'users/' + userId), {
                username: name,
                email: email,
                profile_picture: imageUrl,
                password
            });
        }

        // Save user data
        writeUserData(userId, firstName + ' ' + lastName, email, ''); // imageUrl is empty for now

        return NextResponse.json({ message: 'User signed up successfully', userId });
    } catch (error) {
        console.error('Error saving user data:', error);
        return NextResponse.json({ error: 'Failed to sign up user' }, { status: 500 });
    }
}

// Function to generate a unique user ID (example implementation)
function generateUserId() {
    // You can use Firebase Authentication UID or generate a custom ID
    // For example:
    return Math.random().toString(36).substr(2, 9);
}
