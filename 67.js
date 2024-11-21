/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let r = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let t = 0;
  while (i >= 0 || j >= 0 || t != 0) {
    const c =
      Number.parseInt(i < 0 ? 0 : a[i]) + Number.parseInt(j < 0 ? 0 : b[j]) + t;
    r = (c % 2).toString() + r;
    t = c > 1 ? 1 : 0;
    i--;
    j--;
  }

  return r;
};
