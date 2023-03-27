const BASE_URL = "http://localhost:3000"
const dogsUrl = "http://localhost:3000/dogs"
const catsUrl = "http://localhost:3000/cats"
const usersUrl = "http://localhost:3000/users"
const robotsUrl = "http://localhost:3000/robots"


const formData ={
    name: "Steve",
    email: "steve@steve.com",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData)
};

fetch(usersUrl, configurationObject)
    .then(function(res) {
        return res.json();
    })
    .then(function (object) {
        console.log(object.id);
        const h1 = document.querySelector('#h1');
        h1.innerHTML = (object.id);
    })
    .catch(function (error) {
        console.log(error.message);
        const h1 = document.querySelector("#h1");
        h1.innerHTML = (error.message);
    });