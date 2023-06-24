//Initialising key variables
let screenMode = 0;
let opposingTeam = "The Computer";
let userTeam = "User Team"
let passScreenSize = true;

//Initialising game variables
let inning = 1; let userScore = 0 ; let computerScore = 0 ; let userAttacking = true;

//Initialising the bases
let firstBaseActive = false ; let secondBaseActive = false ; let thirdBaseActive = false ; 

//Initialising the timer increment in the system
let counter=0

//Initialising the screenSetupModes
let screen0Displayed = false
let screen1SDisplayed = false
let screen2SDisplayed = false
let smallScreenDisplayed = false

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

    //Checking to see whether the screen size is big enough
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
        if (counter >= 1){
          screenMode = 2
        }
      }

      //Setting up the play screen of the website (Batting)
      if (screenMode == 2 && screen2SDisplayed==false){
        screen2Setup()
      }
    }

    //Setting up output if screen size is too small
    else{
      if (smallScreenDisplayed==false){
        smallScreenSetup()
      }
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

    smallScreenDisplayed=true
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
    
    //Setting key variables needed for this algorithm
    counter=0
    screen1SDisplayed = true

    //Hiding preexisiting elements
    inp1.hide()
    button1.hide()

    //Setting up the display for this page
    background(255)
    textStyle(BOLD)
    text("Inning : ",300,100)
    text(inning, 600,100)
    text(userTeam + " : ",100,240)
    text(userScore,600,240)
    text(opposingTeam + " : ",100,380)
    text(computerScore,600,380)
  
    //Deciding whether to display top or bottom of inning
    fill(0)
    if (userAttacking==true){
      triangle(680,100,760,100,720,60)
    }
    else{
      triangle(680,60,760,60,720,100)
    }
  }

  //Function to setup the code for the playing screen of the game
  function screen2Setup(){
    background(220,220,220)

    //Code to split the screen into segments
    line(310,0,310,360)
    line(930,0,930,360)
    line(0,360,1240,360)

    //Showing the input box for the user to enter (and text for it)
    textSize(40)
    fill(0)
    text("Enter your number : ",10,420)
    inp2.show()

    //Creating the playing field for the game
    fill(0,255,0)
    rect(310,0,670,360)

    //Making the bases
    if (firstBaseActive==false){
      fill(255)
      quad(920,180,880,220,840,180,880,140)
    }
    else{
      fill(255,0,0)
      quad(920,180,880,220,840,180,880,140)
    }

    if (secondBaseActive==false){
      fill(255)
      quad(600,60,640,20,680,60,640,100)
    }
    else{
      fill(255,0,0)
      quad(600,60,640,20,680,60,640,100)
    }

    if (thirdBaseActive==false){
      fill(255)
      quad(350,180,390,220,430,180,390,140)
    }
    else{
      fill(255,0,0)
      quad(920,180,880,220,840,180,880,140)
    }

    fill(255)
    quad(600,300,640,340,680,300,640,260)

  }

  function inputSetup(){

    //Creating the input box for the Opposing Team (Main Screen)
    inp1 = createInput('')
    inp1.position(760, 336)
    inp1.size(300,60)
    inp1.input(ChangeOpposingTeam)
    inp1.hide()

    //Creating the input box for the number input 
    inp2 = createInput('')
    inp2.position(460,520)
    inp2.size(300,60)
    inp2.input(gameAction)
    inp2.hide()
  
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

  //Function to process the input of the user during the game
  function gameAction(){
    if (userAttacking==true){

    }
    else{

    }
  }