// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
   constructor(name,id,email,officeNumber) {
   this.officeNumber = officeNumber;
   super(name,id,email);
   };
};

getRole = function() {
   return "Manager";
};

Intern.prototype.getOfficeNumber = function () {
   return this.officeNumber;
};

module.exports = Manager;