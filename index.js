function myFunction() {
  var myBtn = document.querySelector(".myBtn");
    var x = document.querySelector(".box2");

    if (x.style.display === "none") {
      x.style.display = "block";
      myBtn.style.backgroundColor = "hsl(217, 19%, 35%)";
      
    } else {
      x.style.display = "none";
      myBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
      
    }
  }



