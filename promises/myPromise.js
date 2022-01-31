//* =============Promise===================>
const myPromise = new Promise((resolve, reject) => {
    // fetch some date
})
.then(data => {
    // parse the data
}).then(() => {
    // do something else
})
.catch(err => console.error(err));


//* =============Fetch===================>
// fetch returns a Promise object

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()) // we get back a response object, we parse it into json
    .then(jsonData => console.log(jsonData))
    .catch(err => console.error(err))

//* =============async await===================>
const fetchToDos = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const toDos = await res.json()
    console.log(toDos);
}
fetchToDos()

