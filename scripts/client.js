$(document).ready (onReady);
let employees = [];

function onReady() {
    console.log ('in onReady');
    $(`#submitButton`).on (`click`, getData);
    $( '#employeesOut' ).on( 'click', '.deleteEmployee', deleteEmployee );
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
    let el = $('#employeesOut')
    el.empty ();
    for (i=0; i<employees.length; i++){
        el.append( `<th>${ employees[i].firstName }, ${ employees[i].lastName}, ${ employees[i].IDNumber},
         ${ employees[i].JobTitle }, ${ employees[i].AnnualSalary}
         <button class="deleteEmployee">Delete</button>
         </th>` );
        
    }
    // let row = "<th>" + $(`#firstName`).val(); + "<th>" + $(`#lastName`).val(); + "<th>" + 
    // $(`#IDNumber`).val(); + "<th>" + $(`#JobTitle`).val(); + "<th>" + $(`AnnualSalary`).val(); + "</th>";
    // $("table tbody").append (row);
    
}



function deleteEmployee(){
    console.log( 'in deleteEmployee' );
    //remove employee
    $( this ).parent().remove(); 
} // end deleteEmployee


  
