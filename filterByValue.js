const arr = [
  {
    first: "Elie",
    last: "Schoppik"
  },
  {
    first: "Tim",
    last:"Garcia",
    isCatOwner: true
  },
  {
    first: "Matt",
    last:"Lane"
  },
  {
    first: "Colt",
    last:"Steele",
    isCatOwner: true
  }
];

const key = 'isCatOwner';

const filterByValue = (arr, key) => {
  const keyArray = [];
  arr.forEach(element => {
    if (element.hasOwnProperty(key)) {
      keyArray.push(element);
    }
  });
  return keyArray;
};

console.log(filterByValue(arr, key));