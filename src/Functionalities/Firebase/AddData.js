import { database as db } from '.';
import { Response } from '../Objects/Objects';
import { collection, addDoc } from 'firebase/firestore';

export const addData = async (collectionName, data) => {
    try {
        const doc = await addDoc(collection(db, collectionName), data);
        return new Response(200, "Success", doc);
    } catch (error) {
        return new Response(error.code, error.message, error);
    }
}

export const addGenBlogData = async (data) => {
    try {
        const doc = await addDoc(collection(db, "generated_blogs"), data);
        return new Response(200, "Success", doc);
    } catch (error) {
        return new Response(error.code, error.message, error);
    }
}

export const addBlogData = async (data) => {
    try {
        const doc = await addDoc(collection(db, "blogs"), data);
        return new Response(200, "Success", doc);
    } catch (error) {
        return new Response(error.code, error.message, error);
    }
}
