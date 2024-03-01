import randomColor from "random-hex-color";
import contrast from "get-contrast";
import { calcAPCA } from "apca-w3";
import { colorParsley, colorToHex, colorToRGB } from "colorparsley";

const maxIter = 512;
const threshold = 75; // could be configurable

export const getColorPair = (pinnedColor) => {
  let colorA = colorParsley(pinnedColor || randomColor());
  let colorB = colorParsley(randomColor());

  if (pinnedColor) {
    let iter = 0;
    while (Math.abs(calcAPCA(colorA, colorB)) < threshold && iter < maxIter) {
      colorB = colorParsley(randomColor());
      iter++;
    }

    // TODO — failure state when no contrast found
    if (iter !== maxIter) {
      return ["#" + colorToHex(colorA), "#" + colorToHex(colorB)];
    }
  }

  while (Math.abs(calcAPCA(colorA, colorB)) < threshold) {
    colorA = colorParsley(randomColor());
    colorB = colorParsley(randomColor());
  }

  // TODO — needs to pass apca both foreground and background (bi-directional)

  return ["#" + colorToHex(colorA), "#" + colorToHex(colorB)];
};
