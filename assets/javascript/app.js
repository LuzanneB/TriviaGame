// this is an object with questions, answers and images for the game
let questions = [
    {
        question: "What was Al Bundy's Profession?",
        panswers: ["Car Salesmen", "Shoe Salesmen", "Doctor", "Accountant"],
        answer: "Shoe Salesmen",
        meme: "assets/images/shoesaleman.jpg"
    },
    {
        question: "Who was the actress who played Kelly Bundy?",
        panswers: ["Christina Applegate", "Kerri Russel", "Elisabeth Shue", "Juliette Lewis"],
        answer: "Christina Applegate",
        meme: "assets/images/christinaapplegate.gif"
    },
    {
        question: "What make of car did Al Bundy drive?",
        panswers: ["Chrysler", "Plymouth", "Toyota", "Dodge"],
        answer: "Plymouth",
        meme: "assets/images/plymouth.jpg"

    },
    {
        question: "What is Peggy Bundy's maiden name?",
        panswers: ["Wanker", "Smith", "Farmer", "Jones"],
        answer: "Wanker",
        meme: "assets/images/Peggy.gif"
    },
    {
        question: "What is Al's nickname for Kelly?",
        panswers: ["Sugar", "Pumpkin", "Doll", "Darling"],
        answer: "Pumpkin",
        meme: "assets/images/alandkelly.jpg"
    },
    {
        question: "What is 'Bud' Bundy's real first name?",
        panswers: ["Robert", "Buddy", "William", "Buderick"],
        answer: "Buderick",
        meme: "assets/images/bud.gif"
    },
    {
        question: "What was the name of the Bundy's first dog?",
        panswers: ["Lucky", "Scooter", "Buck", "Lassie"],
        answer: "Buck",
        meme: "assets/images/buck.gif"
    },
    {
        question: "What was the Bundy's female neighbor's name?",
        panswers: ["Darcy", "Lucy", "Marcy", "Rhonda"],
        answer: "Marcy",
        meme: "assets/images/marcy.gif"
    },
    {
        question: "How many seasons did Married with Children run?",
        panswers: ["7", "11", "13", "15"],
        answer: "11",
        meme: "assets/images/cast.jpg"
    },
    {
        question: "Al Bundy founded what orginazition?",
        panswers: ["Yes Ma'am", "No Ma'am", "Bon Bon Voyage", "Bowling Shoe Salesmen"],
        answer: "No Ma'am",
        meme: "assets/images/nomaam.jpg"
    }
]

// this is the area of index that will change
let card = $("#quiz-area")

let counterStart = 15;
let timer;

