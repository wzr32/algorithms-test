const arr = [1, 2, 3, 4, 5];

const searchValue = 10;

const find = (arr, searchValue) => {
  const findIndex = arr.indexOf(searchValue);
  if (findIndex > -1) {
    return arr[findIndex];
  }
};

console.log(find(arr, searchValue));