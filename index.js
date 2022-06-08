// Write your solution in this file!
let employee = {name: "", streetAdress: "7031 Bryce Canyon"};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;    
}

function deleteFromEmployeeByKey(employee, key){
    const newObject = Object.assign({},employee);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employees,key){
    delete employee[key];
    return employee;
}