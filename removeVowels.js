const removeVowels = (arg) => {
  return [arg].map(str => str.replace(/[aeiou]/g, ''));
};

console.log(removeVowels('hola'));