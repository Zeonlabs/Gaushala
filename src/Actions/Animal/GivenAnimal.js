import { animal } from "../../js/actions";
import { fetchUrl } from "../../js/fetchUrl";
import apiList, { Animal } from "../../js/apiList";

export const getFilterGivenAnimal = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl(
      Animal.givenAnimalFilterGet.method,
      Animal.givenAnimalFilterGet.url,
      data
    )
      .then(res => {
        dispatch({ type: animal.givenAnmimalList, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getGivenAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(Animal.givenAnimalGet.method, Animal.givenAnimalGet.url, id)
      .then(res => {
        dispatch({ type: animal.givenAnmimalList, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const addGivenAnimal = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl(Animal.givenAnimalPost.method, Animal.givenAnimalPost.url, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editGivenAnimal = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(
      Animal.givenAnimalUpdate.method,
      `${Animal.givenAnimalUpdate.url}/${id}`,
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

export const deleteGivenAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(
      Animal.givenAnimalDelete.method,
      `${Animal.givenAnimalDelete.url}/${id}`
    )
      .then(res => {
        console.log("res-> edit income res ->", res);
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
