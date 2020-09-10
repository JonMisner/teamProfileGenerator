// TODO: Write code to define and export the Employee class
const Employee = {
   constructor (name,id,email) {
      this.name = name,
      this.id = id,
      this.email = email
   }
};

Employee.prototype.getId = function () {
   return this.id;
};

Employee.prototype.getName = function() {
   return this.name;
};

Employee.prototype.getEmail = function() {
   return this.email
};

Employee.prototype.getRole = function() {
   return "Employee"
};

module.exports = Employee