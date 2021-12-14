const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer ('Li' , "12345" , 'Li@up.com', "Li@github")

test('test if we can get the name from the getName method',() => {
    expect(engineer.getName()).toBe('Li');
});

test('test if we can get the ID from the getID method',() => {
    expect(engineer.getID()).toBe('12345');
});

test('test if we can get the Email from the getID method',() => {
    expect(engineer.getEmail()).toBe('Li@up.com');
});

test('test if we can get the Role from the getRole method',() => {
    expect(engineer.getRole()).toBe('Engineer');
});

const { updateLocale } = require('yargs');