# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
  - branch: board-game
  - mapped over the array in state to dynamically render 9 squares
  - used flexbox to position the squares
  - passed the value of the array in state to square
  - styled the squares

- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
  - branch: index-position
  - added on onClick to the square div
  - added a handleClick method to square
  - passed index to square and to the handleClick
  - created handleGamePlay in App.js
  - passed handleGamePlay to square to get the index through functional props

- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
  - branch: tree emoji
  - made a copy of the board 
  - updated the value at the particual index to be a tree emoji
  - emoji keyboard is control + command + spacebar

- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.
  - branch: treasure-bomb
  - added random location for bomb and treasure into state
  - added a conditional in the handleGamePlay method to produce different outcomes

- As a user, I can click on a “Play Again” button that will restart the game.
  - branch: game-reset
  - added functionality to the button to reset the board when clicked

- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.
  - branch guess-counter
  - created a function for counter/setCounter with a useState(5)
  - under the else statement for any square that doesn't contain the bomb or treasure it will setCounter(counter - 1)
  - I created a <p></p> under the button to display the counter

- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
  - branch: winner-alert
  - created an alert to appear if treasure box is clicked

- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
  - branch: try-again-alert
  - created an alert to appear if bomb box is clicked

- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
