var languagesArrayCreation = function () {
  let array=['Html','CSS','Java','PHP']
  return array;
  //return new Array['Html','CSS','Java','PHP'];
}

var numbersArrayCreation = function () {
    let array=[0,1,2,3,4,5]
    return array;
}

var ElementReplacement = function (languages) {
  languages[2]= 'Javascript';
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
   languages.push('Ruby','Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
  let socialMedia=(socialMediaInString.split(','));
  return socialMedia;
}

var arrayToString = function (languages) {
  let languagesInString=languages.join();
  return languagesInString;
}

var arraySort = function (socialMedia) {
  socialMedia.sort();
  return socialMedia;
  //return socialMedia.sort();
}

var arrayInvert = function (languages){
  languages.reverse();
  return languages;
  //return languages.reverse();
}
