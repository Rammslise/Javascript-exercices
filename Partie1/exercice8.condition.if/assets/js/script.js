function ageShow(){
  let age=document.getElementById('age').value;
  const ageRegex=/^[1]?[\d]{1,2}$/;
  if(ageRegex.test(age) && age>=18){
    alert('Vous êtes majeur');
  }else if(ageRegex.test(age) && age<18){
    alert('Vous êtes mineur');
  }else{
    alert('Une erreure dans votre âge');
  }
}
