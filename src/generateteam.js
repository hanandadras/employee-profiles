const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
         <div class ="card-body" 
         <ul> 
         <li>${manager.id}</li>
         <li> ${manager.email}</li>
         <li>${manager.getOfficeNumber()} </li>
         </ul>
         </div>
        </div>
      </div>

        `
    }
    const generateEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
         <div class ="card-body" 
         <ul> 
         <li>${engineer.id}</li>
         <li> ${engineer.email}</li>
         <li>${engineer.getGithub()} </li>

         </ul>
         </div>
        </div>
      </div>

        `
    }
    const generateIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
         <div class ="card-body" 
         <ul> 
         <li>${intern.id}</li>
         <li> ${intern.email}</li>
         <li>${intern.getSchool()} </li>
         </ul>
         </div>
        </div>
      </div>
        `
    }
    const html = []
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager)))
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)))
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern)))
return html.join("")
}




const createHtml = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `
}

module.exports = createHtml;


