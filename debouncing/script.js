let searchInput = document.getElementById('search');;
let resultsDiv = document.getElementById('results');

let printResults = () => {
    console.log(searchInput.value);
    resultsDiv.innerText = searchInput.value;
}

let debounce = (fn, d) => {
    let t;
    return function () {
        clearTimeout(t);
        t = setTimeout(()=>{
            fn();
        },d)
    }
}

searchInput.addEventListener('keyup', debounce(printResults, 600));