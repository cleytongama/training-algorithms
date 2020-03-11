// const animals = {
//     'Lion': () => 'The Lion',
//     'Chicken': () => 'The chicken'
// };

// const getAnimals = (animal) => {

//     return animals[animal] ? animals[animal]() : 'Não existe esse animal';
// }

// console.log(getAnimals('Lion'))

const getAnimals = (animal) => ({
    'Lion': 'Ola sou um lion',
    'Gato': 'Sou um gato'
}[animal] || "Nao existe")

console.log(getAnimals("Lion"))