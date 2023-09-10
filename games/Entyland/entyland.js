// variables
var randombiome = 0;
var randomNum = 0;
var seconds = 1;

// function show variables
function showVar() {
  document.getElementById("land").innerText = "Land (acres): "+localStorage.land;
  document.getElementById("cland").innerText = "Cleared Land (acres): "+localStorage.cland;
  document.getElementById("gold").innerText = "Gold: "+localStorage.gold;
  document.getElementById("toolkit").innerText = "Toolkit: "+localStorage.toolkit;
  document.getElementById("settlement").value = localStorage.settlement;
  document.getElementById("wood").innerText = "Wood: "+localStorage.wood;
  document.getElementById("stone").innerText = "Stone: "+localStorage.stone;
  document.getElementById("iron").innerText = "Iron: "+localStorage.iron;
  document.getElementById("house").innerText = "Houses: "+localStorage.house;
  document.getElementById("people").innerText = "People: "+localStorage.people;
}

// show variables at start
showVar();

        function buyLand() {
            if (localStorage.land) {
              if (localStorage.gold > 0) {
                localStorage.land = Number(localStorage.land)+1;
                localStorage.gold = Number(localStorage.gold)-50;
                document.getElementById("news").innerText = "You conquered land and spent 50 gold on the border!";
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
                        randombiome = Math.floor(Math.random() * 2);
                        if (randombiome == 0) {
                            localStorage.wood = Number(localStorage.wood)+Math.floor(Math.random() * 20);
                            localStorage.stone = Number(localStorage.wood)+Math.floor(Math.random() * 5);
                            document.getElementById("news").innerText = "You identified that your land was a Forest! You cleared it!";
                        }
                        if (randombiome == 1) {
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

        //build functions
        function Btoolkit() {
          if (localStorage.stone >= 10) {
            if (localStorage.wood >= 5) {
              localStorage.stone = Number(localStorage.stone)-10;
              localStorage.wood = Number(localStorage.wood)-5;
              localStorage.toolkit = Number(localStorage.toolkit)+5;

              document.getElementById("toolkit").innerText = "Toolkit: "+localStorage.toolkit;
              document.getElementById("wood").innerText = "Wood: "+localStorage.wood;
              document.getElementById("stone").innerText = "Stone: "+localStorage.stone;
              document.getElementById("news").innerText = "You just crafted 5 toolkits for your settlement!";

            } else {
              alert("Not enough wood...")
              document.getElementById("news").innerText = "You sadly didn't have enough wood to craft toolkits...";
            }
          } else {
            alert("Not enough stone...")
            document.getElementById("news").innerText = "You sadly didn't have enough stone to craft toolkits...";
          }
        }

        function Bhouse() {
          if (localStorage.stone >= 40) {
            if (localStorage.wood >= 20) {
              localStorage.stone = Number(localStorage.stone)-40;
              localStorage.wood = Number(localStorage.wood)-20;
              localStorage.house = Number(localStorage.house)+1;

              document.getElementById("house").innerText = "Houses: "+localStorage.house;
              document.getElementById("wood").innerText = "Wood: "+localStorage.wood;
              document.getElementById("stone").innerText = "Stone: "+localStorage.stone;
              document.getElementById("news").innerText = "You just built a house in your settlement!";

              localStorage.people = Number(localStorage.people)+4;
              document.getElementById("people").innerText = "people: "+localStorage.people;

            } else {
              alert("Not enough wood...")
              document.getElementById("news").innerText = "You sadly didn't have enough wood to build a house...";
            }
          } else {
            alert("Not enough stone...")
            document.getElementById("news").innerText = "You sadly didn't have enough stone to build a house...";
          }
        }

        // auto gold
        int = setInterval(goldInterval, 1000);

        function goldInterval() {
          seconds -= 1
          document.getElementById("gpm").innerText = "Gold per Second:"+1 * localStorage.people;

          if (seconds == 0) {
            clearInterval(int);
              seconds = 1;
              localStorage.gold = Number(localStorage.gold)+(1 * localStorage.people);
              document.getElementById("gold").innerText = "Gold: "+localStorage.gold;
              int = setInterval(goldInterval, 1000);
          }
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
          document.getElementById("news").innerText = "You renamed your settlement to "+localStorage.settlement;
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
              localStorage.house = 0;
              localStorage.people = 0;

              // show variables
              showVar();
            }
          }

          
