/**
 * 
 
 color   hex     price
  黑   000000  13,0000
  红   FF0000  10,0000    twoThird
  黄   FFFF00   7,0000    oneThird
  绿   00FF00   4,0000

 *
 */

function prefix0(str) {
  return str.length === 1 ? `0${str}` : str;
}

class DegreeColor {
  constructor({
    max,
    min = 0,
  }) {
    this.max = max;
    this.min = min;
    this.third = (max - min) / 3;
    this.oneThird = min + this.third;
    this.twoThird = min + this.third * 2;
  }
  getColor(number) {
    // 000000
    if (number >= this.max) {
      return '#000000';
    }
    // FF0000 ~ 000000
    if (number >= this.twoThird) {
      const dec = Math.round(256 - 256 * (number - this.twoThird) / this.third);
      const hex = dec.toString(16).toUpperCase();
      return `#${prefix0(hex)}0000`;
    }
    // FFFF00 ~ FF0000
    if (number >= this.oneThird) {
      const dec = Math.round(256 - 256 * (number - this.oneThird) / this.third);
      const hex = dec.toString(16).toUpperCase();
      return `#FF${prefix0(hex)}00`;
    }
    // 00FF00 ~ FFFF00
    if (number >= this.min) {
      const dec = Math.round(256 * (number - this.min) / this.third);
      const hex = dec.toString(16).toUpperCase();
      return `#${prefix0(hex)}FF00`;
    }
    return '#00FF00';
  }
}

export default DegreeColor;
