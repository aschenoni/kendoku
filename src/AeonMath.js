
export const square = num => Math.pow(num, 2);
export const sqrt = num => Math.pow(num, 0.5);

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export class Point {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

/*
* Need to remember what this does and how it does it
* But remember, the sum of normal randoms and the sum of uniform randoms is equivalent!
* @returns a normally distributted random number (maybe an int?)
*/
export const normalRandom = (mean, stdev) => {
  var u1, u2, v1, v2, s;
  if (mean === undefined) {
    mean = 0.0;
  }
  if (stdev === undefined) {
    stdev = 1.0;
  }
  if (normalRandom.v2 === null) {
    do {
      u1 = Math.random();
      u2 = Math.random();

      v1 = 2 * u1 - 1;
      v2 = 2 * u2 - 1;
      s = v1 * v1 + v2 * v2;
    } while (s === 0 || s >= 1);

    normalRandom.v2 = v2 * Math.sqrt(-2 * Math.log(s) / s);
    return stdev * v1 * Math.sqrt(-2 * Math.log(s) / s) + mean;
  }

  v2 = normalRandom.v2;
  normalRandom.v2 = null;
  return stdev * v2 + mean;
}