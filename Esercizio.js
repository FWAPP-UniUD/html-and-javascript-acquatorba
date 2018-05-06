function Over() {
    alert("sei sopra!!");
}

function Out() {
    alert("sei uscito!!");
}

function clic() {
    alert("Hai cliccato!!");
}

function menu() {
    alert("Tasto destro!!");
}

function mouseOver(im) {
    im.src= "img/diploma.svg";
    im.style= "width: 40%";
}

function mouseOut(im) {
    im.src= "img/003-stopwatch.svg";
    im.style= "width: 40%";
}

function cliccato(im) {
    im.src= "img/003-business.svg";
    im.style= "width: 40%";
}

function contexmenu(im) {
    im.src= "img/002-upload.svg";
    im.style= "width: 40%";
}

function seek() {
  var myelement = document.getElementById("lorem");
  if(myelement != null) myelement.classList.remove("hide");
  else {
    var para = document.createElement("p");
    para.id= "lorem";
    var node = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    para.appendChild(node);
    var div = document.getElementsByClassName("Java3");
    div[0].appendChild(para);
  }
}

function hide() {
    var paragrafo = document.getElementById("lorem");
    paragrafo.classList.add("hide");
}

function disable() {
   var controllo = document.getElementById("fild");
   if(document.getElementById("myCheck").checked == true) {
     controllo.removeAttribute("disabled");
   }
   else{
     controllo.setAttribute("disabled","");
   }
}

function enable() {

}
