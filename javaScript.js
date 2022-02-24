// function to calculate the result of the questionnaire
function submitAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var answer1 = 0;
  var answer2 = 0;
  var answer3 = 0;

  
  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'A1') {
        answer1 = answer1 + 1;
      }
      if (choices[i].value == 'A2') {
        answer2 = answer2 + 1;
      }
	  if (choices[i].value== 'A3') {
		 answer3 = answer3 + 1; 
	  }
    }
  }
  
  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
  var maxscore = Math.max(answer1,answer2);
  
  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  
  if (answer1 == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You should definetally go for it!";
  }
  if (answer2 == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Well done! Seems like you are healthy and fit and you dont really need the treatment. Althought I definetally recommend to you to try it at least!";
  }
  if (answer3 == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Please talk to your therapist about your conditions. If the conditions are mild, you might be able to get a treatment";
  }
   
  // If you add more choices, you must add another response below.
}

// program to reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
}