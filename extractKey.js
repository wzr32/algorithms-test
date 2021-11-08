const arr = [
  {
    name: 'Elie'
  },
  {
    name: 'Tim'
  },
  {
    name: 'Matt'
  },
  {
    name: 'Colt'
  }
];

const key = 'name';

const resultArray = [];

const extractKey = (arr, key) => {
  arr.forEach(element => {
    if (element.hasOwnProperty(key)) {
      resultArray.push(element[key]);
    };
  });
  return resultArray;
};

console.log(extractKey(arr, key));