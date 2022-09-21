function htmlColorNames(arr) {
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond'); // splice(index,# de elementos,elementos a añadir)
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));