function loadData() {
    // 1. Get the target results ID DOM
    // 2. Set up URL
    // 3. Fetch data
    // 4. Populate a string the html I want
    // 5. Push it all id to the results ID DOM
    let DOMRes = document.getElementById("bookInventory");
    let url = "http://45.55.136.114/~dlash/CSC3700/booksAPI.php";
    let oStr = "";
    let fRes = fetch(url)
        .then(res =>
            res.json())
                .then(data => {
                    console.log("data="); console.log(data);
                    oStr += "<table id='bookDetails'>";
                    for( let i=0; i<data.length; i++ ){
                        oStr += "<tr> "
                        oStr += `<td> ${data[i].title} </td>`;
                        oStr += "</tr>"
                    }
                    oStr += "</table>";
                    DOMRes.innerHTML = oStr
                }).catch(err => {
                    oStr = "<span style='color:red'> Error Cannot Connect</span>";
                    oStr += err;
                    DOMRes.innerHTML = oStr;
                });
}