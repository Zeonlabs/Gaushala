import { actionName } from "../js/actions";
import { fetchUrl } from "../js/fetchUrl";
import apiList from "../js/apiList";

const loadData = values => {
  // console.log("this is a data from the action values",values);
  return {
    type: actionName.apisuccess,
    values
  };
};

export const loadDatas = () => dispatch =>
  new Promise((resolve, reject) => {
    fetchUrl("get", `api/link/afterurl`)
      .then(res => {
        dispatch(loadData(res));
        // notification.success({ message: "Sorting added sucessfully !" });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

// export const loadPostData = data => dispatch =>
//   new Promise((resolve, reject) => {
//     fetchUrl("post", "url", data)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(e => {
//         reject(e);
//       });
//   });
export const addIncome = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl("post", "/income/add", data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getIncome = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("get", `/income`, id)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const addExpense = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl("post", "/expense/add", data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getExpense = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("get", `/expense`, id)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
