const fs = require("fs");
const messages = require('./employees_pb.js');
const employee = new messages.Employee();
employee.setId(1);
employee.setName("Yuyutsu");
employee.setSalary(50000.0);

// console.log("Name:", employee.getName());
// console.log("Id:", employee.getId());
// console.log("Salary:", employee.getSalary());    



const bytes = employee.serializeBinary();
// console.log('serailized bytes: ',bytes)
fs.writeFileSync("employeesbinary", bytes)

const decoded = messages.Employee.deserializeBinary(bytes);
console.log("decoded: ",decoded.toString())
// console.log("Decoded name:", decoded.getName());