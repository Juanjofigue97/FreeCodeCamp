// Configuración
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

  // Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
      // Crea una propiedad que no existe
    if (prop != 'tracks'){
                records[id][prop]= value ;
        }else{
        if (!(records[id].hasOwnProperty(prop))){
            records[id][prop]= [value];
        }else{
            if(value == ""){
                delete records[id][prop];
            }else{
        records[id][prop].push(value);
        }
        }
    }
    if (records[id][prop] == ""){
        delete records[id][prop];
    }
    return records;
}
console.log(recordCollection);
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(recordCollection);
