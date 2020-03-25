import { animal } from "../../js/actions";
import { fetchUrl } from "../../js/fetchUrl";
import apiList, { Animal } from "../../js/apiList";

export const getFilterDeadAnimal = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl(Animal.deadFilterGet.method, Animal.deadFilterGet.url, data)
      .then(res => {
        dispatch({ type: animal.deadAnmimalList, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const addDeadAnimal = data => dispatch =>
  new Promise((resolve, reject) => {
    // console.log("TCL: data", data);
    fetchUrl(Animal.deadAnimalPost.method, Animal.deadAnimalPost.url, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editDeadAnimal = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    // console.log("TCL: data", id);
    fetchUrl(
      Animal.deadAnimalUpdate.method,
      `${Animal.deadAnimalUpdate.url}/${id}`,
      data
    )
      .then(res => {
        console.log("res-> edit expense res ->", res);

        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const deleteDeadAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(
      Animal.deadAnimalDelete.method,
      `${Animal.deadAnimalDelete.url}/${id}`
    )
      .then(res => {
        console.log("res-> edit income res ->", res);
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getDeadAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    // console.log("TCL: data", id);
    fetchUrl(Animal.deadAnimalGet.method, Animal.deadAnimalGet.url, id)
      .then(res => {
        console.log("DeadAnimal -> res ->", res);
        dispatch({ type: animal.deadAnmimalList, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
