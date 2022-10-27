fetch('./company.json')
.then(response => response.text())
.then(text => humanResources(text))

console.log;

function humanResources(inString)
{
    const hr = JSON.parse(inString);
    //problem 4
    let totalSalary = 0;

    for (let i = 0; i < hr[0].employees.length; i++)
    {
        totalSalary += stoi(hr[0].employees[i].salary);
    }

    //problem 5
    for (let i = 0; i < hr[0].employees.length; i++)
    {
        if (hr[0].employees[i].raiseEligible === "true")
        {
            hr[0].employees[i].salary += employees[i].salary*0.1;
            hr[0].employees[i].raiseEligible = "false";
        }
    }
}
