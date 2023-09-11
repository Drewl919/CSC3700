let name2 = "Jake";
console.log(x); // x is not known globally
function doStuff(name, age, mobile) {
    // let name = "Dave";
    // name = 'Fred';
    // name = 3.142;
    // name = 3;
    // alert(`name:${name}`);
    // console.log(`name:${name}`);
    // console.log(`name:${name2}`);
    const x = 12;
    // x = 22; // cannot change a constant
    let userAge = "12apples";
    userAge = userAge/100.2;
    // if(userAge == undefined) {
    //     alert("Got no age");
    // } else if (userAge == null) {
    //     alert("Got null age");
    // } else if ( isNaN(userAge) ) {
    //     alert("Got not a number");
    // } else {
    //     alert(userAge)
    // }
    return(
        `name : ${name}` +
            `Age: ${userAge}` +
            "Mobile: Do not known"
    )
}

function doStart() {
    let res = doStuff();
    console.log(`res = ${res}`);
}