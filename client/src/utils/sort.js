export const clicksLowHigh = (arr) =>
  arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
export const clicksHighLow = (arr) =>
  arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
