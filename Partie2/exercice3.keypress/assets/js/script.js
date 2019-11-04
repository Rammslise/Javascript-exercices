//Déclaration de la fonction.
function touchKey(){
  //Déclaration de variable (regex et valeur de l'input)
  const regexName=/^[a-zA-ZÀ-ÿ’ -]+$/
  let lastname=document.getElementById('lastname').value;
  //Se le nom correspond à la regex
  if (regexName.test(lastname)) {
    alert('Vous avez frappé sur la touche: '+lastname)
  }else { //sinon     
    alert("Erreur");
  }
}
