function count(a, b) {
    let current = a;
    let func = setInterval(function () {
        console.log(current);
        if (current === b) {
            clearInterval(func);
        }
        current++;
    }, 1000);
}
count(5, 8)