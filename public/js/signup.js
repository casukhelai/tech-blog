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

}