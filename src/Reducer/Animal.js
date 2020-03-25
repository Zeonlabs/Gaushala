import { animal, employee } from "../js/actions";

const animals = (
  state = {
    incomeAnimalList: [] || null,
    deadAnimalList: [] || null,
    getAnimalList: [] || null,
    costAnimalList: [] || null,
    totalAnimalList: [] || null,
    employeeListing: [] || null
  },
  action
) => {
  switch (action.type) {
    case animal.incomeAnimalsting:
      return {
        ...state,
        incomeAnimalList: action.payload
      };
    case animal.deadAnmimalList:
      return {
        ...state,
        deadAnimalList: action.payload
      };
    case animal.givenAnmimalList:
      return {
        ...state,
        getAnimalList: action.payload
      };
    case animal.costAnmimalList:
      return {
        ...state,
        costAnimalList: action.payload
      };
    case animal.totalAnmimalList:
      return {
        ...state,
        totalAnimalList: action.payload
      };
    case employee.employeesting:
      return {
        ...state,
        employeeListing: action.payload
      };
    default:
      return state;
  }
};

export default animals;
