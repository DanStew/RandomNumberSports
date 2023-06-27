//Initialising key variables
let screenMode = 0;
let opposingTeam = "The Computer";
let userTeam = "User Team"
let passScreenSize = true;

//Initialising game variables
let inning = 1; let userScore = 0 ; let computerScore = 0 ; let userAttacking = true; let fouls = 0 ; let balls = 0; let outs = 0;

//Initialising the bases
let firstBaseActive = false ; let secondBaseActive = false ; let thirdBaseActive = false ; 

//Initialising the timer increment in the system
let counter=0

//Initialising the screenSetupModes
let screen0Displayed = false
let screen1Displayed = false
let screen2Displayed = false
let screen3Displayed = false
let screen4Displayed = false
let screen5Displayed = false
let screen6Displayed = false
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
      else if (screenMode == 1 && screen1Displayed==false){
        screen1Setup()
      }
      else if (screenMode == 1){
        //Should be 5 / 10 seconds
        if (counter >= 1){
          screenMode = 2
        }
      }

      //Setting up the play screen of the website (Batting)
      else if (screenMode == 2 && screen2Displayed==false){
        screen2Setup()
      }
      else if (screenMode==2){

      }

      //Displaying the home run screen of the website
      else if (screenMode==3 && screen3Displayed==false){
        screen3Setup()
      }
      else if (screenMode==3){
        if (counter>=3){
          screenMode=2
        }
      }

      //Displaying the runs scored screen (other than home runs)
      else if (screenMode ==4 && screen4Displayed==false){
        screen4Setup()
      }
      else if (screenMode == 4){
        if (counter>=3){
          screenMode=2
        }
      }

      //Displaying the Positive Game Action Screen
      else if (screenMode == 5 && screen5Displayed == false){
        screen5Setup()
      }
      else if (screenMode == 5){
        if (counter>=2){
          screenMode=2
        }
      }

      //Displaying the Negative Game Action Screen
      else if (screenMode == 6 && screen6Displayed == false){
        screen6Setup()
      }
      else if (screenMode == 6){
        if (counter>=2){
          screenMode=2
        }
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
    screen0Displayed = true
  }

  //Function to setup the code for the transition page (Between Innings)
  function screen1Setup(){
    
    //Setting key variables needed for this algorithm
    counter=0
    screen1Displayed = true

    //Hiding preexisiting elements
    inp1.hide()
    button1.hide()

    //Setting up the display for this page
    background(220,220,220)
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
      quad(350,180,390,220,430,180,390,140)
    }

    fill(255)
    quad(600,300,640,340,680,300,640,260)

    //Layout the text on the outside thirds

    //First third
    fill(0)
    text("Score", 100,60)
    text(userTeam + " : ",10,140)
    text(userScore,150,200)
    text(opposingTeam + " : ",10,280)
    text(computerScore,150,340)

    //Third third
    text("Innings : ", 1000,80)
    text(inning,1180,80)
    text("Fouls : ",1000,160)
    text(fouls,1180,160)
    text("Balls : ",1000,240)
    text(balls,1180,240)
    text("Outs : ",1000,320)
    text(outs,1180,320)

    //Stopping this code from running again
    screen2Displayed=true

    //Allowing other screens to be displayed again
    screen3Displayed=false

  }

  function screen3Setup(){

    //Setting key variables
    counter = 0
    screen3Displayed=true

    //Hiding the input
    inp2.hide()

    //Setting the designs of the screen
    //Setting up the display for this page
    background(220,220,220)
    textStyle(BOLD)
    text("Home Run Scored!",400,100)
    text(userTeam + " : ",100,240)
    text(userScore,600,240)
    text(opposingTeam + " : ",100,380)
    text(computerScore,600,380)
  }

  function screen4Setup(){
    //Setting key variables
    counter = 0
    screen4Displayed = true

    //Hiding the input
    inp2.hide()

    //Collecting the action from local storage
    scoredRuns = getItem("scoredRuns")
    positiveGameAction = getItem("positiveGameAction")

    //Setting the design of the screen
    background(220,220,220)
    textStyle(BOLD)
    textSize(50)
    text(positiveGameAction + " - " + scoredRuns + " Runs Scored",400,120)
    text(userTeam + " : ",100,240)
    text(userScore,600,240)
    text(opposingTeam + " : ",100,380)
    text(computerScore,600,380)
  }

  function screen5Setup(){
    //Setting key variables
    counter = 0
    screen5Displayed = true

    //Hiding the input
    inp2.hide()

    //Collecting the action from local storage
    positiveGameAction = getItem("positiveGameAction")

    //Setting the design of the screen 
    background(0,255,0)
    textStyle(BOLD)
    fill(255)
    textSize(200)
    text(positiveGameAction,300,280)
    
  }

  function screen6Setup(){
    //Setting key variables
    counter = 0
    screen6Displayed = true

    //Hiding the input
    inp2.hide()

    //Collecting the action from local storage
    negativeGameAction = getItem("negativeGameAction")

    //Setting the design of the screen 
    background(255,0,0)
    textStyle(BOLD)
    fill(255)
    textSize(200)
    text(negativeGameAction,300,280)
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

//Game Functions

  //Function to process the input of the user during the game
  function gameAction(){
    if (userAttacking==true){
      if (this.value() != 0){

        //Taking in the user and computer value
        userValue = this.value()
        computerValue = round(random(1,10))

        //Taking in the chance variable (Entering luck based)
        chance = round(random(1,4))

        //Function called to process the score
        processScoreAttack(userValue,computerValue,chance)
      }
    }
    else{

    }
  }

  //Function to implement the changes to the game after input entered on attack
  function processScoreAttack(userValue,computerValue,chance){

    //Working out the difference between the two inputs
    if (userValue>computerValue){
      difference = userValue - computerValue
    }
    else{
      difference = computerValue - userValue
    }

    //Process the score if userValue == computerValue
    if (userValue == computerValue && chance == 3){
      console.log("Home Run")

      //Processes the home run, changing userScore
      userHomeRunProcess()
      changeBatter(false)
    }
    else if (userValue == computerValue && chance == 2){
      console.log("Double")
      userDoubleProcess()
      changeBatter(false)
    }

    //Processing score where difference is 1
    else if (difference == 1 && chance == 3){
      console.log("Triple")
      userTripleProcess()
      changeBatter(false)
    }
    else if (difference == 1 && chance == 2){
      console.log("Double")
      userDoubleProcess()
      changeBatter(false)
    }

    //Processing score where difference is 2
    else if (difference == 2 && chance == 3){
      console.log("Double")
      userDoubleProcess()
      changeBatter(false)
    }
    else if (difference == 2 && chance == 2){
      console.log("Single")
      userSingleProcess()
      changeBatter(false)
    }

    //Processing score where difference is 3
    else if (difference == 3 && chance == 3){
      console.log("Single")
      userSingleProcess()
      changeBatter(false)
    }
    else{
      console.log("No Hit")
      userNoHitProcess()
    }

    //Make changes to the game screen
    screen2Displayed=false
  }

  //Function to process the homeruns scored by the user
  function userHomeRunProcess(){
    userScore++
    if (firstBaseActive == true){
      userScore++
      firstBaseActive = false
    }
    if (secondBaseActive==true){
      userScore++
      secondBaseActive=false
    }
    if (thirdBaseActive==true){
      userScore++
      thirdBaseActive=false
    }
  
    //Showing the homerun screen to the user
    screenMode=3
  }

  function userTripleProcess(){

    let scoredRuns = 0
    if (thirdBaseActive==true){
      userScore++
      thirdBaseActive = false
      scoredRuns++
    }
    if (secondBaseActive==true){
      userScore++
      secondBaseActive = false
      scoredRuns++
    }
    if (firstBaseActive == true){
      userScore++
      firstBaseActive = false
      scoredRuns++
    }

    thirdBaseActive = true

    //Need code to display the transition screens
    if (scoredRuns >= 1){
      screenMode = 4
      screen4Displayed = false
      storeItem("scoredRuns", scoredRuns)
      storeItem("positiveGameAction", "Triple")
    }
    else{
      screenMode = 5
      screen5Displayed = false
      storeItem("positiveGameAction", "Triple")
    }
    
    //Code to refresh the game screen
    screen2Displayed=false

  }

  function userDoubleProcess(){
    let scoredRuns = 0
    if (thirdBaseActive==true){
      userScore++
      thirdBaseActive = false
      scoredRuns++
    }
    if (secondBaseActive==true){
      userScore++
      secondBaseActive = false
      scoredRuns++
    }
    if (firstBaseActive == true){
      firstBaseActive = false
      thirdBaseActive = true
    }

    secondBaseActive = true

    //Need code to display the transition screens
    if (scoredRuns >= 1){
      screenMode = 4
      screen4Displayed = false
      storeItem("scoredRuns", scoredRuns)
      storeItem("positiveGameAction", "Double")
    }
    else{
      screenMode = 5
      screen5Displayed = false
      storeItem("positiveGameAction", "Double")
    }

    //Code to refresh the game screen
    screen2Displayed=false
  }

  function userSingleProcess(){

    let scoredRuns = 0
    if (thirdBaseActive==true){
      userScore++
      thirdBaseActive = false
      scoredRuns++
    }
    if (secondBaseActive==true){
      secondBaseActive = false
      thirdBaseActive = true
    }
    if (firstBaseActive == true){
      firstBaseActive = false
      secondBaseActive = true
    }

    firstBaseActive = true

    //Need code to display the transition screens
    if (scoredRuns >= 1){
      screenMode = 4
      screen4Displayed = false
      storeItem("scoredRuns", scoredRuns)
      storeItem("positiveGameAction", "Single")
    }
    else{
      screenMode = 5
      screen5Displayed = false
      storeItem("positiveGameAction", "Single")
    }

    //Code to refresh the game screen
    screen2Displayed=false
  }

  function userNoHitProcess(){
    action = round(random(1,7))

    if (action <= 2){
      console.log("Ball")
      balls++
      
      if (balls == 4){
        walkProcess()
      }
      else{
        //Code to implement the transition screen
        storeItem("positiveGameAction", "Ball")
        screenMode = 5
        screen5Displayed = false
      }
    }
    else if (firstBaseActive==true && action==3){
      console.log("Double Play")
      outs++
      changeBatter(true)
      secondBaseActive = false

      //Code to refresh the display of the screen
      storeItem("negativeGameAction", "Double Play")
      screenMode = 6
      screen6Displayed = false
      screen2Displayed = false
    }
    else if (action==4){
      console.log("Ground Ball")
      changeBatter(true)

      //Code to display the transition screen
      storeItem("negativeGameAction", "Ground Ball")
      screenMode = 6
      screen6Displayed = false
    }
    else if (action==5){
      console.log("Flyball")
      changeBatter(true)

      //Code to display the transition screen
      storeItem("negativeGameAction", "Flyball")
      screenMode = 6
      screen6Displayed = false
    }
    else{
      console.log("Foul")
      processFouls()

      //Code to display the transition screen
      storeItem("negativeGameAction", "Foul")
      screenMode = 6
      screen6Displayed = false
    }
  }

  //Code to process fouls in the game
  function processFouls(){
    fouls++
    if (fouls == 3){
      changeBatter(true)
    }
    screen2Displayed=false
  }

  //Code to process a walk occuring in the system (Incomplete)
  function walkProcess(){
    if (firstBaseActive == true){
      if (secondBaseActive == true){
        if (thirdBaseActive == true){
          userScore++
          //Need code here to display scored run screen
          screen2Displayed=false
        }
        thirdBaseActive=true
      }
      secondBaseActive = true
    }
    firstBaseActive = true

    //Code to change to the new batter
    changeBatter(false)

    //Code to implement the transition screen
    storeItem("positiveGameAction", "Walk")
    screenMode = 5
    screen5Displayed = false
  }

  //Function to change batter in the system
  function changeBatter(out){
    
    //Setting the basic variables
    balls=0
    fouls=0

    //Code to refresh the screen 2
    screen2Displayed = false
    
    //Checking to see whether outs need to be incremented or not
    if (out==true){
      outs++
      //Processing the new out by the system
      newOut()
    }
  }

  //Processing a new out in the system
  function newOut(){
    if (outs>=3){

      //Setting common variables
      console.log("Next Inning")
      outs = 0
      screen1Displayed=false
      screenMode=1
      firstBaseActive = false ; secondBaseActive = false ; thirdBaseActive = false

      //Finding what part of inning
      if (userAttacking==true){
        userAttacking=false
      }
      else{
        inning++
        userAttacking=true 
      }
    }
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