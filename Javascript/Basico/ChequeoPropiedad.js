function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea
    let value;
    value = obj.hasOwnProperty(checkProp);
    if(value){
        return obj[checkProp]
    }
    return "Not Found"
    // Cambia solo el código encima de esta línea
}
let myMusic = {
    "discos" :'Roll',
    "marcas" : '2',
    "pasantias": '3'
}


console.log(checkObj(myMusic,"discos"));
console.log(checkObj(myMusic,"platos"));


