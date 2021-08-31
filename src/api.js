const url = "https://json-biglifeapp.herokuapp.com";

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

export default {
  getActivities,
  getActiviti,
};
