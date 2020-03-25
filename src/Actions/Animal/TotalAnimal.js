import { animal } from "../../js/actions";
import { fetchUrl } from "../../js/fetchUrl";
import apiList, { Animal } from "../../js/apiList";

export const getFilterCostAnimal = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl(
      Animal.animalCostFilterGet.method,
      Animal.animalCostFilterGet.url,
      data
    )
      .then(res => {
        // dispatch({ type: listing.incomeListing, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getCostAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(Animal.animalCostGet.method, Animal.animalCostGet.url, id)
      .then(res => {
        dispatch({ type: animal.costAnmimalList, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getTotalAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(Animal.totalAnimalReport.method, Animal.totalAnimalReport.url, id)
      .then(res => {
        dispatch({ type: animal.totalAnmimalList, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const getFilterTotalAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(
      Animal.totalAnimalFilterGet.method,
      Animal.totalAnimalFilterGet.url,
      id
    )
      .then(res => {
        dispatch({ type: animal.totalAnmimalList, payload: res.docs });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const addCostAnimal = data => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", data);
    fetchUrl(Animal.animalCostPost.method, Animal.animalCostPost.url, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editCostAnimal = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(
      Animal.animalCostUpdate.method,
      `${Animal.animalCostUpdate.url}/${id}`,
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

export const deleteCostAnimal = id => dispatch =>
  new Promise((resolve, reject) => {
    console.log("TCL: data", id);
    fetchUrl(
      Animal.animalCostDelete.method,
      `${Animal.animalCostDelete.url}/${id}`
    )
      .then(res => {
        console.log("res-> edit income res ->", res);
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
