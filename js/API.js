const url = "http://localhost:3000";

class API {
    static getToys = (success, failure) => {
        setTimeout(() => {
            
            fetch(`${url}/Toy`)
            .then( res => res.json())
            .then(success)
            .catch(failure)
        }, 1000)
        }
    
    static deleteToys = (id, success, failure) => {
        fetch(`${url}/Toy/${id}`, {method: 'DELETE'})
        .then( res => res.json())
        .then(success)
        .catch(failure)
    }
}

// API.getToys(
//     (data) => console.log("data received:", data),
//     (error) => console.error(error)
// )

// API.deleteToys(
//     '5210dfx',
//     (data) => console.log("data received:", data),
//     (error) => console.error(error)
// )