const arrNames = ['Elie', 'Colt', 'Tim', 'Matt']
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8];

const isEven = (num) => {
  return num % 2 === 0;
};

const isLongerThanThreeCharacters = (str) => {
  return str.length > 3;
}

const partition = (arr, cb) => {
  const arr1 = [];
  const arr2 = [];

  arr.forEach(element => {
    if (cb(element)) {
      arr1.push(element);
    } else {
      arr2.push(element);
    }
  });

  return [arr1, arr2];
};

console.log(partition(arrNum, isEven));
console.log(partition(arrNames, isLongerThanThreeCharacters));