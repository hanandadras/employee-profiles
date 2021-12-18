const Intern = require('../lib/Intern.js');
const intern = new Intern ('Bo' , "123456" , 'Bo@up.com', "UC")

test('test if we can get the name from the getName method',() => {
    expect(intern.getName()).toBe('Bo');
});

test('test if we can get the ID from the getID method',() => {
    expect(intern.getID()).toBe('123456');
});

test('test if we can get the Email from the getID method',() => {
    expect(intern.getEmail()).toBe('Bo@up.com');
});

test('test if we can get the school from the getSchool method',() => {
    expect(intern.getSchool()).toBe('UC');
});

test('test if we can get the Role from the getRole method',() => {
    expect(intern.getRole()).toBe('Intern');
});

const { updateLocale } = require('yargs');