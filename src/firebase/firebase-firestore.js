import { initializeApp } from "firebase/app";
import "firebase/firestore";
import getFirebaseConfig from "./firebase-config";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// Initialize Firebase

const database = () => {
  const firebaseConfig = getFirebaseConfig();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getPositionFromDb = async (imageId, charId) => {
    const snapshot = await getDocs(collection(db, `${imageId}`));

    for (let i = 0; i < snapshot.docs.length; i++) {
      const ss = snapshot.docs[i];
      if (isNaN(ss.id)) continue;
      if (parseInt(ss.id) !== charId) continue;
      return ss.data();
    }
  };

  const validatePosition = async (imageId, charId, clickPos) => {
    const pos = await getPositionFromDb(imageId, charId);

    // upper bound is top left corner, x y
    if (clickPos[0] < pos.upperBound[0]) return false;
    if (clickPos[0] > pos.lowerBound[0]) return false;

    // lower bound is bot right corner, x y
    if (clickPos[1] < pos.upperBound[1]) return false;
    if (clickPos[1] > pos.lowerBound[1]) return false;

    return true;
  };

  return { validatePosition };
};

export default database;
