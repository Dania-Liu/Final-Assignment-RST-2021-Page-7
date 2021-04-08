// Sets default value.
let sixthAnswer = 0

// Connects button that allows users to submit their answers to JavaScript.
document.getElementById('sixth-submit').addEventListener('click', sixthSubmit)
// Connects button that allows users to reveal a hint to JavaScript.
document.getElementById('sixth-hint').addEventListener('click', sixthHint)

// Creates function that activates when the user clicks on "Submit" for the sixth riddle.
function sixthSubmit () {
  sixthAnswer = document.getElementById('sixth-answer').value
  if (sixthAnswer === 'lepre') {
    document.getElementById('sixth-outcome').innerHTML = ('Correct, please proceed.')
  } else {
    document.getElementById('sixth-outcome').innerHTML = ('Incorrect, try again.')
  }
}

// Creates function that reveals an image when the user clicks on "Hint" for the sixth riddle.
function sixthHint () {
  document.getElementById('sixth-picture').style.display = 'block'
}
