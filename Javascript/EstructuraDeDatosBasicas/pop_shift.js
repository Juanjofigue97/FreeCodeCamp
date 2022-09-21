function popShift(arr) {
  let popped = arr.pop(); // Elimina el primero
  let shifted = arr.shift(); // Elimina el ultimo
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));
