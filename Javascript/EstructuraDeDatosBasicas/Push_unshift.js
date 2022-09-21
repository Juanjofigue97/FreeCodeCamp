function mixedNumbers(arr) {
    arr.unshift('I',2,'three'); // Agrega al principio 
    arr.push(7,'VIII',9); // Agrega al final
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));