allData = []

function getOptions() {
    const url = "http://45.55.136.114/~dlash/CSC2200/LOTRVII.php"
    fetch(url)
        .then( res => res.json())
        .then( function(data ){
            allData = data;
            let oStr = "";
            for( let i = 0; i<data.length; i++) {
                oStr += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            document.getElementById("options").innerHTML = oStr;
        }).catch(function(get){
        console.log("Error: " + get);
    })
}

function showSelected() {
    let selected = document.getElementById("options").value;
    alert(selected)
}

