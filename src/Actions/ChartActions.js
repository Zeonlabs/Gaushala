import { fetchUrl } from "../js/fetchUrl";

export const getLinearChart = () => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data");
    fetchUrl("get", `/inex/analytics`)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getAnimalChart = () => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data");
    fetchUrl("get", `/me`)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
