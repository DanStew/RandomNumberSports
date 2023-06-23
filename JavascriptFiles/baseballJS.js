//Initialising key variables
let screenMode = 0;
let opposingTeam = "The Computer";
let passScreenSize = true;

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
    if(windowWidth < 1240 || windowHeight < 460){
      createCanvas(windowWidth*0.97,windowHeight*0.8)
      background(255)
      passScreenSize=false
    }
    else{
      createCanvas(1240, 460)

      //Setting up the inputs and buttons used in the system
      inputSetup()
      buttonSetup()
  
      //Function to set up the timer for the transition screen
      setInterval(timeIt,1000)
    }
  }
  
  function draw() {
    if (passScreenSize == true){
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
    else{
      smallScreenSetup()
    } 
  }


//Setup Functions

  //Function to setup the screen for when the users screen is too small
  function smallScreenSetup(){
    textSize(50)
    textStyle(BOLD)
    text("Screen Size Issue", windowWidth*0.15, windowHeight*0.1)
    textStyle(NORMAL)
    textSize(40)
    text("Screen is too small", windowWidth*0.2, windowHeight*0.3)
    text("to display game", windowWidth*0.26, windowHeight*0.40)
    text("Please resize screen and refresh", 10, windowHeight*0.60)
  }

  //Function to set up the main text and background of the home screen
  function MainScreenSetup(){

    background(120,240,130)

    //The text of the main screen
    textSize(80)
    textStyle(BOLD)
    text("BASEBALL", 394, 108)
    textSize(56)
    textStyle(NORMAL)
    text("Opposing Team : ", 124, 240)

    //Showing the inputs and buttons needed for the page
    inp1.show()
    button1.show()

    //Making it so code isn't repeated
    screen1Displayed = true
  }

  //Function to setup the code for the transition page (Between Innings)
  function screen1Setup(){
    counter=0
    console.log(opposingTeam)
    screen1SDisplayed = true
  }

  //Function to setup the code for the playing screen of the game
  function screen2Setup(){
    background(220,220,220)

    //Hiding preexisiting elements
    inp1.hide()
    button1.hide()

    //Code to split the screen into segments
    line(310,0,310,460)
    line(930,0,930,460)
  }

  function inputSetup(){

    //Creating the input box for the Opposing Team (Main Screen)
    inp1 = createInput('')
    inp1.position(760, 336)
    inp1.size(300,60)
    inp1.input(ChangeOpposingTeam)
    inp1.hide()
  
  }
  
  function buttonSetup(){
  
    //Creating the button to start the game (Main Screen)
    button1 = createButton("Start Game")
    button1.size(180,60)
    button1.position(520,440)
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