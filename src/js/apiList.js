const apiList = {
  income: { method: "POST", url: "income/add" }
};

export const employeeList = {
  employeeListing: { method: "GET", url: "/employee" },
  employeeAdd: { method: "POST", url: "/employee/add" },
  employeeDelete: { method: "DELETE", url: "/employee/delete" },
  employeeListingFilter: { method: "GET", url: "/employee/filter" },
  employeeGetDocs: { method: "GET", url: "/employee/doc" },
  employeeUpdate: { method: "PATCH", url: "/employee/edit" }
};

export const Animal = {
  incomePost: { method: "POST", url: "/animal-income/add" },
  incomeGet: { method: "GET", url: "/animal-income" },
  incomeFilterGet: { method: "GET", url: "/animal-income/filter" },
  incomeUpdate: { method: "PATCH", url: "/animal-income/edit" },
  incomeDelete: { method: "DELETE", url: "/animal-income/delete" },
  deadAnimalPost: { method: "POST", url: "/dead-animal/add" },
  deadAnimalGet: { method: "GET", url: "/dead-animal" },
  deadAnimalUpdate: { method: "PATCH", url: "/dead-animal/edit" },
  deadAnimalDelete: { method: "DELETE", url: "/dead-animal/delete" },
  deadFilterGet: { method: "GET", url: "/dead-animal/filter" },
  givenAnimalPost: { method: "POST", url: "/given-animal/add" },
  givenAnimalGet: { method: "GET", url: "/given-animal" },
  givenAnimalFilterGet: { method: "GET", url: "/given-animal/filter" },
  givenAnimalUpdate: { method: "PATCH", url: "/given-animal/edit" },
  givenAnimalDelete: { method: "DELETE", url: "/given-animal/delete" },
  animalCostPost: { method: "POST", url: "/animal-cost/add" },
  animalCostGet: { method: "GET", url: "/animal-cost" },
  animalCostFilterGet: { method: "GET", url: "/animal-cost/filter" },
  animalCostUpdate: { method: "PATCH", url: "/animal-cost/edit" },
  animalCostDelete: { method: "DELETE", url: "/animal-cost/delete" },
  totalAnimalReport: { method: "GET", url: "/animal-stmt" },
  totalAnimalFilterGet: { method: "GET", url: "/animal-stmt/filter" }
};

// export const addQueryID = (url, id) => `${url}/${id}`;

export default apiList;
