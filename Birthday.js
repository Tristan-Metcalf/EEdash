const csv = require("csv-parser");
const fs = require("fs");

var date = new Date();
date = date.toLocaleDateString();
const today = date.substring(0, date.length - 5);
class Employees {
  getBirthday() {
    this.EmpArr = [];
    fs.createReadStream("data.csv")
      .pipe(csv())
      .on("data", row => {
        let DOB = row.Birthday.split(" ");
        let str = DOB[0].substring(0, DOB[0].length - 5);
        if (today == str && row.Relation == "Self") {
          this.EmpArr.push(row.Employee);
        }
      })
      .on("end", () => {
        this.myEmployees = this.EmpArr;
        console.log(this.myEmployees);
      });
  }
}

var Employee = new Employees();
Employee.getBirthday();
exports.Employees = Employee.myEmployees;
