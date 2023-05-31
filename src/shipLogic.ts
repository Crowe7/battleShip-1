export function sum(a: number, b: number) {
  return a + b;
}

export function createShip(length: number, timesHit: number, sunk: boolean) {
  return {
    length: length,
    timesHit: timesHit,
    sunk: sunk,
    hit() {
      return this.timesHit++;
    },
  };
}

function isSunk(ship: { timesHit: number; length: number; sunk: boolean }) {
  return ship.timesHit >= ship.length ? true : false;
}

let ship1 = createShip(2, 0, false);
ship1.hit();

console.log(ship1);
console.log(isSunk(ship1));
