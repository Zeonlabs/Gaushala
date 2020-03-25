import { actionName, listing } from "../js/actions";

const Test = (
  state = {
    apicall: false,
    apistatus: false,
    incomeList: [] || null,
    expenseList: [] || null
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

    default:
      return state;
  }
};

export default Test;
