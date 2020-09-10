// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
   constructor(name,id,email,school) {
   this.school = school;
   super(name,id,email);
   };
};

getRole = function() {
   return "Intern";
};

Intern.prototype.getSchool = function () {
   return this.github;
};

module.exports = Intern;