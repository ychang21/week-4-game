$(document).ready(function () {
    //variables
    var yourFighter; 
    var result = 0;
    var hasFighter = false;
    var defense = false;
    var counter; //defender variable
    var defHealth = 0; //defender health
    //player properties and values
    var player = [
        luke = {
            name: "Luke Skywalker",
            health: 100,
            attack: 15,
            counterAttack: 5,
            image: "<img class='img-responsive' id='luke' data-health=100 src='assets/images/lukeskywalker.png' alt='Luke Skywalker'>"
        },
        vader = {
            name: "Darth Vader",
            health: 150,
            attack: 8,
            counterAttack: 20,
            image: "<img class='img-responsive' id='vader' data-health=150 src='assets/images/darthvader.jpg' alt='Darth Vader'>"
        },
        rey = {
            name: "Rey",
            health: 120,
            attack: 8,
            counterAttack: 20,
            image: "<img class='img-responsive' id='rey' data-health=120 src='assets/images/rey.jpeg' alt='Rey'>"
        },
        kylo = {
            name: "Kylo Ren",
            health: 180,
            attack: 5,
            counterAttack: 25,
            image: "<img class='img-responsive' id='kylo' data-health=180 src='assets/images/kyloren.jpg' alt='Kylo Ren'>"
        },
    ];

    //appending images to the page so that it is clickable

    // function start() {
        $(".ls").append(luke.name, luke.image, luke.health);
        $(".dv").append(vader.name, vader.image, vader.health);
        $(".rs").append(rey.name, rey.image, rey.health);
        $(".kr").append(kylo.name, kylo.image, kylo.health);
    

    //click event to move character into Your fighter space and remove from  character list
    // move to defender... needs if statements to set conditions
    if (hasFighter == false) {
        $("#luke").on("click", function(){
            $(".fighter").after(luke.name, luke.image, luke.health);
            $(".ls").remove();
            yourFighter = player[0];
        });
        $("#vader").on("click", function(){
            $(".fighter").after(vader.name, vader.image, vader.health);
            $(".dv").remove();
            yourFighter = player[1];
        });
        $("#rey").on("click", function(){
            $(".fighter").after(rey.name, rey.image, rey.health);
            $(".rs").remove();
            yourFighter = player[2];
        });
        $("#kylo").on("click", function(){
            $(".fighter").after(kylo.name, kylo.image, kylo.health);
            $(".kr").remove();
            yourFighter = player[3];
        });
        hasFighter = true;
    } else if (hasFighter == true) {
        $("#luke").on("click", function(){
            $(".defender").after(luke.name, luke.image, luke.health);
            $(".ls").remove();
            counter = player[0];
        });
        $("#vader").on("click", function(){
            $(".defender").after(vader.name, vader.image, vader.health);
            $(".dv").remove();
            counter = player[1];
        });
        $("#rey").on("click", function(){
            $(".defender").after(rey.name, rey.image, rey.health);
            $(".rs").remove();
            counter = player[2];
        });
        $("#kylo").on("click", function(){
            $(".defender").after(kylo.name, kylo.image, kylo.health);
            $(".kr").remove();
            counter = player[3];
        });
    }
    // }
    //attack button
    function fight() {
        $("#clash").on("click", function(){  
            console.log(yourFighter.name);
            console.log(yourFighter.attack);       
            $(".battle").text("You have attacked with " + yourFighter.attack + " points!");
            $(".battle").text("You were struck back with " + counter.counterAttack + " points!");
        })
    }

    //reset button
    function reset() {
        $("#reset").on("click", function(){
            $(".fighter").remove();
            $(".defender").remove();
            // start();
            var yourFighter; 
            var result = 0;
            var hasFighter = false;
            var defense = false;
            var counter = 0; 
            var defHealth = 0; 
        })
    }

    fight();
    reset();
    // start();

});