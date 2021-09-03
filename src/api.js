const url = "https://json-biglifeapp.herokuapp.com";

function getActivities() {
  return fetch(`${url}/activity?_page=1&_limit=9`)
    .then((res) => res.json())
    .then((data) => (this.activities = data));
}

function getActiviti(actividad) {
  return fetch(`${url}/activity/${actividad}`)
    .then((res) => res.json())
    .then((data) => (this.activities = data));
}

function getPaginas() {
  let parse = require("parse-link-header");
  let linkHeader =
    `${url}activity?_page=1; rel="first"` +
    `${url}activity?_page=2; rel="next"` +
    `${url}activity?_page=213; rel="last"`;
  let parsed = parse(linkHeader);
  return parsed;
}
export default {
  getActivities,
  getActiviti,
  getPaginas,
};
