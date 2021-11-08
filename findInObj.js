const arr = [
  {
    first: 'Elie',
    last: "Schoppik"
  },
  {
    first: 'Tim',
    last: "Garcia",
    isCatOwner: true
  },
  {
    first: 'Matt',
    last: "Lane"
  }, {
    first: 'Colt',
    last: "Steele",
    isCatOwner: true
  }
];
const key = 'isCatOwner';
const searchValue = true;

const findInObj = (arr, key, searchValue) => {
  const filter = [];
  arr.forEach(element => {
    if (element.hasOwnProperty(key) && element.hasOwnProperty(key) === searchValue) {
      filter.push(element);
    };
  });
  return filter[0];
};

console.log(findInObj(arr, key, searchValue));