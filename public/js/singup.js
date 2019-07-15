const database = firebase.database();

$(document).ready(function () {
  console.log('clicou no botão');
  $(".btn-singn-up").click(signUpClick);
})

function signUpClick(event) {
  event.preventDefault();
  const email = $(".input-email").val();
  const password = $(".input-password").val();
  createUser(email, password);
};

function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(response) {
          const userId = response.user.uid;
          database.ref('users/' + userId).set({
              email: email
          });
          createProfile(userId);
      })
      .catch(function(error) {
          handleErrors(error)
      });
}

function handleErrors(error) {
  const errorMessage = error.message;
  alert(errorMessage);
}

function createProfile(userId) {
  window.location = `create-profile.html?id=${userId}`;
}