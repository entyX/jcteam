// variables
var randomGen = 0;
var randomQuantity = 0;

// show variables at start
document.getElementById("land").innerText = "Land (acres): "+localStorage.land;
document.getElementById("gold").innerText = "Gold: "+localStorage.gold;
document.getElementById("settlement").value = localStorage.settlement;

        function buyLand() {
            if (localStorage.land) {
              if (localStorage.gold > 0) {
                localStorage.land = Number(localStorage.land)+1;
                localStorage.gold = Number(localStorage.gold)-50;
              }
              else {
                alert("Not enough gold...")
              }
            } else {
              localStorage.land = 1;
            }
            document.getElementById("land").innerText = "Land (acres): "+localStorage.land;
            document.getElementById("gold").innerText = "Gold: "+localStorage.gold; 
        }

        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        function setName() {
          localStorage.settlement = document.getElementById("settlement").value;
          document.getElementById("settlement").value = localStorage.settlement;
        }

          function resetGame() {
            var destroy = prompt("Are you sure you want to reset your game? If yes, type 'delete' in the box below");
            if (destroy == "delete") {
              // reset variables
              localStorage.gold = 500;
              localStorage.land = 0;
              localStorage.settlement = "";

              // show variables
              document.getElementById("land").innerText = "Acres of land: "+localStorage.land;
              document.getElementById("gold").innerText = "Gold: "+localStorage.gold;
              document.getElementById("settlement").value = "";
            }
          }

          