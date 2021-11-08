const removeVowelsLowercase = (arg) => {
  return [arg].map(str => str.replace(/[aeiou]/g, '').toLowerCase());
};

console.log(removeVowelsLowercase('HOLA'));