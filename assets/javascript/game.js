$(document).ready(function () {
    //variables
    var yourFighter; 
    var fighterHealth = 0;
    var hasFighter = false;
    var defense = false;
    var counter; //defender variable
    var defHealth = 0; //defender health
    var ready = false;
    var numAttack = 1;
    var picCounter = 4;
    var attackCheck = false;
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
            counterAttack: 15,
            image: "<img class='img-responsive' id='rey' data-health=120 src='assets/images/rey.jpeg' alt='Rey'>"
        },
        kylo = {
            name: "Kylo Ren",
            health: 180,
            attack: 7,
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
            $(".fighter").append(luke.name, luke.image, luke.health);
            $(".ls").hide();
            yourFighter = player[0];
            $("#luke, #vader, #rey, #kylo").off("click");
            hasFighter = true;
            fighterHealth = yourFighter.health;
            picCounter--;
            pick2();
        });
        $("#vader").on("click", function(){
            $(".fighter").append(vader.name, vader.image, vader.health);
            $(".dv").hide();
            yourFighter = player[1];
            $("#luke, #vader, #rey, #kylo").off("click");
            hasFighter = true;
            fighterHealth = yourFighter.health;
            picCounter--;
            pick2();
        });
        $("#rey").on("click", function(){
            $(".fighter").append(rey.name, rey.image, rey.health);
            $(".rs").hide();
            yourFighter = player[2];
            $("#luke, #vader, #rey, #kylo").off("click");
            hasFighter = true;
            fighterHealth = yourFighter.health;
            picCounter--;
            pick2();
        });
        $("#kylo").on("click", function(){
            $(".fighter").append(kylo.name, kylo.image, kylo.health);
            $(".kr").hide();
            yourFighter = player[3];
            $("#luke, #vader, #rey, #kylo").off("click");
            hasFighter = true;
            fighterHealth = yourFighter.health;
            picCounter--;
            pick2();
        });
    };
};

    function pick2() {
    if (hasFighter == true && defense == false) {
        $("#luke").on("click", function(){
            $(".defender").append(luke.name, luke.image, luke.health);
            $(".ls").hide();
            counter = player[0];
            defHealth = counter.health;
            attackCheck = true;
            defense = true;
            picCounter--;
            $(".battle1").empty();
        });
        $("#vader").on("click", function(){
            $(".defender").append(vader.name, vader.image, vader.health);
            $(".dv").hide();
            counter = player[1];
            defHealth = counter.health;
            attackCheck = true;
            defense = true;
            picCounter--;
            $(".battle1").empty();
        });
        $("#rey").on("click", function(){
            $(".defender").append(rey.name, rey.image, rey.health);
            $(".rs").hide();
            counter = player[2];
            defHealth = counter.health;
            attackCheck = true;
            defense = true;
            picCounter--;
            $(".battle1").empty();
        });
        $("#kylo").on("click", function(){
            $(".defender").append(kylo.name, kylo.image, kylo.health);
            $(".kr").hide();
            counter = player[3];
            defHealth = counter.health;
            attackCheck = true;
            defense = true;
            picCounter--;
            $(".battle1").empty();
        });
    }

};

    //attack button

        $("#clash").on("click", function(){ 
            if (attackCheck == false && defense == false) {
                $(".battle1").text("No enemy selected!");
                $(".battle2").empty();
                $(".status1").empty();
                $(".status2").empty();
            } else {
            console.log(yourFighter.name);
            console.log(yourFighter.attack);       
            $(".battle1").text("You have attacked with " + (yourFighter.attack * numAttack) + " points!");
            $(".battle2").text("You were struck back with " + counter.counterAttack + " points!");
            fighterHealth = (fighterHealth - counter.counterAttack);
            console.log(fighterHealth);
            console.log(counter.name);
            console.log(counter.counterAttack);
            defHealth = (defHealth - (yourFighter.attack * numAttack));
            console.log(defHealth);
            $(".fighter").empty();
            $(".defender").empty();
            $(".fighter").append(yourFighter.name, yourFighter.image, fighterHealth);
            $(".defender").append(counter.name, counter.image, defHealth);
            numAttack++;
        if ((fighterHealth <= 0)  
            ){
            $(".battle1").text("You have lost the battle!");
            $(".battle2").text("Reset to start again");
            $(".status1").empty();
            $(".status2").empty();
            numAttack = 1;
            attackCheck = false;
        } else if ((fighterHealth > 0) && (defHealth <= 0)) {
            $(".battle1").text("You have won your match! Select a new opponent.");
            $(".battle2").empty();
            $(".status1").empty();
            $(".status2").empty();
            $(".defender").empty();
            attackCheck = false;
            defense = false;
        } else if ((fighterHealth >= 0) && (picCounter == 0)) {
            $(".battle1").text("You have won the battle!");
            $(".battle2").text("Press Reset to play again");
            $(".status1").empty();
            $(".status2").empty();
            $(".defender").empty();
            numAttack = 1;
            picCounter = 4;
            attackCheck = false;
            defense = false;
        }
        }
        })

    // }
    //reset button
    $("#reset").on("click", function(){
        document.location.reload();
    })

    // fight();
    pick1();
    

});