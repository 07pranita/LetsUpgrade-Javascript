// Employee record management

let employees = [{
    name: "Kiran",
    age: 25,
    city: "Delhi",
    salary: 25000,
}, {
    name: "Pushpa",
    age: 30,
    city: "Mumbai",
    salary: 50000,
}, {
    name: "Maithili",
    age: 27,
    city: "Pune",
    salary: 45000,
}];

function display(emps) {
    let tabledata = "";

    emps.forEach(function(emp, index) {
        let currentrow = `<tr>
        <td>${index+1}</td>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        <td>
        <button onclick='deleteEmp(${index})'>delete</button>
        </td>
        </tr>`;
        tabledata += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
display(employees);

function addEmp(e) {
    e.preventDefault();
    let emp = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    emp.name = name;
    emp.age = Number(age);
    emp.city = city;
    emp.salary = Number(salary);

    employees.push(emp);

    display(employees);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";

}

function searchByName() {
    let searchValue = document.getElementById("searchName").value;

    let newdata = employees.filter(function(emp) {
        return (emp.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);
    });
    display(newdata);
}

function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;

    let newdata = employees.filter(function(emp) {
        return (emp.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);
    });
    display(newdata);
}

function deleteEmp(index) {
    employees.splice(index, 1);
    display(employees);
}
