// signup function
const signup = () => {
    // get data from form inputs and put them into a data object
    function getData() {
      let addedName = $('#name-signup').val().trim();
      let addedEmail = $('#email-signup').val().trim();
      let addedPass = $('#password-signup').val().trim();

      let data = {
          name: addedName,
          email: addedEmail,
          password: addedPass
      };
      
      return data;
    }

    async function submit() {
        event.preventDefault();
        clearError();
        let user = getData();
    
        // don't do anything if the get data didn't work.
        if (!user) {
          return;
        }
    
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          document.location.replace('/signup?error=DBErr');
        }
      }
    
      // set up event handlers
      function init() {
        $('#signup-button').on('click', submit);
    
        const urlParams = window.location.search;
        const params = new URLSearchParams(urlParams);
    
        if (params.has('error')) {
          $('#error-box').toggleClass('hidden');
        }
      }
    
    return {
        init: init,
    }};

    // Trigger when document is ready
$(function () {
    signup.init();
});

