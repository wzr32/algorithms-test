const arr = [1, 2, 3, 2];
const compareArr = [];

const hasNoDuplicates = (arr) => {
  let noDuplicates = true;
  arr.forEach((element, i) => {
    if (compareArr.includes(element)) {
      noDuplicates = false;
      return;
    }

    if ((i + 1) < arr.length) {
      compareArr.push(element);
    }

  });
  return noDuplicates;
}

console.log(hasNoDuplicates(arr));