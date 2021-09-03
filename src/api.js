const url = "https://json-biglifeapp.herokuapp.com";

let parse = require("parse-link-header");
let linkHeader =
  'http://json-biglifeapp.herokuapp.com/activity?_page=1; rel="first",' +
  'http://json-biglifeapp.herokuapp.com/activity?_page=2; rel="next", ' +
  'http://json-biglifeapp.herokuapp.com/activity?_page=213; rel="last",';
var parsed = parse(linkHeader);
console.log(parsed);

//Revisar el funcionamiento de la peticion de la API.
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

/* function getPaginas() {
    
    return fetch(`${url}/activity?_page=1;  rel="first"`)
} */
export default {
  getActivities,
  getActiviti,
};
