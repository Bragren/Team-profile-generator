const Intern = require("../lib/Intern");

test('creates Intern object' , () => {
    const intern = new Intern();
    
    expect(typeof(intern)).toBe('object')
});

test('gets the school of the intern' , () => {
    const school = 'Johns-High';
    const intern = new Intern('bob', 1, 'bobthompson@gmail.com', school);

    expect(intern.school).toBe(school);
});

test('shows what role they have' , () => {
    const position = 'Intern';
    const intern = new Intern('bob', 1, 'bobthompson@gmail.com', position);

    expect(intern.grabPosition()).toBe(position);
})