function oddishOrEvenish(number) {
    let check = 0;
    for (let i = 0; i < number.toString().length; i++) {
        check += parseInt(number.toString().charAt(i));
    }
    return check % 2 ? "Odd" : "Even";
}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
