function calculate(){
  let shoeSize= document.getElementById('shoeSize').value;
  let yearOfBirth= document.getElementById('yearOfBirth').value;
  const shoeSizerex=/^[1-6][\d]$/;
  const yearOfBirthrex=/^(?:19|20)[\d]{2}$/;
  if (shoeSizerex.test(shoeSize) && yearOfBirthrex.test(yearOfBirth)) {
    alert(((((shoeSize*2)+5)*50)-yearOfBirth)+1766);
  } else {
    alert('Les données entrées sont fausse')
  }

}
