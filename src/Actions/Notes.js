// import { actionName } from "../js/actions";
import { fetchUrl } from "../js/fetchUrl";
// import apiList from "../js/apiList";

export const getNotes = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("get", `/note`, id)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const addNotes = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl("post", `/note/add`, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editNotes = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("patch", `/note/update/${id}`, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const deleteNotes = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl("delete", `/note/delete/${id}`)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

// export const filterNotes = id => dispatch =>
//   new Promise((resolve, reject) => {
//     console.log("TCL: data", id);
//     fetchUrl("get", `/expense`, id)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(e => {
//         reject(e);
//       });
//   });
