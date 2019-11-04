function check(){
  //on créer deux variable pour le pass et le confirmPass
  let pass= document.getElementById('password');
  let pass2= document.getElementById('confirmPassword');
  //on test si ils sont identique
  if (pass.value == pass2.value) {
    //on met en vert
    pass.style.border="2px solid green";
    pass2.style.border="2px solid green";
//Ou on met en rouge
  }else {
    pass.style.border=pass2.style.border="2px solid red";
  }
}
