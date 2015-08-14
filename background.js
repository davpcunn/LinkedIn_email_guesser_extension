$(document).ready(function(){
  chrome.runtime.sendMessage({
            action: "getProfileInfo"
            error: error_text
            employee: employee_name
            employers: cur_employers
            contact: contact_info
  })
});
