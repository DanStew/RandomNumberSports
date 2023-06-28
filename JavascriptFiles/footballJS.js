//Initialising key variables
let screenMode //Defines what screen the system shows
let counter // Timer Variable
let passScreenSize // Variable testing whether screen large enough or not
let opposingTeam //The opposing team name of the system
let userTeam //The user team name of the system
let userScore //The score of the user
let computerScore // The score of the computer
let userAttacking

//Initialising inputs and buttons
let inp1 ; let inp2
let button1

//Screen Mode Variables
let screen0Displayed ; let smallScreenDisplayed; let screen1Displayed

function initialiseVariables(){
  screenMode = 0
  counter = 0 
  passScreenSize = true
  opposingTeam = "The Computer"
  userTeam = "User Team"
  userScore = 0
  computerScore = 0
  userAttacking = true

  //Initialising screen modes
  screen0Displayed = false
  screen1Displayed = false
  smallScreenDisplayed = false
}

//Key Functions

function setup() {

  //Initialising global variables
  initialiseVariables()

  if(windowWidth < 1240 || windowHeight < 460){
    createCanvas(windowWidth*0.97,windowHeight*0.8)
    background(255)
    passScreenSize=false
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
        bottomBannerSetup()
      }

      else if (screenMode == 1 && screen1Displayed == false){
        screen1Setup()
        bottomBannerSetup()
      }
    }
    else{
      if (smallScreenDisplayed == false){
        smallScreenSetup()
      }
    }
  }

  //Setup Functions

  function bottomBannerSetup(){
    fill(148,148,148)
    noStroke()
    rect(0,460,1240,580)
    fill(220,220,220)
    rect(0,480,1240,580,20)
    fill(0)
    text("Hello", 500,560)
  }

  function screen0Setup(){

    background(120,240,130)

    //The text of the main screen
    fill(0)
    textSize(80)
    textStyle(BOLD)
    text("FOOTBALL", 394, 108)
    textSize(56)
    textStyle(NORMAL)
    text("Opposing Team : ", 124, 300)
    text("User Team : ",124,200)

    //Code to set the inputs and buttons for the website
    inp1.show()
    inp1.value("")
    inp2.show()
    inp2.value("")
    button1.show()

    //Code to ensure code isn't repeated
    screen0Displayed = true
  }

  function screen1Setup(){

    //Code to display the design of the screen
    background(220,220,220)

    //Code to split the screen into segments
    line(310,0,310,360)
    line(0,360,1240,360)

    //Showing the input box for the user to enter (and text for it)
    textSize(40)
    fill(0)
    text("Enter your number : ",10,420)

    //Creating the playing field for the game
    fill(120,240,130)
    rect(310,0,1240,360)

    //Code for the shape of the goal
    fill(255)
    noStroke()
    //Post rectangles
    rect(360,60,60,280)
    rect(360,60,800,60)
    rect(1160,60,60,280)

    //Inside of goal
    fill(0,181,226)
    rect(420,120,740,220)
    fill(255)
    rect(646,120,2,220)
    rect(893,120,2,220)
    rect(420,193,740,2)
    rect(420,267,740,2)

    //Putting the numbers inside the net
    textSize(30)
    textStyle(BOLD)
    text("1",533,167)
    text("2",770,167)
    text("3",997,167)
    text("4",533,236)
    text("5",770,236)
    text("6",997,236)
    text("7",533,310)
    text("8",770,310)
    text("9",997,310)
    
    //First third
    fill(0)
    textStyle(BOLD)
    text("Score", 100,60)
    text(userTeam + " : ",10,140)
    text(userScore,150,200)
    text(opposingTeam + " : ",10,280)
    text(computerScore,150,340)

    //Setting whether user is taking or saving
    
    textSize(50)
    fill(255)
    rect(540,20,440,80)
    fill(0)
    if (userAttacking == true){
      text("Taking Penalty",580,80)
    }
    else{
      text("Saving Penalty",580,80)
    }

    //Code to hide and show buttons and inputs
    inp1.hide()
    inp2.hide()
    button1.hide()
    inp3.show()
    inp3.value("")

    //Code to ensure code isn't repeated
    screen1Displayed = true
  }

  //Function to set up the screen if the screen size is too small for the system
  function smallScreenSetup(){
    fill(0)
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

  function inputSetup(){

    //Creating the input box for the Opposing Team (Main Screen)
    inp1 = createInput('')
    inp1.position(760, 396)
    inp1.size(300,60)
    inp1.input(ChangeOpposingTeam)
    inp1.hide()

    //Creating the input box for the User Team (Main Screen)
    inp2 = createInput('')
    inp2.position(760, 296)
    inp2.size(300,60)
    inp2.input(ChangeUserTeam)
    inp2.hide()

    //Creating the input box for the number input 
    inp3 = createInput('')
    inp3.position(460,520)
    inp3.size(300,60)
    inp3.input(gameAction)
    inp3.hide()
  }

  function buttonSetup(){

    //Creating the button to start the game (Main Screen)
    button1 = createButton("Start Game")
    button1.size(180,60)
    button1.position(520,500)
    button1.mousePressed(StartGame)
    button1.hide()
  }

  //Game Functions

  //Function to process the inputs of the user in the game
  function gameAction(){
    if (this.value() != 0){

      //If the user is taking the penalty
      if (userAttacking == true){

        //Getting the values
        userValue = this.value()
        computerValue = round(random(1,9))
        chance = round(random(1,3))

        takingPenaltyProcess(userValue,computerValue,chance)
      }

      //If the user is saving the penalty
      else{

      }
    }
  }

  //Code to process the actions when the user takes a penalty
  function takingPenaltyProcess(userValue,computerValue,chance){

  }

  //Other Functions

  //Function to change the value of the opposing team to that inputted by the user
  function ChangeOpposingTeam(){
    opposingTeam = this.value()
  }

  //Function to change the value of the user team to that inputted by the user
  function ChangeUserTeam(){
    userTeam = this.value()
  }

  //Function to increment the timer for the transistion screen
  function timeIt(){
    counter++
  }

  //Function completed when startGame button selected
  function StartGame(){
    screenMode=1
  }