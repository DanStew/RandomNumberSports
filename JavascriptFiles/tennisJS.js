//Initialising variables

let screenMode //Initialises the screen mode of the game
let passScreenSize //Determines whether screen large enough or not
let horizontalScreen //Determines the layout of the screen
let counter //Determines the time throughut the game
let buttonSelected //Determines the button selected by the user (Games or Sets) on the home screen

let opponent ; let userPlayer 

let totalGames ; let totalSets ; let userGames ; let userSets ; let userPoints ; let opponentGames ; let opponentSets ; let opponentPoints;

let screen0Displayed ; let screen1Displayed;

function initialiseVariables(){
  screenMode = 0
  passScreenSize = true
  horizontalScreen = true
  counter = 0
  buttonSelected = "Sets"

  opponent = "The Computer"
  userPlayer = "User Player"

  totalGames = 3
  totalSets = 1
  userGames = 0 
  userSets =0
  userPoints =0 
  opponentGames =0 
  opponentSets =0 
  opponentPoints=0

  screen0Displayed = false
  screen1Displayed = false
}

//Key Functions

function setup() {

  //Initialising global variables
  initialiseVariables()

  if(windowWidth < 1240 || windowHeight < 460){
    if (windowWidth < 338 || windowHeight < 580){
      createCanvas(windowWidth*0.97,windowHeight*0.8)
      background(255)
      passScreenSize=false
    }
    else{

      createCanvas(338,680)
      horizontalScreen = false

      //Setting up the inputs and buttons used in the system
      inputSetup()
      buttonSetup()
  
      //Function to set up the timer for the transition screen
      setInterval(timeIt,1000)

    }
  }
  else{
    createCanvas(1240, 580)

    //Setting up the inputs and buttons used in the system
    inputSetup()
    buttonSetup()

    //Function to set up the timer for the transition screen
    setInterval(timeIt,1000)
  }
}
  
  function draw() {
    if (passScreenSize == true){
      if (screenMode == 0 && screen0Displayed == false){
        screen0Setup()
      }
      if (screenMode == 1 && screen1Displayed == false){
        screen1Setup()
      }
    }
    else{

    }
  }

  //Setup Functions

  //Function to set up the home screen of the game
  function screen0Setup(){

    background(120,240,130)

    //The text of the main screen
    fill(0)
    textStyle(BOLD)

    if (horizontalScreen == true){
      textSize(80)
      text("Tennis", 460, 108)
      textSize(56)
      textStyle(NORMAL)
      text("Opponent : ", 760, 360)
      text("User Player : ",760,200)

      if (buttonSelected == "Sets"){
        textStyle(NORMAL)
        textSize(60)
        fill(122,122,122)
        rect(100,200,200,80)
        fill(188,188,188)
        rect(300,200,200,80)
        fill(255)
        text("Sets",140,260)
        textSize(50)
        text("Games",304,260)

        textSize(60)
        fill(0)
        text("Sets : ",100,400)
      }
      else{
        textStyle(NORMAL)
        textSize(60)
        fill(122,122,122)
        rect(300,200,200,80)
        fill(188,188,188)
        rect(100,200,200,80)
        fill(255)
        text("Games",304,260)
        textSize(50)
        text("Sets",140,260)

        textSize(60)
        fill(0)
       text("Games : ",60,400)
      }
    }
    else{
      textSize(60)
      textStyle(BOLD)
      text("Tennis", 10, 100)
      textSize(40)
      textStyle(NORMAL)
      text("Opponent : ", 20, 400)
      text("User Player : ",40,200)
    }
    

    //Code to set the inputs and buttons for the website
    inp1.show()
    inp1.value("")
    inp2.show()
    inp2.value("")
    inp3.show()
    inp3.value("")
    button1.show()
    button2.hide()

    //Code to ensure code isn't repeated
    screen0Displayed = true
  }

  //Function to setup the game screen of the game
  function screen1Setup(){
    background(48,200,0)

    //Creating the design of the game
    fill(148,255,115)
    rect(100,100,1040,380)
    stroke(255)
    strokeWeight(10)
    line(100,100,1140,100)
    line(100,160,1140,160)
    line(100,480,1140,480)
    line(100,420,1140,420)
    line(100,100,100,480)
    line(1140,100,1140,480)
    line(616,160,616,420)
    line(362,160,362,420)
    line(878,160,878,420)
    line(362,290,878,290)

    //Creating the game score corner
    line(60,20,500,20)
    line(60,120,500,120)
    line(60,20,60,120)
    line(500,20,500,20)
    fill(122,122,122)
    rect(60,20,440,100)
    //The insides of the leaderboard
    line(380,20,380,120)
    line(440,20,440,120)
    line(320,20,320,120)
    line(60,70,500,70)
    textSize(32)
    strokeWeight(0)
    fill(255)
    text(userPlayer,70,55)
    text(opponent,70,105)
    text(userSets,340,55)
    text(userGames,400,55)
    text(userPoints,460,55)
    text(opponentSets,340,105)
    text(opponentGames,400,105)
    text(opponentPoints,460,105)
    

    //Hiding inputs and buttons
    inp1.hide()
    inp2.hide()
    inp3.hide()
    button1.hide()

    //Code to ensure this code isn't repeated
    screen1Displayed = true
  }

  //Function to setup the inputs on the website
  function inputSetup(){

    //Creating the input box for the Opposing Team (Main Screen)
    inp1 = createInput('')
    inp1.position(760, 540)
    inp1.size(300,60)
    inp1.input(ChangeOpponent)
    inp1.hide()

    //Creating the input box for the User Team (Main Screen)
    inp2 = createInput('')
    inp2.position(760, 380)
    inp2.size(300,60)
    inp2.input(ChangeUserPlayer)
    inp2.hide()

    //Creating the input box for the sets/games
    inp3 = createInput('')
    inp3.position(300,494)
    inp3.size(200,60)
    inp3.input(GamesSetNumber)
    inp3.hide()

    if (horizontalScreen == false){
      inp1.position(20,520)
      inp2.position(20,320)
      inp3.position(30,580)
    }
  }

  //Function to set up the buttons on the website
  function buttonSetup(){

    //Creating the button to start the game (Main Screen)
    button1 = createButton("Start Game")
    button1.size(180,60)
    button1.position(520,620)
    button1.mousePressed(StartGame)
    button1.hide()

    //Creating the button to play again (End Screen)
    button2 = createButton("Play Again")
    button2.size(180,60)
    button2.position(520,500)
    button2.mousePressed(playAgain)

    if (horizontalScreen == false){
      button1.position(80,600)
      button2.position(80,580)
    }
  }

  //Game Functions

  function mouseClicked(){
    console.log(mouseX)
    console.log(mouseY)
    if (mouseY >= 200 && mouseY <= 280){
      if (mouseX >= 100 && mouseX <= 299){
        buttonSelected = "Sets"
        screen0Displayed = false
      }
      else if (mouseX >= 300 && mouseX <= 500){
        buttonSelected = "Games"
        screen0Displayed = false
      }
    }
  }

  //Other functions
  
  //Function to change the value of the opposing team to that inputted by the user
  function ChangeOpponent(){
    opponent = this.value()
  }

  //Function to change the value of the user team to that inputted by the user
  function ChangeUserPlayer(){
    userPlayer = this.value()
  }

  //Function to choose the amount of games / sets you want
  function GamesSetNumber(){
    if (this.value() != 0){
      if (buttonSelected == "Sets"){
        totalSets = this.value()
      }  
      else{
        totalGames = this.value()
      }
    } 
  }

  //Function completed when startGame button selected
  function StartGame(){
    screenMode=1
  }

  //Function for the play again button
  function playAgain(){
    screenMode = 0
    screen0Displayed = false
    initialiseVariables()
  }


  //Function to increment the timer for the transistion screen
  function timeIt(){
    counter++
  }