// dynamic data types?
// - python, js
// x = 15
// x = "happy"

let items = {
    1: {
        cost: 10.00,
        title: "American Prometheus"
    },
    2: {
        cost: 15.00,
        title: "Educated"
    },
    3: {
        cost: 20.00,
        title: "LOTR"
    }
};
let total = 0;
function addItem( id ) {
    // id = id * 5
    alert(`id=${id}`);
    alert(`id2=${id}`);
    let theItem = items[id];
    console.log("item=");
    console.log(theItem);
    total += theItem.cost;
    let results = document.getElementById("res")
    results.innerHTML = `$${total}`;
    results.style["background-color"] = "yellow"
    results.style["font-size"] = "20px"
}