/**
 * 
 
 color   hex     price
  红   FF0000  10,0000
  黄   FFFF00   5,0000
  绿   00FF00        0

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
    this.middle = (max + min) / 2;
  }
  getColor(number) {
    if (number >= this.max) {
      return '#FF0000';
    }
    if (number <= this.min) {
      return '#00FF00';
    }
    if (number <= this.middle) {
      const dec = Math.round(256 * (number - this.min) / (this.middle - this.min));
      const hex = dec.toString(16).toUpperCase();
      return `#${prefix0(hex)}FF00`;
    }
    
    const dec = Math.round(256 - 256 * (number - this.middle) / (this.max - this.middle));
    const hex = dec.toString(16).toUpperCase();
    return `#FF${prefix0(hex)}00`;
  }
}

export default DegreeColor;
