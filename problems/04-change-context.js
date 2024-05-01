function changeContext(func, obj) {
    // should return the result of the function func invoked
    // with the object obj as its context
    return func.call(obj);
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen



// more straighforward -- instance method inside class,
// changeContext func (call) not needed

// class Person {
  //     constructor(name) {
//       this.name = name;
//     }

//     // instance method
//     extractName() {
//     return this.name;
// }
// }
// console.log(kristen.extractName());



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
