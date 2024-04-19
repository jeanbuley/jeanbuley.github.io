/*Problem 1*/
employee_data = {
    'employees' : [
        {
            'name' : 'sam',
            'department' : 'tech',
            'designation' : 'manager',
            'salary' : 40000,
            'raise_eligible' : true
        },
        {
            'name' : 'mary',
            'department' : 'finance',
            'designation' : 'trainee',
            'salary' : 18500,
            'raise_eligible' : true  
        },
        {
            'name' : 'bill',
            'department' : 'hr',
            'designation' : 'executive',
            'salary' : 21200,
            'raise_eligible' : false
        }
    ]
}
console.log("problem 1");
console.log(employee_data);

/*Problem 2*/
const company_data = {
    'company' : [
        {
            'company_name' : 'TechStars',
            'website' : 'www.techstars.site',
            'employees_list' : employee_data,
        }
    ]
}
console.log("problem 2");
console.log(company_data);

/*Problem 3*/

employee_data.employees.push(
    {
        'name' : 'anna',
        'department' : 'tech',
        'designation' : 'executive',
        'salary' : 25600,
        'raise_eligible' : false
    }
)
console.log("problem 3");
console.log(employee_data);

/*Problem 4*/
total_salary = (
    employee_data['employees'][0]['salary']
    + employee_data['employees'][1]['salary']
    + employee_data['employees'][2]['salary']
    + employee_data['employees'][3]['salary']
)
console.log("problem 4");
console.log("total salary: $" + total_salary)

/*Problem 5*/
var i = 0;
while(i<4){
    raise = employee_data['employees'][i]['raise_eligible'];
    salary = employee_data['employees'][i]['salary'];
    if (raise == true){
        employee_data['employees'][i]['raise_eligible'] = false;
        employee_data['employees'][i]['salary'] = salary + (salary*0.1);
    }
    i++;
}
console.log("problem 5");
console.log(employee_data);

/*Problem 6*/
var i = 0;
while(i<4){
    if (employee_data['employees'][i]['name'] =='sam' || employee_data['employees'][i]['name'] =='anna'){
        let addition = {
            'name' : employee_data['employees'][i]['name'],
            'department' : employee_data['employees'][i]['department'],
            'designation' : employee_data['employees'][i]['designation'],
            'salary' : employee_data['employees'][i]['salary'],
            'raise_eligible' : employee_data['employees'][i]['raise_eligible'],
            'wfh' : true
        }
        employee_data.employees.splice(i,1,addition);
    } else {
        let addition = {
            'name' : employee_data['employees'][i]['name'],
            'department' : employee_data['employees'][i]['department'],
            'designation' : employee_data['employees'][i]['designation'],
            'salary' : employee_data['employees'][i]['salary'],
            'raise_eligible' : employee_data['employees'][i]['raise_eligible'],
            'wfh' : false
        }
        employee_data.employees.splice(i,1,addition);
    }
    i++;
}
console.log("problem 6");
console.log(employee_data);