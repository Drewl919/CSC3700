let name2 = "Jake";
console.log(x); // x is not known globally
function doStuff(name="fred", age=22, mobile=312) {
    name = name.replace("J", "BAAAAAAAAA");
    name = name.toUpperCase();
    let oStr = "";
    for( let i=0; i<name.length; i++) {
        oStr += name[i];
    }
    let i = 1;
    while( i < name.length) {
        i++;
    }
    return(
        `name: ${oStr} ` +
            `Age: ${age} ` +
            "Mobile: " + mobile
    )
}

function doMoreStuff() {
    let scores = [44, 55, 99, 87, 101, 100.2];
    scores[10] = 120;
    scores.push(9999);
    scores.unshift("Blah"); // Adds to the front of array
    for(let i=0; i<scores.length; i++) {
        console.log(`i=${scores[i]}`);
    }
}

function doMoreStuffPart2() {
    let data = {};
    data.name = "Jake";
    data.age = 22;
    data.grade = "Freshman";
    // data.scores = [22, 55.4, 88, 101];
    return data;
}

function doStart() {
    // let res = doStuff("Janet");
    // let res = doMoreStuff("Janet");
    // console.log(`res = ${res}`);

    let res = doMoreStuffPart2("Janet");
    let sum = 0;
    if(res.scores != undefined) {
        for (let i = 0; i < res.scores.length; i++) {
            sum += res.scores[i]
        }
    }
    console.log(`resName = ${res.name}`);
    console.log(`resSum = ${sum}`);
}