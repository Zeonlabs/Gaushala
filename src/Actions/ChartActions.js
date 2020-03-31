import { fetchUrl } from "../js/fetchUrl";
import { animal } from "../js/actions";
import { sumObjValuses } from "../js/Helper";

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
        const total = res.stats.animal;
        delete total.big;
        delete total.small;
        const total_count = sumObjValuses(total);
        const resObj = {
          ...res.stats,
          animal_total: total_count
        };
        console.log("total_count", total_count);
        dispatch({ type: animal.totalAnimalCount, payload: resObj });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
