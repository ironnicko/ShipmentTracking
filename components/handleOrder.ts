import { app, auth } from "./firebase";
import { getFirestore, addDoc, updateDoc, collection, query, getDocs, where } from "firebase/firestore";


const db = getFirestore(app);

const doOrder = async (name: string, destination: string, cost: string) => {
    const docRef = await addDoc(collection(db, "orders"), { name: name, destination: destination, cost: cost });
    await updateDoc(docRef, { orderID: docRef.id, customerID: auth.currentUser.uid });
};

const getOrder = async (uuid: string) => {

    const uid = auth.currentUser.uid;
    const mainData = query(collection(db, "orders"), where("customerID", "==", uid));
    const data = await getDocs(mainData);
    const array: Array<number> = [];
    data.forEach(async (elem: any) => {
        const elemData = await elem.data();
        array.push(elemData);
    });

    return array;
}


export { doOrder, getOrder };