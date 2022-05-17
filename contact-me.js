let emailReceiver = 'erikaelliyin@gmail.com';

function submitForm() {
  let name = document.getElementById('input-name').value;
  let email = document.getElementById('input-email').value;
  let phone = document.getElementById('input-phone').value;
  let subject = document.getElementById('choose-subject').value;
  let message = document.getElementById('input-message').value;

  if (name == '' || email == '' || phone == '' || subject == '' || message == '') {
    alert('Please fill all the field.');
  }
  else {
  let a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hi, my name ${name}, ${subject}, ${message}`;
  a.click();
  }

}
