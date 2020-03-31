import { listing } from "../js/actions";
import { fetchUrl } from "../js/fetchUrl";
// import apiList from "../js/apiList";

export const getCheque = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("get", `/cheque`, id)
      .then(res => {
        dispatch({ type: listing.chequeListing, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const addCheque = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl("post", `/cheque/add`, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editCheque = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("patch", `/cheque/edit/${id}`, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const deleteCheque = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("delete", `/cheque/delete/${id}`)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const filterCheque = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("get", `/cheque/filter`, id)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
