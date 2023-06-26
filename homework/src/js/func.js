/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
// eslint-disable-next-line no-unused-vars
function sortObj(obj, arr) {
  const firstArr = [];
  const secondArr = [];

  for (const i in obj) {
    if (i === arr[0]) {
      firstArr.splice(0, 0, { key: i, value: obj[i] });
    }
    if (i === arr[1]) {
      firstArr.splice(1, 0, { key: i, value: obj[i] });
    }
    secondArr.push({ key: i, value: obj[i] });
  }

  secondArr.sort((a, b) => a.key.localeCompare(b.key)).splice(3, 4);

  return firstArr.concat(secondArr);
}
