const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
];

let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names);