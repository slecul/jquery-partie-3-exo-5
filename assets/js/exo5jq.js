// Daclaration de la fonction globale
$(function(){
  //Variable qui correspond au carré
  var square = $('.square');
  //Variable qui correspond à la position verticale du carré
  var highness = 0;
  //Variable qui correspond à la position horizontale du carré
  var ltr = 0;
  //Déclaration de ma fonction qui s'applique lorsque j'appuie sur une touche dans le champ de saisie
  $('.text').keypress(function(event){
    //Variable qui correspond à la touche saisie
    var setKey = event.keyCode;
    //Si la touche est "flèche gauche"(keycode=37):
    if(setKey == 37 ) {
    //On diminue le margin-left.
      ltr = ltr-10;
    //Sinon, si la touche est "flèche du haut"(keycode=38):
    }else if(setKey == 38){
    //On diminue le margin-top.
      highness = highness-10;
    //Sinon, si la touche est "flèche de droite"(keycode=39):
    }else if (setKey == 39) {
    //On augmente le margin-left
      ltr = ltr+10;
    //Sinon, si la touche est "flèche du bas"(keycode=40):
    }else if(setKey == 40){
    //On augmente le margin-top
      highness = highness+10;
    //Sinon, on préviens l'utilisateur qu'il faut utiliser ces touches.
    }else{
      alert("Cette touche ne fait rien, utilisez les flèches directionnelles pour déplacer le carré !");
    }
    //Si la carré dépasse le bord gauche de l'écran, on le fait réapparaître au bord droit.
    if(ltr < -10){
      ltr = 1800;
    //Si le carré dépasse le bord droit, on le fait réapparaître a gauche.
    }if(ltr > 1800){
      ltr = -10;
    //Si le carré dépasse le bord haut, on le fait réapparaître en bas
    }if(highness < -10){
      highness = 900;
    //Si le carré dépasse le bord bas, on le fait réapparaître en haut
    }if(highness > 900){
      highness = -10;
    }
    //Enfin, on applique les modifications dues aux touches au carré.
    square.css({'margin-left': ltr, 'margin-top': highness});
  });
});
