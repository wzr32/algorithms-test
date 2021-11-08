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

const responseArray = [];

const addKeyAndValue = (arr, key, val) => {
  arr.forEach((element) => {
    const auxObject = { ...element };
    Object.assign(auxObject, { [key]: val });
    responseArray.push(auxObject);
  });
  return responseArray;
}

console.log(addKeyAndValue(arr, 'title', 'Instructor'));