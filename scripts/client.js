$(document).ready (onReady);

function onReady() {
    console.log ('in onReady');
    $(`#submitButton`).on (`click`, getData);
} //end onReady

let employees = [];

function getData (){
    console.log('in getData');
    //get user input & save in object
    let newEntry ={
        firstName : $(`#FirstName`).val(),
        lastName : $(`#LastName`).val(),
        IDNumber : $(`#IDNumber`).val(),
        JobTitle : $(`#JobTitle`).val(),
        AnnualSalary : $(`#AnnualSalary`).val(),
    }//end newEntry
    //push item into an array
    employees.push(newEntry);

}
