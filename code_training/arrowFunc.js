//const vowels = 'aeiou'.split('')

//const bigVowels = vowels.map((letter) => console.log(letter.toUpperCase())

// setTimeout(_=>{console.log('starting the test') test.start()}, 2000)

// const arrObject = [{id: 1, nome: 'Cleyton'},{id:2 , nome: 'Sam'}]

// const newObject = arrObject.filter((item)=> item.id !== 1)

// console.log(arrObject.splice(1,1))
// console.log(arrObject)

// function IceCream() {
//     this.scoops = 0;
//   }
  
//   // adds scoop to ice cream
//   IceCream.prototype.addScoop = function() {
//     const cone = this; // sets `this` to the `cone` variable
//     setTimeout(function() {
//       cone.scoops++; // references the `cone` variable
//       console.log('scoop added!');
//     }, 0.5);
//   };
  
//   const dessert = new IceCream();
//   dessert.addScoop();

//   console.log(dessert.scoops)

function IceCream() {
    this.scoops = 0;
  }
  
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
      const obj  = this;
      console.log(this)
      setTimeout(function() {
        obj.scoops++;
      console.log('scoop added!');
    //   console.log(obj.scoops)
    }, 500);
  };
  
  const dessert = new IceCream();
  dessert.addScoop();

//   console.log(dessert.scoops, 'l')

// constructor
// function IceCream() {
//     this.scoops = 0;
// }

// // adds scoop to ice cream
// IceCream.prototype.addScoop = function() { // addScoop is now an arrow function
//   setTimeout(() => {
//     this.scoops++;
//     console.log('scoop added!');
//     console.log(this.scoops)
//   }, 0.5);
// };

// const dessert = new IceCream();
// dessert.addScoop();