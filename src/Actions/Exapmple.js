import { actionName, listing } from "../js/actions";
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
  
  export const getExpense = id => dispatch =>
    new Promise((resolve, reject) => {
      console.log("TCL: data", id);
      fetchUrl("get", `/expense`, id)
        .then(res => {
          dispatch({ type: listing.expenseListing, payload: res.docs });
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
        dispatch({ type: listing.incomeListing, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getFilterIncome = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl("get", `/income/filter`, data)
      .then(res => {
        dispatch({ type: listing.incomeListing, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getFilterExpense = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl("get", `/expense/filter`, data)
      .then(res => {
        // dispatch({ type: listing.incomeListing, payload: res.docs });
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


export const editExpense = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("patch", `/expense/edit/${id}`, data)
      .then(res => {
        console.log("res-> edit expense res ->", res);

        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editIncome = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("patch", `/income/edit/${id}`, data)
      .then(res => {
        console.log("res-> edit income res ->", res);
        // getIncome()
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const deleteIncome = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("delete", `/income/delete/${id}`)
      .then(res => {
        console.log("res-> edit income res ->", res);
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const deleteExpense = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("delete", `/expense/delete/${id}`)
      .then(res => {
        console.log("res-> edit income res ->", res);
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
