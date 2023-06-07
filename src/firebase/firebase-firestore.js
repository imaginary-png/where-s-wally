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
      const doc = snapshot.docs[i];
      if (isNaN(doc.id)) continue;
      if (parseInt(doc.id) !== charId) continue;
      return doc.data();
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

  const getLeaderboard = async (imageId) => {
    const snapshot = await getDocs(collection(db, "leaderboards"));

    for (let i = 0; i < snapshot.docs.length; i++) {
      const doc = snapshot.docs[i];

      console.log(`${imageId} : ${doc.id}`);
      if (parseInt(doc.id) !== imageId) continue;

      const data = doc.data();
      let result = [];

      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          result.push(data[key]);
        }
      }
      console.log(`api result: ${result}`);
      return result;
    }
  };

  return { validatePosition, getLeaderboard };
};

export default database;
