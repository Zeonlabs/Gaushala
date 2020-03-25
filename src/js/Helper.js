export const animalCode = formData => {
  console.log("animalCode -> formData", formData);
  const Array = [
    {
      type: 5,
      count: formData.gay
    },
    {
      type: 6,
      count: formData.balad
    },
    {
      type: 1,
      count: formData.vacharda
    },
    {
      type: 2,
      count: formData.vachardi
    },
    {
      type: 10,
      count: formData.anny
    }
  ];
  return Array;
};

const sumArray = (total, num) => {
  return total + num;
};

export const totalOfArray = array => {
  const total = array.reduce(sumArray);
  return total;
};
