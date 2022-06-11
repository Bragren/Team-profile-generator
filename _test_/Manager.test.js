const Manager = require("../lib/Manager");

test('creates manager object' , () => {
    const manager = new Manager();
    
    expect(typeof(manager)).toBe('object')
});

test('gets the office number of the manager' , () => {
    const officeNum = '1';
    const manager = new Manager('bob', 1, 'bobthompson@gmail.com', officeNum);

    expect(manager.officeNum).toBe(officeNum);
});

test('shows what role they have' , () => {
    const position = 'Manager';
    const manager = new Manager('bob', 1, 'bobthompson@gmail.com', position);

    expect(manager.grabPosition()).toBe(position);
})