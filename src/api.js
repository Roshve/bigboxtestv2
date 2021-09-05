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

function getPaginas(page) {
  return fetch(`${url}/activity?_page=${page}&_limit=9`)
    .then((res) => res.json())
    .then((data) => (this.activities = data));
}

function getCount() {
  return fetch(`${url}/activity?_page=1&_limit=9`)
    .then((response) => response.headers.get("X-Total-Count"))
    .then((header) => (this.count = header));
}
function getLink() {
  return fetch(`${url}/activity?_page=1&_limit=9`)
    .then((response) => response.headers.get("Link"))
    .then((header) => (this.link = header));
}

export default {
  getActivities,
  getActiviti,
  getPaginas,
  getCount,
  getLink,
};
