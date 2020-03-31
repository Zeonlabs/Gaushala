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

export const sumObjValuses = obj => Object.values(obj).reduce((a, b) => a + b);

export const totalOfArray = array => {
  const total = array.reduce(sumArray);
  return total;
};

export const convertNumberToType = (id, type) => {
  if (type === "income") {
    switch (id) {
      case 1:
        return "ivarDI Gauna maMDLa naI Aavak";
      case 2:
        return "saurta Gauna maMDLa naI Aavak";
      case 3:
        return "Kaatar naI Aavak";
      case 4:
        return "paSau naI Aavak";
      case 5:
        return "dataaEaI naI Aavak";
      case 6:
        return "Anya Aavak";
      default:
        break;
    }
  }
  if (type === "expense") {
    switch (id) {
      case 1:
        return "KaaNa naI Javak";
      case 2:
        return "majurI Kaca-";
      case 3:
        return "Gauna Kaca-";
      case 4:
        return "baaMGakama Kaca-";
      case 5:
        return "naIrNa Kaca-";
      case 6:
        return "Dao. e dvaa Kaca-";
      case 7:
        return "vaahna Kaca-";
      case 8:
        return "vaaDI Kaca-";
      case 9:
        return "pa`saMga Kaca-";
      case 10:
        return "Anya Kaca-";
      default:
        break;
    }
  }
};

export const convertTypeToNumber = (id, type) => {
  if (type === "income") {
    switch (id) {
      case "ivarDI Gauna maMDLa naI Aavak":
        return 1;
      case "saurta Gauna maMDLa naI Aavak":
        return 2;
      case "Kaatar naI Aavak":
        return 3;
      case "paSau naI Aavak":
        return 4;
      case "dataaEaI naI Aavak":
        return 5;
      case "Anya Aavak":
        return 6;
      default:
        break;
    }
  }
  if (type === "expense") {
    switch (id) {
      case "KaaNa naI Javak":
        return 1;
      case "majurI Kaca-":
        return 2;
      case "Gauna Kaca-":
        return 3;
      case "baaMGakama Kaca-":
        return 4;
      case "naIrNa Kaca-":
        return 5;
      case "Dao. e dvaa Kaca-":
        return 6;
      case "vaahna Kaca-":
        return 7;
      case "vaaDI Kaca-":
        return 8;
      case "pa`saMga Kaca-":
        return 9;
      case "Anya Kaca-":
        return 10;
      default:
        break;
    }
  }
};
