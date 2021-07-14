"use strict";
/*

    Intro:

        Since we already have some of the additional
        information about our users, it's a good idea
        to output it in a nice way.

    Exercise:

        Fix type errors in logPerson function.

        logPerson function should accept both User and Admin
        and should output relevant information according to
        the input: occupation for User and role for Admin.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(person) {
    var additionalInformation;
    if ('role' in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(" - " + person.name + ", " + person.age + ", " + additionalInformation);
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-the-in-operator