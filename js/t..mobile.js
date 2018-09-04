 function opencloseSlideMenu(){
      var element=document.getElementById("side-menu");
      element.style.display=="block"?element.style.display="none":element.style.display="block";
      document.getElementById("side-menu").style.width='250px';
    }
    
 


// Add active class to the current button (highlight it)
var header = document.getElementById("active-class");
var btns = header.getElementsByClassName("same");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeclass");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" activeclass", "");
    }
    this.className += " activeclass";
  });
}

var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle('is-open');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


function closeSlideMenu(){
  document.getElementById("side-menu").style.width='0';
  document.getElementById("main-content").style.width='0';
}

      var head = document.getElementById("starwar");
var btn = head.getElementsByClassName("sam");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("actives");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" actives", "");
    }
    this.className += " actives";
  });
}


var heade = document.getElementById("mychoice");
var btnns = heade.getElementsByClassName("hot-pink");
for (var i = 0; i < btnns.length; i++) {
  btnns[i].addEventListener("click", function(event) {
    var popUp = event.target.querySelector("div");
    console.dir(popUp);
    if(popUp.className != "show"){
       popUp.className = "show";
    }else if(popUp.className = "show"){
       popUp.className = "popuptext";
    }
   




    // var currents = document.getElementsByClassName("popuptext");
    //   for(var i=0;i<currents.length;i++){
    //  if(currents[i].style.display=="none"){
    //   this.className += " show";
    //   }
    //   else
    //     currents[i].style.display="none";
    //   }

  });

}
