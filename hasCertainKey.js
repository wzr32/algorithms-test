const arr = [
  { title: "Instructor", first: 'Elie', last: "Schoppik" },
  { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: 'Matt', last: "Lane" },
  { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
];


let counter = 0;

const hasCertainKey = (arr, key) => {
  arr.forEach(element => {
    if (element.hasOwnProperty(key)) {
      counter += 1;
    }
  });

  if (counter === arr.length) return false
  return true;
}

console.log(hasCertainKey(arr, 'first'));
console.log(hasCertainKey(arr, 'isCatOwner'));