let allData;

function getOptions() {
    const url = "http://45.55.136.114/~dlash/CSC2200/LOTRVII.php"
    fetch(url)
        .then( res => res.json())
        .then( function(data ){
            allData = data;
            let oStr = "";
            for( let i = 0; i<allData.length; i++) {
                if(allData[i].name === "Boramir") {
                    allData[i].name = "Boromir";
                }
                oStr += `<option value="${allData[i].id}">${allData[i].name}</option>`
            }
            document.getElementById("options").innerHTML = oStr;
        }).catch(function(get){
        console.log("Error: " + get);
    })
}

function showSelected() {
    let selected = document.getElementById("options").value;
    let oStr = "";
    for(let i = 0; i<allData.length; i++) {
        let character = allData[i]
        if(character.id === selected) {
            oStr += "<table><tr>";
            oStr += `<th>id</th><th>Name</th><th>Age</th><th>Race</th><th>Strengths</th><th>Weakness</th><th>Image</th>`;
            oStr += "</tr><tr>";
            oStr += `<td style="padding: 10px">${character["id"]}</td>`;
            oStr += `<td style="padding: 10px">${character["name"]}</td>`;
            oStr += `<td style="padding: 10px">${character["age"]}</td>`;
            oStr += `<td style="padding: 10px">${character["race"]}</td>`;
            oStr += "<td style=\"padding: 10px\"><ol type=1>";
            character["strengths"].forEach((item) => {
                oStr += `<li>${item}</li>`;
            })
            oStr += "</ol></td><td style=\"padding: 10px\"><ol type=1>";
            character["weakness"].forEach((item) => {
                oStr += `<li>${item}</li>`;
            })
            oStr += "</od></td>";
            oStr += `<td><img src="${character["img"].substring(0, character["img"].length-3)}png"></td>`;
        }
    }
    document.getElementById("results").innerHTML = oStr;
}

