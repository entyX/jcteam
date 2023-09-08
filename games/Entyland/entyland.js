// variables
var randombiome = 0;
var randomNum = 0;

// show variables at start
document.getElementById("land").innerText = "Land (acres): "+localStorage.land;
document.getElementById("cland").innerText = "Cleared Land (acres): "+localStorage.cland;
document.getElementById("gold").innerText = "Gold: "+localStorage.gold;
document.getElementById("toolkit").innerText = "Toolkit: "+localStorage.toolkit;
document.getElementById("settlement").value = localStorage.settlement;
document.getElementById("wood").innerText = "Wood: "+localStorage.wood;
document.getElementById("stone").innerText = "Stone: "+localStorage.stone;
document.getElementById("iron").innerText = "Iron: "+localStorage.iron;

        function buyLand() {
            if (localStorage.land) {
              if (localStorage.gold > 0) {
                localStorage.land = Number(localStorage.land)+1;
                localStorage.gold = Number(localStorage.gold)-50;
                document.getElementById("news").innerText = "You bought land!";
              }
              else {
                alert("Not enough gold...")
                document.getElementById("news").innerText = "You realized you didn't have enough gold...";
              }
            } else {
              localStorage.land = 1;
            }
            document.getElementById("land").innerText = "Land (acres): "+localStorage.land;
            document.getElementById("gold").innerText = "Gold: "+localStorage.gold; 
        }

        function clearLand() {
            if (localStorage.cland) {
                if (localStorage.land > 0) {
                    if (localStorage.toolkit > 0) {
                        // do the costs!
                        localStorage.land = Number(localStorage.land)-1;
                        localStorage.cland = Number(localStorage.cland)+1;
                        localStorage.toolkit = Number(localStorage.toolkit)-1;

                        // give the rewards!
                        randombiome = Math.floor(Math.random() * 3);
                        if (randombiome == 1) {
                            localStorage.wood = Number(localStorage.wood)+Math.floor(Math.random() * 20);
                            localStorage.stone = Number(localStorage.wood)+Math.floor(Math.random() * 5);
                            document.getElementById("news").innerText = "You identified that your land was a Forest! You cleared it!";
                        }
                        if (randombiome == 2) {
                            localStorage.stone = Number(localStorage.wood)+Math.floor(Math.random() * 20);
                            randomNum = Number(localStorage.wood)+Math.floor(Math.random() * 5);
                            if (randomNum == 4) {
                                localStorage.iron = Number(localStorage.wood)+Math.floor(Math.random() * 3);
                            }
                            document.getElementById("news").innerText = "You identified that your land was a Mountain! You cleared it!";
                        }

                    } else {
                        alert("Not enough tools...")
                        document.getElementById("news").innerText = "You realized that you didn't have enough tools...";
                    }
                } else {
                    alert("Not enough land...")
                    document.getElementById("news").innerText = "You realized that there was no more land to clear...";
                }
            } else {
                localStorage.cland = 1;
            }
            document.getElementById("land").innerText = "Land (acres): "+localStorage.land;
            document.getElementById("cland").innerText = "Cleared Land (acres): "+localStorage.cland;
            document.getElementById("toolkit").innerText = "Toolkit: "+localStorage.toolkit;
            document.getElementById("wood").innerText = "Wood: "+localStorage.wood;
            document.getElementById("stone").innerText = "Stone: "+localStorage.stone;
            document.getElementById("iron").innerText = "Iron: "+localStorage.iron;
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
          document.getElementById("news").innerText = "You renamed your empire to "+localStorage.settlement;
        }

          function resetGame() {
            var destroy = prompt("Are you sure you want to reset your game? If yes, type 'delete' in the box below");
            if (destroy == "delete") {
              // reset variables
              localStorage.gold = 500;
              localStorage.land = 0;
              localStorage.cland = 0;
              localStorage.toolkit = 5;
              localStorage.settlement = "";
              localStorage.wood = 0;
              localStorage.stone = 0;
              localStorage.iron = 0;

              // show variables
              document.getElementById("land").innerText = "Land (acres): "+localStorage.land;
              document.getElementById("cland").innerText = "Cleared Land (acres): "+localStorage.cland;
              document.getElementById("gold").innerText = "Gold: "+localStorage.gold;
              document.getElementById("toolkit").innerText = "Toolkit: "+localStorage.toolkit;
              document.getElementById("news").innerText = "This is where news will take place!";
              document.getElementById("settlement").value = "";
              document.getElementById("wood").innerText = "Wood: "+localStorage.wood;
              document.getElementById("stone").innerText = "Stone: "+localStorage.stone;
              document.getElementById("iron").innerText = "Iron: "+localStorage.iron;
            }
          }

          
