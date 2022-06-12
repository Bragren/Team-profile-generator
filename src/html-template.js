function htmlTeam(team) {
    function createManager(manager) {
        return `<div class="card employee-card column is-3">
        <div class="card-header">
            <h2 class="card-title">${manager.grabName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.grabPosition()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.grabId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.grabEmail()}">${manager.grabEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.grabOffice()}</li>
            </ul>
        </div>
    </div>`;
    }

    function createEngineer(engineer) {
        return `<div class="card employee-card column is-3">
        <div class="card-header">
            <h2 class="card-title">${engineer.grabName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.grabPosition()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.grabId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.grabEmail()}">${engineer.grabEmail()}</a></li>
                <li class="list-group-item">Github: ${engineer.grabGithub()}</li>
            </ul>
        </div>
    </div>`
    }

    function createIntern(intern) {
        return `<div class="card employee-card column is-3">
        <div class="card-header">
            <h2 class="card-title">${intern.grabName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.grabPosition()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.grabId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.grabEmail()}">${intern.grabEmail()}</a></li>
                <li class="list-group-item">School: ${intern.grabSchool()}</li>
            </ul>
        </div>
    </div>`;
    }

    const webPage = [];

    webPage.push(team.filter(employee => employee.grabPosition() === "Manager").map(manager => createManager(manager)));

    webPage.push(team.filter(employee => employee.grabPosition() === "Engineer").map(engineer => createEngineer(engineer)).join(""));

    webPage.push(team.filter(employee => employee.grabPosition() === "Intern").map(intern => createIntern(intern)).join(""));

    return webPage.join("");
}

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
        <title>Team Generator</title>
    </head>
    <body>
    <section class="hero is-danger is medium">
        <div class="hero-body">
            <p class="title">
                Team Generator
            </p>    
        </div>
    </section>
    <div class = "columns">
        ${htmlTeam(team)}
        </div>
    </body>
    </html>`;
};