let game = {
    questions: questions,
    currentQuestion: 0,
    counter: counterStart,
    correct: 0,
    incorrect: 0,
    unanswered:0,


    countdown: function () {
       
        
        // * decrement counter
        game.counter--;
        // * use jquery to put dynamically put logic onto the page
       $("#counter-number").text(game.counter);
        if (game.counter === 0){
            game.timeUp(); 
        };
    },

    loadQuestion: function () {
        //     * set timer 
        //     * timer = setInterval(game.countdown, 1000) 
        timer = setInterval(game.countdown,1000);
        // * dynamicatly add question into card variable
        //      * *hint* card.html ("<h2>" + "</h2>")
        card.html("<h1>" + questions[this.currentQuestion].question + "</h1>");

                // * for loop to run through the
        //     * questions
        //     * a dynamically added buttons with answer options 
        for(i=0; i < questions[this.currentQuestion].panswers.length; i++){
          card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].panswers[i] + "'>"+questions[this.currentQuestion].panswers[i]+"</button>")
        }
         
       
    },

    nextQuestion: function () {
        // * set the counter
        //  game.counter = countStartNumber
        game.counter = counterStart;
        // * use jquery to change the text of the game counter
        $("#counter-number").html(game.counter);
        // * increment the currentQuestion by one
        game.currentQuestion++;
        // * call the loadQuestion function
        game.loadQuestion();
    },

    timeUp: function () {
        // * clearInterval(timer)
        clearInterval(timer)
        game.unanswered++;
        // * use jquery to change the text of the game counter
        $("#counter-number").html(game.counter);
        // * dynamically add out of time to the card
        card.html("<h1>Out of Time!</h1>")
        // * append the Correct answer to the card
        card.append("<h1> The correct answer is: " + questions[game.currentQuestion].answer)+"</h1>";
    
        // * append image/gif to the card 
        card.append("<img class='meme' src='"+questions[game.currentQuestion].meme +"'/>");
        setTimeout(game.nextQuestion, 5*1000);

        // if(this.currentQuestion === questions.length -1){
        //     setTimeout(game.results, 5 * 1000)
        // }
        // else{
        //     setTimeout(game.nextQuestion, 5*1000);

        // }
    },

    results: function () {
        // * clearInterval
        clearInterval(timer);
        // *  dynamically add html to let them know of there results
        card.html("<h1>Here are your results!</h1>");
        // * use jquery to add html of game.counter to the id of counter-number
        // * add how many correct answers they got
        card.html("<h1>Incorrect: " + game.correct + "</h1>");
        card.html("<h1>Incorrect: " + game.incorrect + "</h1>");
        card.html("<h1>Incorrect: " + game.unanswered + "</h1>");
        // * add how many incorrect answer they got
        // * add how many unanswered 
        // * add a start over button
    },

    clicked: function (event) { 
        // * clearInterval(timer)

        clearInterval(timer);
        console.log ("you clicked: " + $(".answer-button").attr("data-name"));
        console.log("the answer is: " + questions[this.currentQuestion].answer);
               // * if/ else statment for when an answer is clicked
        if (($(event).attr("data-name")) === questions[this.currentQuestion].answer){           
            
            game.answeredCorrectly();
        }
            
        else {
            game.answeredIncorrectly();
        }
        // * if correct run answeredCorrectly() function
        // * else run answeredIncorrectly() function
    },

    answeredIncorrectly: function () {
        // * add a point to the incorrect column
        game.incorrect++;
        // * clearInterval(timer)
        clearInterval(timer);
        // * dynamically add html to let them know they are wrong
        card.html("<h1>That was incorrect!</h1>");
        // * add the right answer
        // * add the image 
        card.append("<h1> The correct answer is: " + questions[game.currentQuestion].answer) + "</h1>";
         card.append("<img class='meme' src='"+questions[game.currentQuestion].meme +"'/>");
        // * if / else statment
        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 5 * 1000);
          }
          else {
            setTimeout(game.nextQuestion, 5 * 1000);
          }
       
     },

    answeredCorrectly: function () {
        game.correct++;
        console.log("correct: "+ game.correct);
        // * clearInterval(timer)
        clearInterval(timer);
        // * dynamically add html to let them know they are wrong
        card.html("<h1>That was Correct!</h1>")
              // * add the image 
        card.append("<img class='meme' src='"+questions[game.currentQuestion].meme +"'/>");
        // * if / else statment
        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 5 * 1000);
          }
          else {
            setTimeout(game.nextQuestion,5*1000);
          }
       
     },

    reset: function () { },

}

$(document).on("click", "#start", function () {
    $("#sub-wrapper").prepend("<h1>Time Remaining: <span id='counter-number'>15</span> Seconds</h1>");
        game.loadQuestion();
});

$(document).on("click", "#button", function (event) {
    game.clicked(event);
 
});

$(document).on("click", "#start-over", function () {
    game.reset();
});



// }
// create a function to pass through the arrays and return coordination question, possible answer and answer
// create a function (possibly included above) to start a 30 second timer.
// create a a function so that when start is clicked:
    // "start" disapears
    // 30 second timer appears and starts coundown(function from above)
    // questions and possible answers appear
        // if user answers correct, all text disappers and new text appears congrats, with a pic
        // if user answers incorrect...new text with correct answer and pic
        // if user does not answer when timer runs out, new text with correct answer and pic
        // after 5 seconds of the info screen, new question appears
        // after all questions are answered, new text showing correct, incorrect, unanswered tally appears
            // also includes "Start Over" that when clicked should reset all the scores and start back at question 1.



