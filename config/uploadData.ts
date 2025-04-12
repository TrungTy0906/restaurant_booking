import data from "@/app/store/restaurants";
const {slots} = data;
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const restaurantsData = slots

const uploadData = async () => {
    try {
            for (let i = 0; i < restaurantsData.length; i++) {
                const restaurant = restaurantsData[i];
                const restaurantRef = doc(collection(db, "slots"), `slot_${i + 1}`);
                await setDoc(restaurantRef, restaurant);
            }
            console.log("Data uploaded successfully!");
    }
    catch(e) {
        console.error("Error uploading data: ", e);
    }
}

export default uploadData;