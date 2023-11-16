const employee = {
  name: "Joe",
  age: 36,
  occupation: "Web Developer",
};
const employeeList = {
  employees: [
    {
      name: "Joe",
      age: 36,
      occupation: "Web Developer",
    },
    {
      name: "Mike",
      age: 32,
      occupation: "Sr. Software Developer",
    },
    {
      name: "Sencha",
      age: 26,
      occupation: "Sr. Web Developer",
    },
    {
      name: "Brett",
      age: 40,
      occupation: "Project Manager",
    },
  ],
};
function loadEmployeeList() {
  var employeeListTemplate =
    "<ul>" +
    "{{#employees}}" +
    "<li>" +
    "<strong>Name:</strong>{{name}} <br/>" +
    "<strong>Age:</strong>{{age}} <br/>" +
    "<strong>occupation :</strong>" +
    "{{occupation }}" +
    "</li>" +
    "{{/employees}}" +
    "</ul>";
  var output = Mustache.render(employeeListTemplate, employeeList);
  document.getElementById("employeeInfoList").innerHTML = output;
}

function loadEmployeeDetails() {
  const template =
    "<ul><li><strong>Name</strong>{{name}}</br><strong>Age</strong>{{age}}</br><strong>Occupation</strong>{{occupation}}</li></ul>";
  const output = Mustache.render(template, employee);
  document.getElementById("employeeInfo").innerHTML = output;
}
function loadEmployeeDetailsExternal() {
  fetch("employee.txt")
    .then((res) => res.text())
    .then((template) => {
      console.log(template);
      var output = Mustache.render(template, employee);
      document.getElementById("singleExternalTemplateEmployeeInfo").innerHTML =
        output;
    });
}

function loadEmployeeListExternal() {
  fetch("employeelist.txt")
    .then((res) => res.text())
    .then((template) => {
      console.log(template);
      const output = Mustache.render(template, employeeList);
      document.getElementById("ExternalTemplateEmployeeList").innerHTML =
        output;
    });
}
loadEmployeeDetailsExternal();
loadEmployeeDetails();
loadEmployeeList();
loadEmployeeListExternal();
