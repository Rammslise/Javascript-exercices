function division(){
  let Nombre1= document.getElementById('firstNumber').value;
  let Nombre2= document.getElementById('secondNumber').value;
  const chiffre= /^[0-9.]+$/;
  if (chiffre.test(Nombre1) && chiffre.test(Nombre2)) {
    alert(Nombre1%Nombre2); // % se dit "Modulo"
  } else {
    alert('Il faut des chiffres');
  }
}
