const Employee = require('../lib/Employee.js');

test("creates employee object" , () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
});

test('saves name of employee' , () => {
    const name = 'bob';
    const employee = new Employee(name);

    expect(employee.name).toBe('bob');
})

test('assigns id to employee' , () => {
    const id = '1';
    const employee = new Employee('bob', id);

    expect(employee.id).toBe(id);
})

test('save employees email' , () => {
    const email = 'bobthompson@gmail.com';
    const employee = new Employee('bob', 1, email)

    expect(employee.email).toBe(email)
})