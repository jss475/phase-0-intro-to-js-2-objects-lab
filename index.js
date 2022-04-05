// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "Court"
}

function updateEmployeeWithKeyAndValue(obj,key,val){
    return {...obj,
    [key]: val};
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,val){
    obj[key] = val
    return obj
}

function deleteFromEmployeeByKey(obj,key){
    let newObj = {...obj};
    delete newObj[key];
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj
}