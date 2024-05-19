import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { database as db } from ".";

export const getUserData = async (uid) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", uid));

    // const docRef = doc(db, "users", uid);
    // const docSnap = await getDoc(docRef);

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    let docData = {};
    await querySnapshot.forEach(async (doc) => {
        console.log(doc.id, " => ", doc.data());
        docData = await doc;
    });
    return docData;
}

export const getUsersBlog = async (uid) => {
    const blogsRef = collection(db, "blogs");
    const q = query(blogsRef, where("user_id", "==", uid));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    let docData = [];
    await querySnapshot.forEach(async (doc) => {
        console.log(doc.id, " => ", doc.data());
        docData.push(await doc);
    });
    return docData;
}

export const getUsersGenBlog = async (uid) => {
    const blogsRef = collection(db, "generated_blogs");
    const q = query(blogsRef, where("user_id", "==", uid));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    let docData = [];
    await querySnapshot.forEach(async (doc) => {
        console.log(doc.id, " => ", doc.data());
        docData.push(await doc);
    });
    return docData;
}

export const getUserAllData = async (uid) => {
    const doc = await getUserData(uid);
    const blogs = await getUsersBlog(uid);
    const genblogs = await getUsersGenBlog(uid);
    const data = {doc, blogs, genblogs};
    return data;
}