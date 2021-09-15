$(document).ready (onReady);

let employees = [];


function onReady() {
    console.log ('in onReady');
    $(`#submitButton`).on (`click`, getData);
    $( '#employeeTable' ).on( 'click', '.deleteEmployee', deleteEmployee );
} //end onReady


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
    //store information 
    employees.push(newEntry);
    //append information to the DOM
    let el = $('#employeeTable')
    el.empty ();
    el.append (`<tr id = "row">
            <th id = "FirstName">First Name</th>
            <th id = "LastName">Last Name</th>
            <th id = "IDNumber">ID Number</th>
            <th id = "JobTitle">Job Title</th>
            <th id = "AnnualSalary">Annual Salary</th>
            <th id = "Delete"></th>
        </tr>`)
    for (i=0; i<employees.length; i++){
        el.append( `<tr><td>${ employees[i].firstName }</td>, <td>${ employees[i].lastName}</td>,  <td>${ employees[i].IDNumber}</td>,
         <td>${ employees[i].JobTitle }</td>, <td>${ employees[i].AnnualSalary}</td>
         <td><button class="deleteEmployee">Delete</button>
         </td></tr>` );

    } 
    let monthlyWages=0;
    let sum = 0;
    for (i=0; i<employees.length; i++){
        monthlyWages = (sum +=Number(employees[i].AnnualSalary))/12;
        if (monthlyWages>20000){
            $(`#salaryCalculator`).toggleClass ( 'red');
        }
    } 
    
    el.append (monthlyWages);
    $(`#FirstName`).val('');
    $(`#LastName`).val('');
    $(`#IDNumber`).val('');
    $(`#JobTitle`).val('');
    $(`#AnnualSalary`).val('');
    $(`#salaryCalculator`).val('');
    
    
}

function deleteEmployee(){
    console.log( 'in deleteEmployee' );
    //remove employee
    $( this ).parent().parent().remove(); 
} // end deleteEmployee



