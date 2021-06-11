import axios from "axios"

export const getItem = () => {

    axios.get('/localhost:3001/getanime')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    });
}