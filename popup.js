//Checks if the website we are on is LinkedIn profile
//Send data to back end, post reply to popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
  if (request.action == "getProfileInfo") {
    if (request.error == false){
      $('#profile-info').append("<a class = 'employee'>Name: " + request.employee + " </a>")
      $('#profile-info').append('<b id = current-employers> Employer(s): </b>')
      for (var i = 0; i < request.employers.length; i++){
        $('#current-employers').append('<b1 class = employer> ' +request.employers[i] '</b1>')
      }
      $('#profile-info').append('<c id = contact-info> Contact: </c>')
      $*('#contact-info').append(request.contact)
      //Create button
      $('#valid_checked_emails').append('<div id = "button"> Guess Emails! </div>')
      $('#button').click(function(){

        $.ajax({
          dataType: 'json',
          url: '/api/validate.json', //Replace with wherever the backend is hosted.
          type: "POST",
          data: {employee: request.employee, employers: request.employers}
          success: function(data){
            debugger;
            if (data.error == true){
              window.alert("Error: " + data.errorText);
            }else{
              for (i = 0; i < data.valid_emails.length; i++){
                $("#valid_checked_emails").append('<a class = "email" href="mailto:' + data.valid_emails[i]+'">' + data.valid_emails[i] + '</a>')
              }
            };
          }
          error: function(jqXHR, textStatus, errorThrown){
            debugger
            window.alert('Error '+ jqXHR.status +': ' + jqXHR.statusText)
          }
        });
      });
    }else{
      $('#error').append("<a class = 'error'> " + request.error + "</a>")
    }
  }
});