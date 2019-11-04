function focusLost(){
  //On créer une regex pour le nom.
  const regexName=/^[a-zA-ZÀ-ÿ’ -]+$/
  // On créer une variable pour récupérer ce qui sera écrit dans le input lastname
  let lastname = document.getElementById('lastname').value;
  //on test la regex avec le .test
  if(regexName.test(lastname)){
    alert('Merci de votre participation');
  }else {
    alert('Le champ nom n\'est pas validé')
  }
