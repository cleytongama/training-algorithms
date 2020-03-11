const CHARACTER_LIMIT = 255;
const posts = [
    "#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
    "Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
    "I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].slice(0, CHARACTER_LIMIT));
    }
}

// displayPosts();

const student = {
    name: 'Cleyton',
    lastname: 'Gama'
}

// let allName = student.name + ' ' + student.lastname
let allName = `${student.name} ${student.lastname}`

// console.log(allName);

const point = [10, 25, -34]

const [x, y, z] = point;


// console.log(y, z);

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
//   console.log(digit);
}



/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

for(let day of days){
    // console.log(day.charAt(0))
    // console.log(day.substr(2))
    // day =  day.charAt(0).toUpperCase() + day.substr(1)
    // console.log()
    // console.log(day.substr(1))
    const lastLetter =  day.substr(-1).toUpperCase()
    // Quebrando array
    day = day.split('')
    let value = day[0];
    
    for(let d  = 0; d < day.length - 2; d++){
        value = value.concat(day[d+1])
    }
    
    value =  value + lastLetter
    // console.log(value)
    
    
    
    // console.log(day[day.length-1])
    // console.log(.lastIndexOf(day.length))
}

// Reduce e Map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const totalNumber = numbers.map((value,key) =>{ return value*2 })

// const totalNumber = numbers.reduce((acumulador,value) => (acumulador + value))

// console.log(totalNumber)