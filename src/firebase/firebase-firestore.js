import { initializeApp } from "firebase/app";
import "firebase/firestore";
import getFirebaseConfig from "./firebase-config";
import { getFirestore, updateDoc } from "firebase/firestore";
import { getDoc, doc, setDoc } from "firebase/firestore";
import {
  leaderboardDataToArray,
  leaderbordBinarySearchInsert,
  sortLeaderboardArray,
} from "../lib/leaderboard";

// Initialize Firebase

const database = () => {
  const firebaseConfig = getFirebaseConfig();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getPositionFromDb = async (imageId, charId) => {
    const snapshot = await getDoc(doc(db, `${imageId}`, `${charId}`));
    if (!snapshot.exists()) return;
    return snapshot.data();
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
    const docRef = await getDoc(doc(db, "leaderboards", `${imageId}`));
    if (!docRef.exists()) return [];

    // get data and convert to array
    const data = docRef.data();
    let board = leaderboardDataToArray(data);

    // sort so shortest time is first.
    sortLeaderboardArray(board);
    return board;
  };

  const updateLeaderboard = async (username, score, imageId) => {
    // get from db to compare
    const leaderboard = await getLeaderboard(imageId);

    const docRef = await doc(db, "leaderboards", `${imageId}`);

    // find insertion point and insert new hi-score

    // linear search - o(n)
    // for (let i = 0; i < leaderboard.length; i++) {
    //   if (leaderboard[i][1] > score) {
    //     leaderboard.splice(i, 0, [username, score]); //insert score
    //     leaderboard.pop(); // remove 11th place
    //     break;
    //   }
    // }

    // binary search - o(logn) - only 10 elements though, so probably no point
    // just wanted to try implementing
    leaderbordBinarySearchInsert(leaderboard, [username, score]);

    // update scores in db,
    await updateDoc(docRef, {
      1: leaderboard[0],
      2: leaderboard[1],
      3: leaderboard[2],
      4: leaderboard[3],
      5: leaderboard[4],
      6: leaderboard[5],
      7: leaderboard[6],
      8: leaderboard[7],
      9: leaderboard[8],
      10: leaderboard[9],
    });
  };

  const populateDefaultLeadboards = async () => {
    const data = {
      1: ["creator", 0],
      2: ["creator", 1],
      3: ["creator", 2],
      4: ["creator", 5],
      5: ["creator", 10],
      6: ["creator", 20],
      7: ["creator", 40],
      8: ["creator", 60],
      9: ["creator", 80],
      10: ["creator", 99],
    };

    await setDoc(doc(db, "leaderboards", "0"), data);
    await setDoc(doc(db, "leaderboards", "1"), data);
    await setDoc(doc(db, "leaderboards", "2"), data);
    await setDoc(doc(db, "leaderboards", "3"), data);
    await setDoc(doc(db, "leaderboards", "4"), data);
    await setDoc(doc(db, "leaderboards", "5"), data);
  };

  return {
    validatePosition,
    getLeaderboard,
    updateLeaderboard,
    populateDefaultLeadboards,
  };
};

export default database;
