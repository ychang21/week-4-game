$(document).ready(function () {
    //variables
    var yourFighter; 
    var fighterHealth = 0;
    var hasFighter = false;
    var defense = false;
    var counter; //defender variable
    var defHealth = 0; //defender health
    var startFight = false;
    var ready = true;
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
        for (var i = 0; i < player.length; i++) {
        var page = player[i];
        $($(".character .col-md-3")[i]).append(page.name, page.image, page.health);
        }

    //click event to move character into Your fighter space and hide from  character list
    //click event to move character into Defender space and hide
    function pick1() {
    
    if (hasFighter == false) {
        $("#luke").on("click", function(){
            $(".fighter").after(luke.name, luke.image, luke.health);
            $(".ls").hide();
            yourFighter = player[0];
            $("#luke, #vader, #rey, #kylo").off("click");
            hasFighter = true;
            pick2();
        });
        $("#vader").on("click", function(){
            $(".fighter").after(vader.name, vader.image, vader.health);
            $(".dv").hide();
            yourFighter = player[1];
            $("#luke, #vader, #rey, #kylo").off("click");
            hasFighter = true;
            pick2();
        });
        $("#rey").on("click", function(){
            $(".fighter").after(rey.name, rey.image, rey.health);
            $(".rs").hide();
            yourFighter = player[2];
            $("#luke, #vader, #rey, #kylo").off("click");
            hasFighter = true;
            pick2();
        });
        $("#kylo").on("click", function(){
            $(".fighter").after(kylo.name, kylo.image, kylo.health);
            $(".kr").hide();
            yourFighter = player[3];
            $("#luke, #vader, #rey, #kylo").off("click");
            hasFighter = true;
            pick2();
        });
    };
};

    function pick2() {
    if (hasFighter == true) {
        $("#luke").on("click", function(){
            $(".defender").after(luke.name, luke.image, luke.health);
            $(".ls").hide();
            counter = player[0];
        });
        $("#vader").on("click", function(){
            $(".defender").after(vader.name, vader.image, vader.health);
            $(".dv").hide();
            counter = player[1];
        });
        $("#rey").on("click", function(){
            $(".defender").after(rey.name, rey.image, rey.health);
            $(".rs").hide();
            counter = player[2];
        });
        $("#kylo").on("click", function(){
            $(".defender").after(kylo.name, kylo.image, kylo.health);
            $(".kr").hide();
            counter = player[3];
        });
    }

};

    //attack button
    //console.log prints out everything correctly but some of the text won't print to the page

    function fight() {
        $("#clash").on("click", function(){  
            console.log(yourFighter.name);
            console.log(yourFighter.attack);       
            $(".battle1").text("You have attacked with " + yourFighter.attack + " points!");
            $(".battle2").text("You were struck back with " + counter.counterAttack + " points!");
            fighterHealth = (yourFighter.health - counter.counterAttack);
            console.log(fighterHealth);
            console.log(counter.name);
            console.log(counter.counterAttack);
            defHealth = (counter.health - yourFighter.attack);
            console.log(defHealth);
            $(".status1").text(yourFighter.name + " has " + fighterHealth + " health points left!");
            $(".status2").text(counter.name + " has " + defHealth + " health points left!");
            startFight = true;
        })
        if ((fighterHealth <= 0) && (startFight == true) ) {
            $(".battle").text("You have lost the battle!");
        } else if ((fighterHealth > 0) && (defHealth <= 0)) {
            $(".battle").text("You have won your first match! Select a new opponent.");
        }
    }
    //reset button
    $("#reset").on("click", function(){
        document.location.reload();
    })

    fight();
    pick1();
    

});