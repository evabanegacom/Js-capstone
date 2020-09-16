import score from '../src/index.js'

// const inputname = document.querySelector('#name')

const pushData = async (score, name) => {
    await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cCm80CLUyO7HIMn3WlTB/scores/", {
        method: "POST",
        body: JSON.stringify({
        "user": name,
        "score": score
      }),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        credentials: "same-origin"
      }).then(function(response) {
        response.status
        response.statusText
        console.log(response)

        response.headers
        response.url
      
        return 'leader board score created'
      }).catch(function(error) {
        error.message
      })
      
}

const getData = async () => {
    await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cCm80CLUyO7HIMn3WlTB/scores/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        credentials: "same-origin"
      }).then(function(response) {
        response.json().then(data =>console.log(data))
        //return 'leader board score created'
      }).catch(function(error) {
        error.message
      })
      
}

// const pushData = async () => {
//     const body = JSON.stringify({ name: "precious" });
//     const data = {
//     method: 'POST',
//     headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     },
//     body,
//     };
//     const url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cCm80CLUyO7HIMn3WlTB/scores/"
//     const response = await fetch(url, data);
//     const result = await response.json();
//     return result;
//     }; 

// const getData = async () => {
//     const data = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cCm80CLUyO7HIMn3WlTB/scores", {
//         method: "GET",
//         body: JSON.stringify({
//         "name": "platform game",
//         "player": inputname.value,
//         "score": score
//       }),
//         headers: {
//           "Content-Type": "application/json; charset=utf-8"
//         },
//         credentials: "same-origin"
//       }).then(function(response) {
//         response.status
//         response.statusText
//         response.headers
//         response.url
      
//         return response.text()
//       }).catch(function(error) {
//         error.message
//       })
      
// }

export default getData
  