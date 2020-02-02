import { actionName } from "../js/actions";
import { fetchUrl } from "../js/fetchUrl";

const loadData = values => {
  // console.log("this is a data from the action values",values);
  return {
    type: actionName.apisuccess,
    values
  };
};

export const loadDatas = values => dispatch =>
  new Promise((resolve, reject) => {
    fetchUrl("get", `api/link/afterurl`)
      .then(res => {
        dispatch(loadData(res));
        // notification.success({ message: "Sorting added sucessfully !" });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const loadPostData = data => dispatch =>
  new Promise((resolve, reject) => {
    fetchUrl("post", "url", data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
