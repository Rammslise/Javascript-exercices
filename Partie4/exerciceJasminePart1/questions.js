/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;
    // returne texte.cancat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
    //4 car on démarre la chaîne par [0]
    //return texte.slice(4,5);
}
var afficher9Car = function (texte) {
    return texte.substr(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof texte=="string";
}
var AfficherExtensionString = function (texte) {
     let arrayText = texte.split('.');
    return arrayText[1];
    //return texte.split(".").pop();
    //return texte.slice(-3);
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length-1;
    //-1 car le split sépare en nombre de mot et donc il y a un espace en moins que les mots
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
// split pour séparer , reverse pour les inverser et join pour les rejoindres!
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
    // x**y;
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    for (i=0; i<4; i++){  //arrey.length pour le 4   for (démarrage;fin;incrémente ou décrémente)
    array[i] = Math.abs(array[i]);
  }
    return array;
  //return array.map(Math.abs);
}
var sufaceCercle = function (rayon) {
    let surface= Math.PI * Math.pow(rayon , 2);
    //Math.round() pour l'arrondi
    return Math.round(surface);
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    let imc=poids/(taille*taille);
    // let imc=poids/ Math.pow(taille, 2);
    return Math.round(imc*100)/100;
    //return parsefloat(imc.tofixed(2));
}
