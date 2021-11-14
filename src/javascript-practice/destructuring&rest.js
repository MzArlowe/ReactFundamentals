const array = ['thing', 42, false, {key: 'value'}, [1, 2, 3, 4, undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length - 1];

// console.log(stringVar, numVar, objVar, nanVar);

let [string, num, , obj, , nan] = array;
console.log(string, num, obj, nan);

const testObj = {
    testString: 'stringy thingy',
    testNum: 2, 
    testBool: true,
    testObject: {key: 'waluigi'},
    testArray: [1, 2, 3, 4, undefined],
    testNan: NaN
}

let {testString, testNum, testObject, testNan} = testObj; //this destructuring allows us to grab values and assign variables without having to write out all that extra code. 
console.log(testString, testNum, testObject, testNan);

let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj}; //this allows us to insert new properties and place said properties into a new object without difficulties.
console.log(newObj);