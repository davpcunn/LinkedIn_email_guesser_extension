/*get the employee's full name, current employer's and contanct info from the active tab's html*/
//Make sure it's a valid profile
var error_text = false
var employee_name = null
var cur_employers = null
var contact_info = null

document.addEventListener('DOMContentLoaded', function() {
    if (document_root.getElementById("pagekey-nprofile_view_nonself") == null){
         error_text = "Current Page is not a valid LinkedIn profile")
    }))
    else{
        //get the user's name
        employee_name = document_root.getElementsByClassName('full-name')[0].innerHTML;
         //get the name's of the user's current employers
        cur_employers = document.getElementByID('overview-summary-current').getElementsByTagName('td')[0].getElementsByTagName('a');
        /*Replace the company name HTML element with the elements contents*/
        for (var i = 0; i < employers.length;  i++) {
          cur_employers[i] = cur_employers[i].innerHTML
        };
        /*get the html source of the user's contact info*/
        contact_info = document_root.getElementById('contact-info-section')
    }
    chrome.runtime.sendMessage({
        action: "displayInfo"
        error: error_text
        employee: employee_name
        employers: cur_employers
        contact: contact_info
    })
});
