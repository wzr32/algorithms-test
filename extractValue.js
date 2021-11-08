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

const extractValue = (arr, key) => {
  arr.forEach(element => {
    const auxObject = {};
    if (element.hasOwnProperty(key)) {
      Object.assign(auxObject, { [element[key]]: '' });
      resultArray.push(auxObject);
    };
  });
  return resultArray;
};

console.log(extractValue(arr, key));