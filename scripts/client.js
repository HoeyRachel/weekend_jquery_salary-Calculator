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
    //store information - do I need an array if I store information in a table?
    employees.push(newEntry);
    //append information to the DOM
    let row = "<th>" + $(`#firstName`).val(); + "<th>" + $(`#lastName`).val(); + "<th>" + 
    $(`#IDNumber`).val(); + "<th>" + $(`#JobTitle`).val(); + "<th>" + $(`AnnualSalary`).val(); + "</th>";
    $("table tbody").append (row);
}





  
