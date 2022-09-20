// Configuración
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

console.log("Acceder a elemento con espacios")

// Distintas formas de Acceder a un elemento
const entreeValue = testObj["an entree"];
const word = 'the drink';
const drinkValue = testObj[word];   

console.log(entreeValue);
console.log(drinkValue);
