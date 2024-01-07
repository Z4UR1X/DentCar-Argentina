/* This Document is JS code to implement in Forms  */
/* This code made by ZλURiX */

/* -> Verifier SDK Credentials */
Verifier.init({
  projectId: 'dent-car-webpage',
  secretKey: '92928b756e623357b3bd80e8dc90deae0e5d6fbe924dea3c5864e0241883a98873bf32f4347ed6008a3f1662391662b4',
});

/* -> Submit Button link */
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

Verifier.verify().then(function (response) {
  if (response.success) {
    document.getElementById('contact-form').submit();
  } else {
    alert('Error de verificación, inténtalo de nuevo.');
  }
  });
});
