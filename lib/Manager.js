const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;
    }

    grabSchool() {
        return this.officeNum;
    }

    grabPosition() {
        return 'Manager';
    }
}

module.exports = Manager;