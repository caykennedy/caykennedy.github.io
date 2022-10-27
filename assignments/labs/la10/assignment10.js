/*
fetch('./company.json')
.then(response => response.text())
.then(text => humanResources(text))
*/

//json
const json = 
{
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" :
    [
        {
            "firstName" : "Sam",
            "depatment" : "Tech",
            "designation" : "Manager",
            "salary" : "40000",
            "raiseEligible" : "true",
            "wfh" : "true"
        },
        {
            "firstName" : "Mary",
            "depatment" : "Finance",
            "designation" : "Trainee",
            "salary" : "18500",
            "raiseEligible" : "true",
            "wfh" : "false"
        },
        {
            "firstName" : "Bill",
            "depatment" : "HR",
            "designation" : "Executive",
            "salary" : "21200",
            "raiseEligible" : "false",
            "wfh" : "false"
        }
    ]
}

const newEmployee = 
{
    "firstName" : "Anna",
    "depatment" : "Tech",
    "designation" : "Executive",
    "salary" : "25600",
    "raiseEligible" : "false",
    "wfh" : "true"
}


console.log(json);

json["employees"].push(newEmployee);

console.log(json);


//problem 4
let totalSalary = 0;

for (let i = 0; i < json["employees"].length; i++)
{
    totalSalary += Number(json["employees"][i].salary);
}

console.log('The total salary is: ' + totalSalary);

//problem 5
for (let i = 0; i < json["employees"].length; i++)
{
    if (json["employees"][i].raiseEligible === "true")
    {
        json["employees"][i].salary = Number(json["employees"][i].salary) + Number(json["employees"][i].salary)*0.1;
        json["employees"][i].raiseEligible = "false";
    }
}

console.log(json);
