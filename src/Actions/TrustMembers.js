// import { actionName } from "../js/actions";
import { fetchUrl } from "../js/fetchUrl";
// import apiList from "../js/apiList";

export const getMembers = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("get", `/trust-member`, id)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const addMembers = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl("post", `/trust-member/add`, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editMembers = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("patch", `/trust-member/update/${id}`, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const deleteMembers = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("delete", `/trust-member/delete/${id}`)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const filterMembers = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("get", `/trust-member/filter`, id)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
