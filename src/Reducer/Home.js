
import { actionName } from '../js/actions'

const Test = (
  state = {
    apicall: false,
    apistatus: false,
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

    default:
      return state;
  }
};

export default Test;
