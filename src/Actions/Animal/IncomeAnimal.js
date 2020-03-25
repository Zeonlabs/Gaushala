import { animal } from "../../js/actions";
import { fetchUrl } from "../../js/fetchUrl";
import apiList, { Animal } from "../../js/apiList";

export const getFilterIncomeAnimal = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl(Animal.incomeGet.method, Animal.incomeFilterGet.url, data)
      .then(res => {
        // dispatch({ type: listing.incomeListing, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getIncomeAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(Animal.incomeGet.method, Animal.incomeGet.url, id)
      .then(res => {
        dispatch({ type: animal.incomeAnimalsting, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const addIncomeAnimal = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl(Animal.incomePost.method, Animal.incomePost.url, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editIncomeAnimal = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(
      Animal.incomeUpdate.method,
      `${Animal.incomeUpdate.url}/${id}`,
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

export const deleteIncomeAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(Animal.incomeDelete.method, `${Animal.incomeDelete.url}/${id}`)
      .then(res => {
        console.log("res-> edit income res ->", res);
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
