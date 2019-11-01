window.onload = function () {

  var onasbutton = document.getElementById("onas");
  var galeriabutton = document.getElementById("galerie");
  var kontaktbutton = document.getElementById("kontakt");


  kontaktbutton.onclick = function(){
    const element = document.getElementById("footer");
    element.scrollIntoView({block:'nearest',behavior:'smooth',inline:'end'});
  }

  onasbutton.onclick = function(){
    const element = document.getElementById("ofe");
    element.scrollIntoView({block:'nearest',behavior:'smooth',inline:'start'});
  }
  //// TODO: Poprawa scrolli, są niedokładne. Źle nakierowuje na elementy strony

};
