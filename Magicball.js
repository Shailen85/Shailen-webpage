    // Possible answers
var answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function shakeMagic8Ball() {
    // Get a random answer
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    // Display the answer
    document.getElementById("text-answer").textContent = randomAnswer;
    document.getElementById("answer").style.backgroundImage = "url(Photos/pagegif/dragonfire1.gif)";
    document.getElementById("answer").style.opacity = "100%";
       
    setTimeout(function() {
        location.reload();
      }, 10000);
        
}

var openBoxId = null; // Keep track of the currently open box ID

function displayapp(boxId) {
  var box = document.getElementById(boxId);

  // Check if there is an open box
  if (openBoxId !== null) {
    var openBox = document.getElementById(openBoxId);
    openBox.style.display = "none"; // Close the currently open box
  }

  if (box.style.display === "none") {
    box.style.display = "block";
    openBoxId = boxId; // Update the open box ID
    document.getElementById("appbutton").style.color = "blue";
  } else {
    box.style.display = "none";
    openBoxId = null; // Reset the open box ID
  }
}
