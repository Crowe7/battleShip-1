import { boardArray } from ".";
import { gridObject } from "./types";

function placeBotShips() {}

export function acceptableShots(gridArray: Array<gridObject>) {
  let acceptableShotArr: gridObject[] = [];
  for (let i = 0; i < gridArray.length; i++) {
    if (gridArray[i].hit === false) {
      acceptableShotArr.push(gridArray[i]);
    }
  }
  console.log(acceptableShotArr);
}

// remove occupied spaces from grid
// have different function, not ghost ship, or maybe modified version to make a grid
// to decide if
// choose random number 1-100
// random if vertical or not

// 1. need function that generate the array of available spaces
//  1.1 choose if vertical or horizontal
// 2. choose randomly from that array.
// 3. make ship in space
// 4. repeat
// 5. when all are placed (which should happen instantly) make the bot grid clickable by player
// 6. when player clicks AI choose random player grid point.
