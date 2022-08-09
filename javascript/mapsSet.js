// save as javascript object
/* 
const map = new Map([
  [1, "A"],
  [2, "B"],
  [3, "C"],
  [4, "D"],
]);

console.log(map.delete(1));
console.log(map.has(18));
console.log(map);

map.forEach((value) => {
  console.log(value);
}); */

//==================================== sets unique array dey ==========================//
const arr = [2, 33, 4, 3, 3, 3, 4, 34, 34, 34, 34, 34, 34, 34];
const uniqueArr = new Set(arr);
console.log(uniqueArr.values());

function removeDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicate([2, 3, 3, 3, 3, 32, 3, 2]));

//https://www.youtube.com/watch?v=OdqMxW5WoKc&list=PL2ozzDVxiDaclzuYm212uT76Z_JR_z6aJ&index=10
