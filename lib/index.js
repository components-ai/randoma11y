import randomColor from "random-hex-color";
import contrast from "get-contrast";
import firebase from "firebase/app";
import "firebase/firestore";
import { calcAPCA } from "apca-w3";
import { colorParsley, colorToHex, colorToRGB } from "colorparsley";

import { FIREBASE_CONFIG } from "./constants";

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
const db = firebase.firestore();

const DEFAULT_DATA = {
  upvotes: 0,
  downvotes: 0,
};

export const vote = async ({ upvote, colorPair }) => {
  const colors = colorPair.sort();
  const id = colors.map((s) => s.replace("#", "")).join("");

  const voteDoc = await db.collection("colorVotes").doc(id).get({
    source: "server",
  });

  let data = null;
  if (voteDoc.exists) {
    data = voteDoc.data();
  } else {
    data = { ...DEFAULT_DATA, id, colors };
  }

  if (upvote) {
    data.upvotes = data.upvotes + 1;
  } else {
    data.downvotes = data.downvotes + 1;
  }

  await db.collection("colorVotes").doc(id).set(data);
};

const maxIter = 128;
const threshold = 73;

export const getColorPair = (pinnedColor) => {
  let colorA = colorParsley(pinnedColor || randomColor());
  let colorB = colorParsley(randomColor());

  let iter = 0;

  while (Math.abs(calcAPCA(colorA, colorB)) < threshold && iter < maxIter) {
    colorB = colorParsley(randomColor());
    iter++;
  }

  if (iter === maxIter) {
    console.log("no match found — randomising colors");

    while (Math.abs(calcAPCA(colorA, colorB)) < threshold) {
      colorA = colorParsley(randomColor());
      colorB = colorParsley(randomColor());
    }
  }

  console.log(calcAPCA(colorA, colorB), iter);

  // TODO — needs to pass apca both foreground and background (bi-directional)
  // TODO — failure state when no contrast found

  return ["#" + colorToHex(colorA), "#" + colorToHex(colorB)];
};
