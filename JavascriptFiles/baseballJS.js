//Initialising key variables
let screenMode = 0;
let opposingTeam = "The Computer";

//Initialising the timer increment in the system
let counter=0

//Initialising the screenSetupModes
let screen0Displayed = false
let screen1SDisplayed = false
let screen2SDisplayed = false

//Initialising Objects
let inp1 ;  
let button1;

function setup() {
    createCanvas(windowWidth*0.97, windowHeight*0.80)

    //Setting up the inputs and buttons used in the system
    inputSetup()
    buttonSetup()

    //Function to set up the timer for the transition screen
    setInterval(timeIt,1000)
  }
  
  function draw() {

    //Setting up the home screen of the game
    if (screenMode == 0 && screen0Displayed==false){
      MainScreenSetup()
    }

    //Setting up the transition screen of the website
    if (screenMode == 1 && screen1SDisplayed==false){
      screen1Setup()
    }
    else if (screenMode == 1){
      if (counter >= 10){
        screenMode = 2
      }
    }

    //Setting up the play screen of the website (Batting)
    if (screenMode == 2 && screen2SDisplayed==false){
      screen2Setup()
    }
  }


//Setup Functions

  //Function to set up the main text and background of the home screen
  function MainScreenSetup(){

    background(120,240,130)

    //The text of the main screen
    textSize(50)
    textStyle(BOLD)
    text("BASEBALL", windowWidth*0.3, windowHeight*0.2)
    textSize(32)
    textStyle(NORMAL)
    text("Opposing Team : ", windowWidth*0.1, windowHeight*0.4)

    //Showing the inputs and buttons needed for the page
    inp1.show()
    button1.show()

    //Making it so code isn't repeated
    screen1Displayed = true
  }

  //Function to setup the code for the transition page (Between Innings)
  function screen1Setup(){
    counter=0
    screen1SDisplayed = true
  }

  //Function to setup the code for the playing screen of the game
  function screen2Setup(){
    background(220,220,220)

    //Hiding preexisiting elements
    inp1.hide()
    button1.hide()

    //Code to split the screen into segments
    line(windowWidth*0.25,0,windowWidth*0.25,windowHeight*0.8)
    line(windowWidth*0.75,0,windowWidth*0.75,windowHeight*0.8)
  }

  function inputSetup(){

    //Creating the input box for the Opposing Team (Main Screen)
    inp1 = createInput('')
    inp1.position(windowWidth*0.64, windowHeight*0.6)
    inp1.size(160)
    inp1.input(ChangeOpposingTeam)
    inp1.hide()
  
  }
  
  function buttonSetup(){
  
    //Creating the button to start the game (Main Screen)
    button1 = createButton("Start Game")
    button1.position(windowWidth*0.4,windowHeight*0.85)
    button1.mousePressed(StartGame)
  
  }

//Random Functions

  //Function to change the value of the opposing team to that inputted by the user
  function ChangeOpposingTeam(){
    opposingTeam = this.value()
  }
  
  //Function completed when startGame button selected
  function StartGame(){
    screenMode=1
  }

  //Function to increment the timer for the transistion screen
  function timeIt(){
    counter++
  }