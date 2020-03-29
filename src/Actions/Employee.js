import { employee } from "../js/actions";
import { fetchUrl } from "../js/fetchUrl";
import { employeeList } from "../js/apiList";

export const addEmployee = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("data", data);
    fetchUrl(
      employeeList.employeeAdd.method,
      employeeList.employeeAdd.url,
      data,
      false,
      false
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.log("e", e);
        reject(e);
      });
  });

export const getEmployee = id => dispatch =>
  new Promise((resolve, reject) => {
    // console.log("TCL: data", id);
    fetchUrl(
      employeeList.employeeListing.method,
      employeeList.employeeListing.url,
      id
    )
      .then(res => {
        console.log("DeadAnimal -> res ->", res);
        dispatch({ type: employee.employeesting, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

// export const getEmployee = data => dispatch =>
//   new Promise((resolve, reject) => {
//     fetchUrl(
//       employeeList.employeeListing.method,
//       employeeList.employeeListing.url,
//       data
//     )
//       .then(res => {
//         dispatch({ type: employee.employeesting, payload: res.docs });
//         resolve(res);
//       })
//       .catch(e => {
//         reject(e);
//       });
//   });

export const getEmployeeFilter = data => dispatch =>
  new Promise((resolve, reject) => {
    fetchUrl(
      employeeList.employeeListingFilter.method,
      employeeList.employeeListingFilter.url,
      data
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getEmployeeDocs = data => dispatch =>
  new Promise((resolve, reject) => {
    fetchUrl(
      employeeList.employeeGetDocs.method,
      `${employeeList.employeeGetDocs.url}/${data}`
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editEmployee = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    fetchUrl(
      employeeList.employeeUpdate.method,
      `${employeeList.employeeUpdate.url}/${id}`,
      data
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const deleteEmployee = data => dispatch =>
  new Promise((resolve, reject) => {
    fetchUrl(
      employeeList.employeeDelete.method,
      employeeList.employeeDelete.url,
      data
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
