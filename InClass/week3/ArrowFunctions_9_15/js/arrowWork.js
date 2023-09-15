
function doArrows() {
    alert("Clicked");
    let x = 12;
    let sq = square(x);
    console.log(`SQ:${square(x)}`);
    const sq2 = n => {
        return n*n;
    }
    const sq3 = (n, n2) => {
        return n*n2;
    }
    const sq4 = (n, n2) => n*n;

    let s2 = sq2(33);
    console.log(`SQ:${s2}`);
}

const sq2 = n => {
    return n*n;
}
function square(n) {
    // return sq2(n);
    return n*n;
}

function doArrows2() {
    // alert("click2");
    setTimeout(() => {
        alert("Stranger things are happening")
    }, 2000);
    alert("This has happened");
    alert("This has happened");
    alert("This has happened");
}
