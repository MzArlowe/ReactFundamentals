//great example of a for()loop, a filter function, and Array/Obj

const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics', medals: 7},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 8},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 8},
    {name: 'Paul', specialty: 'Entomology', medals: 4},
];

// let instructor_names = []; // Long version to create your function

// for(let i = 0; i < instructors.length; i++) {
//     if(instructors[i].medals >= 5) {
//         instructor_names.push(instructors[i].name);
//     }
// }

// console.log(instructor_names);

//sleek filter() function to use.
const instructorNames = instructors.filter(instructor => instructor.medals >= 5); 
console.log(instructorNames);