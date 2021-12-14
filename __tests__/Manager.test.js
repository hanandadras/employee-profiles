const Manager = require('../lib/Manager.js');
const manager = new Manager ('Chu' , "1234567" , 'Chu@up.com', "Chu@github")

test('test if we can get the name from the getName method',() => {
    expect(manager.getName()).toBe('Chu');
});

test('test if we can get the ID from the getID method',() => {
    expect(manager.getID()).toBe('1234567');
});

test('test if we can get the Email from the getID method',() => {
    expect(manager.getEmail()).toBe('Chu@up.com');
});

test('test if we can get the Role from the getRole method',() => {
    expect(manager.getRole()).toBe('Manager');
});

const { updateLocale } = require('yargs');