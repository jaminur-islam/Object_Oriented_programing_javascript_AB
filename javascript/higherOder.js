/* function callback() {
  return "hi sagor ";
}

const myObj = {
  name: "sagor ",
  map: function myMapFun(callback) {
    return callback();
  },
};

console.log(myObj.map(callback));

const arrObj = [
  { id: 1, name: "sagor1" },
  { id: 2, name: "sagor2" },
  { id: 3, name: "sagor3" },
  { id: 4, name: "sagor4" },
];

const myFilter = arrObj.find((item) => item.id === 10);
console.log(myFilter); */
// filter filter kore array return kore r zodi kichu  na pay tahole emty array return kore
// find find kore object return kore r zodi kichu na pay tahole undifine return kore

/* arrObj.forEach((value, index, array) => {
  console.log(value, index, array);
}); */

/* const valus = arrObj.map((item, index, array) => {
  return [item, index, array];
});

console.log(valus);
 */
/* let total = 0;
for (i = 0; i < arrObj.length; i++) {
  total += arrObj[i].id;
}
console.log(total); */

//=============================== reducer ====================================//
const arrObj = [
  { id: 1, name: "sagor1" },
  { id: 2, name: "sagor2" },
  { id: 3, name: "sagor3" },
  { id: 4, name: "sagor4" },
];
const totalId = arrObj.reduce((total, items) => {
  return total + items.id;
}, 0);
console.log(totalId);
