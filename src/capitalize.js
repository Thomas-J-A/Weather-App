const capitalize = (str) => {
  const firstLetter = str.slice(0, 1);
  return str.replace(firstLetter, firstLetter.toUpperCase());
};

export default capitalize;
