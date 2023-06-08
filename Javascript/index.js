const button = document.getElementById("btn");
const targetDiv = document.getElementById("side-nav");

button.onclick = function() {
  if(targetDiv.style.display !== "block"){
    targetDiv.style.display = "block";
  } else{
    targetDiv.style.display = "none";
  }
}


function hidee() {
  if(targetDiv.style.display !== "block"){
    targetDiv.style.display = "block";
  } else{
    targetDiv.style.display = "none";
  }
}

        $(document).mouseup(function (e) {
            var container = $("#side-nav");
            if(!container.is(e.target) && 
            container.has(e.target).length === 0) {
                container.hide();
            }
        });

        function myfunction() {
          var hours = document.getElementById("hours");
          var mins = document.getElementById("min");
          var seconds = document.getElementById("sec");
          var time = new Date();
          var hh = time.getHours();
          var mm = time.getMinutes();
          var ss = time.getSeconds();

          hh = hh * 30 + mm / 2;
          mm = mm * 6;
          ss = ss * 6;

          hours.style.transform="rotate("+hh+"deg)";
          mins.style.transform="rotate("+mm+"deg)";
          seconds.style.transform = "rotate(" + ss + "deg)";
      }
      setInterval(myfunction, 1000);