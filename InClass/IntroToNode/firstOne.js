const names = [
    "joe", "jack", 'jan', 'james'
];

const getItem = (n1, n2) => {
    if(n1 == "jan") {
        return n1;
    }
    return undefined;
}

if(getItem("Jack") == undefined) {
    console.log("Dont know Jack");
}
if(getItem(names[2])) {
    console.log("I know " +names[2]);
}

for(let i=0; i<names.length; i++) {
    console.log(`n:${names[i]}`);
}