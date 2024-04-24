import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2lrcxKb1IkwzTb6evTentDpwtLz8y7FE",
  authDomain: "proyectoreact-68b0d.firebaseapp.com",
  projectId: "proyectoreact-68b0d",
  storageBucket: "proyectoreact-68b0d.appspot.com",
  messagingSenderId: "1385676178",
  appId: "1:1385676178:web:569e520bf044b04c46954b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const getproducts = async () => {
    const collectionproducts = collection(db,"Datacards");
    const snapshot = await getDocs(collectionproducts);
    const docsData = snapshot.docs.map(docu => {
        return{...docu.data() , id : docu.id}
    })
   
    return docsData
}
export const getProductsByCategory = async (categoryToSearch) =>{
    const collectionproducts = collection(db, "Datacards");
    const queryCollection = query(
           collectionproducts,
           where("category", "==", categoryToSearch)
       );
   const snapshot = await getDocs(queryCollection);
    const docsData = snapshot.docs.map((docu) => {
           return { ...docu.data(), id: docu.id };
       });
       return docsData;
}

export const getOneProducts = async (idToSearch) => {
    const collectionproducts = collection(db, "Datacards");
    const productRef = doc(collectionproducts, idToSearch);
    const snapshot = await getDoc(productRef);
    return { ...snapshot.data(), id: snapshot.id };
};
export const createBuyOrder = async (order) => {
    const ordersCollectionRef = collection(db, "orders");
    const orderDoc = await addDoc(ordersCollectionRef , order);
    return orderDoc.id;
}