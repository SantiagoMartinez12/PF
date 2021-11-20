import axios from "axios"

export function myFunction() {
    return function (dispatch) {
        axios.get("http://localhost:3001/ ruta del back")
        .then((response) => {
            dispatch({ type: "my action", payload: response.data });
        })
        .catch((err) => {
            console.log(err)
        })
    };
};