import { actionName, listing, animal } from "../js/actions";

const Test = (
  state = {
    apicall: false,
    apistatus: false,
    incomeList: [] || null,
    expenseList: [] || null,
    trustMembers: [] || null,
    chequeList: [] || null,
    noteList: [] || null,
    totalAnimalCount: 0 || null
  },
  Action
) => {
  switch (Action.type) {
    case actionName.apisuccess:
      return {
        ...state,
        apicall: false,
        apistatus: false
      };

    case listing.incomeListing:
      return {
        ...state,
        incomeList: Action.payload
      };

    case listing.expenseListing:
      return {
        ...state,
        expenseList: Action.payload
      };
    case listing.trustMembersListing:
      return {
        ...state,
        trustMembers: Action.payload
      };
    case listing.chequeListing:
      return {
        ...state,
        chequeList: Action.payload
      };
    case listing.noteListing:
      return {
        ...state,
        noteList: Action.payload
      };
    case animal.totalAnimalCount:
      return {
        ...state,
        totalAnimalCount: Action.payload
      };

    default:
      return state;
  }
};

export default Test;
