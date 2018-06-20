var panel = $(".input-game");

$(document).on("click", ".btn", function (event) {
   game.start();
});

$(document).on("click", "#done", function (event) {
   game.done();
});

var questions = [{
    q: "Who said? 'You've been asleep, Cap. For almost 70 years.'",
    choices: ["Nick Fury","Buckey Barnes","Peggy Carter","Justin Hammer",],
    correctAnswer:"Nick Fury",
},{

    q: "What is Loki's real race?",
    choices:  ["Human","Mutant","Asgardian","Frost Giant",],
    correctAnswer:"Frost Giant",
},{
    
    q: "What powers Iron Man's suits?",
    choices: [ "Tessaract","Arc Reactor","Solar Power","Psychic Abilities",],
    correctAnswer: "Arc Reactor",
},{ 
        
    q: "Who said? 'I DIDN'T ASK TO BE MADE! I DIDN'T ASK TO BE TORN APART AND PUT BACK TOGETHER OVER AND OVER! Turned into some... Some little monster'",
    choices: ["Groot","The Hulk","Rocket Raccoon","Red Skull",],
    correctAnswer:"Rocket Raccoon",
},{   

    q: "What country is Black Panther from?",
    choices: ["USA","France","Brazil","Wakanda",],
    correctAnswer:"Wakanda",
},{   
    
    q:"Who plays Ant Man in the movie?",
    choices: ["Paul Rudd","Ben Affleck","Tom Cruise","Robert Downey Jr.",],
    correctAnswer:"Paul Rudd",
},{    
        
    q: "Who is the long lost sister of Thor?",
    choices: ["Gamora","Black Widow","Jane Foster","Hela",],
    correctAnswer:"Hela",
},{ 
        
    q: "Who/What did JARVIS turned into in the Age of Ultron?",
    choices: ["Deadpool","War Machine","Ultron","Vision",],
    correctAnswer:"Vision",
}];
        

var game = {
   correct: 0,
   incorrect: 0,
   counter: 60,

   countdown: function () {
       game.counter--;
       $("#counter-number").html(game.counter);

       if (game.counter === 0) {
           alert("TIME'S UP");
           game.done();

       }
   },

   start: function () {
       timer = setInterval(game.countdown, 1000);
       $('#time-remaining').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
       $(".btn").remove();
       

       for (var i = 0; i < questions.length; i++) {
           panel.append('<h2>' + questions[i].q + '</h2>');
           for (var j = 0; j < questions[i].choices.length; j++) {
               panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
           }
       }
       panel.append("<button id='done'>DONE</button>");

   },

   done: function () {

       $.each($("input[name='q-0']:checked"), function () {
           if ($(this).val() == questions[0].correctAnswer) {
               console.log(this);
               game.correct++;
           } else {
               game.incorrect++;
           }

       });
       $.each($("input[name='q-1']:checked"), function () {
           if ($(this).val() == questions[1].correctAnswer) {
               console.log(this);
               game.correct++;
           } else {
               game.incorrect++;
           }

       });
       $.each($("input[name='q-2']:checked"), function () {
           if ($(this).val() == questions[2].correctAnswer) {
               console.log(this);
               game.correct++;
           } else {
               game.incorrect++;
           }

       });
       $.each($("input[name='q-3']:checked"), function () {
           if ($(this).val() == questions[3].correctAnswer) {
               console.log(this);
               game.correct++;
           } else {
               game.incorrect++;
           }

       });
       $.each($("input[name='q-4']:checked"), function () {
           if ($(this).val() == questions[4].correctAnswer) {
               console.log(this);
               game.correct++;
           } else {
               game.incorrect++;
           }

       });
       $.each($("input[name='q-5']:checked"), function () {
        if ($(this).val() == questions[5].correctAnswer) {
            console.log(this);
            game.correct++;
        } else {
            game.incorrect++;
        }

    });
    $.each($("input[name='q-6']:checked"), function () {
        if ($(this).val() == questions[6].correctAnswer) {
            console.log(this);
            game.correct++;
        } else {
            game.incorrect++;
        }

    });
    $.each($("input[name='q-7']:checked"), function () {
        if ($(this).val() == questions[7].correctAnswer) {
            console.log(this);
            game.correct++;
        } else {
            game.incorrect++;
        }

    });
 
       this.results();
   },


   results: function () {
       clearInterval(timer);

       $("#input-game h2").remove();
       panel.html("<h2>You're Done!</h2>");
       panel.append("<h3>You got this many right: " + this.correct + "</h3>");
       panel.append("<h3>You got this many wrong: " + this.incorrect + "</h3>");
panel.append("<h3>You didn't answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

   }

};