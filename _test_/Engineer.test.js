const Engineer = require("../lib/Engineer");

test('creates Engineer object' , () => {
    const engineer = new Engineer();
    
    expect(typeof(engineer)).toBe('object')
});

test('gets the github of engineer' , () => {
    const github = 'bob-thompson';
    const engineer = new Engineer('bob', 1, 'bobthompson@gmail.com', github);

    expect(engineer.github).toBe(github);
});

test('shows what role they have' , () => {
    const position = 'Engineer';
    const engineer = new Engineer('bob', 1, 'bobthompson@gmail.com', position);

    expect(engineer.grabPosition()).toBe(position);
})