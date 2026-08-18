const fs = require('fs');

const employees = []
employees.push({
    'name':"yuyutsu",
    "salary":1000,
    'id':1001
})



fs.writeFileSync("jsondata.json",JSON.stringify(employees))
console.log(JSON.stringify(employees))
