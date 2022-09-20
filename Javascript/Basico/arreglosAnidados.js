const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
console.log(myPlants);
console.log("Accede a el elemento pine");
const secondTree = myPlants[1].list[1];
console.log(secondTree);