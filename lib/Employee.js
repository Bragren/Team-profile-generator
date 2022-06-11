class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    grabName() {
        return this.name;
    }

    grabEmail() {
        return this.email;
    }

    grabId() {
        return this.id
    }

    grabPosition() {
        return "Employee";
    }

}

module.exports = Employee;