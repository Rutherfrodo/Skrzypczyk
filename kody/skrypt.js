window.onload = function () {

  var onasbutton = document.getElementById("onas");
  var galeriabutton = document.getElementById("galerie");
  var kontaktbutton = document.getElementById("kontakt");


  kontaktbutton.onclick = function(){
    //var element = document.getElementById("footer");
    //element.scrollIntoView({block:'nearest',behavior:'smooth',inline:'end'});
    document.getElementById("footer").scrollIntoView( );
  };

  onasbutton.onclick = function(){
    var el = document.getElementById("ofe1");
    el.scrollIntoView(true);
    document.getElementById("ofe").scrollTop -= 500;
    //var element = document.getElementById("ofe");
    //element.scrollIntoView({block:'nearest',behavior:'smooth',inline:'start'});
  };
  // TODO: Poprawa scrolli, są niedokładne. Źle nakierowuje na elementy strony

};
