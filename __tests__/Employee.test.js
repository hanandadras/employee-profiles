const Employee = require('../lib/Employee.js');
const employee = new Employee ('Sarah' , "1234" , 'sarah@up.com')

test('test if we can get the name from the getName method',() => {
    expect(employee.getName()).toBe('Sarah');
});

test('test if we can get the ID from the getID method',() => {
    expect(employee.getID()).toBe('1234');
});

test('test if we can get the Email from the getID method',() => {
    expect(employee.getEmail()).toBe('sarah@up.com');
});

test('test if we can get the Role from the getRole method',() => {
    expect(employee.getRole()).toBe('Employee');
});

const { updateLocale } = require('yargs');