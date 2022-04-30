
export const sum = (list, range) => {
  const listOfMultiples = [];
  list.forEach(el => {
    for (let index = 1; index < range; index++) {
      if (index % el === 0 && !listOfMultiples.includes(index)) {
        listOfMultiples.push(index);
      }
    }
  });
  
  return listOfMultiples.reduce((acc, item) => acc + item, 0);
};


