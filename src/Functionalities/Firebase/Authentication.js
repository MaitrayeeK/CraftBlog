import { useDispatch } from 'react-redux';
import { addData } from './AddData';
import { app } from './index';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { Response } from '../Objects/Objects';
import { getUserAllData, getUserData, getUsersBlog } from './GetData';

export const auth = getAuth(app);
let result = {};

export const SignUp = async (email, password, data) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // Add user data to firestore
            const userAuthdata = user.toJSON();
            data = { ...data, email: userAuthdata.email, uid: userAuthdata.uid};
            return await addData("users", data, docRef => userAuthdata.uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return new Response(errorCode, errorMessage, error);
        });
}

export const SignIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const data = await getUserAllData(user.uid);
            console.log(data);
            return new Response(200, "Success", {user, doc: data.doc, blogs: data.blogs, genblogs: data.genblogs});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return new Response(errorCode, errorMessage, error);
        });
}

export const isSignedIn = async (callback) => {
    return onAuthStateChanged(auth, (user) => {
        let result = {};
        if (user) {
            callback({ result: true, user: user.toJSON() })
            result =  { result: true, user: user.toJSON() };
        } else {
            // User is signed out
            callback({ result: false, user: {} });
            result = { result: false, user: {} };
        }
        return result;
    });
};

export const SignOut = async () => {
    try {
        await signOut(auth);
        return { code: 200, message: "Sign-out successful." };
    } catch (error) {
        return { message: error.message };
    }
}