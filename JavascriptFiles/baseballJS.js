//Initialising key variables
let screenMode;
let opposingTeam
let userTeam
let passScreenSize = true;

//Initialising game variables
let inning; let userScore; let computerScore; let userAttacking; let fouls; let balls; let outs;

//Initialising the bases
let firstBaseActive ; let secondBaseActive ; let thirdBaseActive ; 

//Initialising the timer increment in the system
let counter

//Initialising the screenSetupModes
let screen0Displayed ; let screen1Displayed ; let screen2Displayed ; let screen3Displayed ; let screen4Displayed ; let screen5Displayed ; let screen6Displayed ; let screen7Displayed ; let smallScreenDisplayed

//Initialising Objects
let inp1 ;  
let button1;

//Function to intialise global variables in the system
function initialiseVariables(){
  //Initialising key variables
  screenMode = 0;

  //Initialising team names
  opposingTeam = "The Computer"
  userTeam = "User Team"

  //Initialising game variables
  inning = 1; userScore = 0 ; computerScore = 0 ; userAttacking = true; fouls = 0 ;balls = 0; outs = 0;

  //Initialising the bases
  firstBaseActive = false ; secondBaseActive = false ; thirdBaseActive = false ; 

  //Initialising the timer increment in the system
  counter=0

  //Initialising the screenSetupModes
  screen0Displayed = false
  screen1Displayed = false
  screen2Displayed = false
  screen3Displayed = false
  screen4Displayed = false
  screen5Displayed = false
  screen6Displayed = false
  screen7Displayed = false
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
          if (outs >=3){
            newOut()
          }
          else{
            screenMode=2
          }
        }
      }

      else if (screenMode == 7 && screen7Displayed == false){
        screen7Setup()
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
    text("Opposing Team : ", 124, 300)
    text("User Team : ",124,200)

    //Showing the inputs and buttons needed for the page
    inp1.show()
    inp1.value("")
    button1.show()
    inp2.hide()
    button2.hide()
    inp3.show()
    inp3.value("")

    //Making it so code isn't repeated
    screen0Displayed = true
  }

  //Function to setup the code for the transition page (Between Innings)
  function screen1Setup(){
    
    //Setting key variables needed for this algorithm
    counter=0
    screen1Displayed = true
    outs=0

    //Hiding preexisiting elements
    inp1.hide()
    inp3.hide()
    button1.hide()

    //Setting up the display for this page
    background(220,220,220)
    fill(0)
    textStyle(BOLD)
    textSize(50)
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
    inp2.value("")

    //Creating the playing field for the game
    fill(120,240,130)
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
    text("Inning : ", 1000,80)
    text(inning,1180,80)
    text("Fouls : ",1000,160)
    text(fouls,1180,160)
    text("Balls : ",1000,240)
    text(balls,1180,240)
    text("Outs : ",1000,320)
    text(outs,1180,320)

    //Finding out whether user batting or pitching
    fill(255)
    textSize(50)
    if (userAttacking == true){
      text("Batting",780,320)
    }
    else{
      text("Pitching", 780,320)
    }

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
    fill(0)
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
    fill(0)
    text(userTeam + " : ",100,240)
    text(userScore,600,240)
    text(opposingTeam + " : ",100,380)
    text(computerScore,600,380)

    //Deciding what output text needs to be displayed
    if (userAttacking == true){
      if (scoredRuns == 1){
        text(positiveGameAction + " - " + scoredRuns + " Run Scored",400,120)
      }
      else{
        text(positiveGameAction + " - " + scoredRuns + " Runs Scored",400,120)
      }
    }
    else{
      if (scoredRuns ==1){
        text(positiveGameAction + " - " + scoredRuns + " Run Conceded",380,120)
      }
      else{
        text(positiveGameAction + " - " + scoredRuns + " Runs Conceded",380,120)
      }
      
    }
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

    //Deciding the background of the screen
    if (userAttacking == true){
      background(120,240,130)
    }
    else{
      background(255,0,0)
    }
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

    //Deciding the background of the screen
    if (userAttacking == true){
      background(255,0,0)
    }
    else{
      background(120,240,130)
    }

    textStyle(BOLD)
    fill(255)
    textSize(200)
    if (negativeGameAction == "Double Play" || negativeGameAction == "Ground Ball"){
      text(negativeGameAction,40,280)
    }
    else{
      text(negativeGameAction,300,280)
    }
    
  }

  function screen7Setup(){

    //Initialising key variables
    screen7Displayed = true

    //Controlling the design of the screen
    background(220,220,220)
    textStyle(BOLD)
    textSize(70)
    fill(0)
    textSize(50)
    text(userTeam + " : ",100,200)
    text(userScore,600,200)
    text(opposingTeam + " : ",100,300)
    text(computerScore,600,300)

    if(userScore > computerScore){
      text("Final - " + userTeam + " Won ", 400,100 )
    }
    else{
      text("Final - " + opposingTeam + " Won ", 400,100 )
    }

    //Displaying the play again button
    button2.show()
  }

  function inputSetup(){

    //Creating the input box for the Opposing Team (Main Screen)
    inp1 = createInput('')
    inp1.position(760, 396)
    inp1.size(300,60)
    inp1.input(ChangeOpposingTeam)
    inp1.hide()

    //Creating the input box for the number input 
    inp2 = createInput('')
    inp2.position(460,520)
    inp2.size(300,60)
    inp2.input(gameAction)
    inp2.hide()

    //Creating the input box for the User Team (Main Screen)
    inp3 = createInput('')
    inp3.position(760, 296)
    inp3.size(300,60)
    inp3.input(ChangeUserTeam)
    inp3.hide()
  
  }
  
  function buttonSetup(){
  
    //Creating the button to start the game (Main Screen)
    button1 = createButton("Start Game")
    button1.size(180,60)
    button1.position(520,500)
    button1.mousePressed(StartGame)

    //Creating the button to play again (End Screen)
    button2 = createButton("Play Again")
    button2.size(180,60)
    button2.position(520,500)
    button2.mousePressed(playAgain)
  
  }

//Game Functions

  //Function to process the input of the user during the game
  function gameAction(){

    //Taking in the user and computer value
    userValue = this.value()
    computerValue = round(random(1,10))

    //Taking in the chance variable (Entering luck based)
    chance = round(random(1,4))

    if (userAttacking==true){
      if (this.value() != 0){
        //Function called to process the score
        processScoreAttack(userValue,computerValue,chance)
      }
    }
    else{
      if (this.value() != 0){
        //Function called to process the score
        processScoreDefence(computerValue,userValue,chance)
      }
    }
  }

  //Function to implement the changes to the game after input entered on attack
  function processScoreAttack(userValue,computerValue,chance){

    //Finding the difference between the two values
    difference = findDifference(userValue,computerValue)

    //Process the score if userValue == computerValue
    if (userValue == computerValue && chance == 3){
      //Processes the home run, changing userScore
      userHomeRunProcess()
      changeBatter(false)
    }
    else if (userValue == computerValue && chance == 2){
      userDoubleProcess()
      changeBatter(false)
    }

    //Processing score where difference is 1
    else if (difference == 1 && chance == 3){
      userTripleProcess()
      changeBatter(false)
    }
    else if (difference == 1 && chance == 2){
      userDoubleProcess()
      changeBatter(false)
    }

    //Processing score where difference is 2
    else if (difference == 2 && chance == 3){
      userDoubleProcess()
      changeBatter(false)
    }
    else if (difference == 2 && chance == 2){
      userSingleProcess()
      changeBatter(false)
    }

    //Processing score where difference is 3
    else if (difference == 3 && chance == 3){
      userSingleProcess()
      changeBatter(false)
    }
    else{
      userNoHitProcess()
    }

    //Make changes to the game screen
    screen2Displayed=false
  }

  function processScoreDefence(computerValue,userValue,chance){
    
    //Finding the difference between the two values
    difference = findDifference(userValue,computerValue)

    //Process the score if userValue == computerValue
    if (userValue == computerValue && chance == 3){
      //Processes the home run, changing computerScore
      computerHomeRunProcess()
      changeBatter(false)
    }
    else if (userValue == computerValue && chance == 2){
      computerDoubleProcess()
      changeBatter(false)
    }

    //Processing score where difference is 1
    else if (difference == 1 && chance == 3){
      computerTripleProcess()
      changeBatter(false)
    }
    else if (difference == 1 && chance == 2){
      computerDoubleProcess()
      changeBatter(false)
    }

    //Processing score where difference is 2
    else if (difference == 2 && chance == 3){
      computerDoubleProcess()
      changeBatter(false)
    }
    else if (difference == 2 && chance == 2){
      computerSingleProcess()
      changeBatter(false)
    }

    //Processing score where difference is 3
    else if (difference == 3 && chance == 3){
      computerSingleProcess()
      changeBatter(false)
    }
    else{
      computerNoHitProcess()
    }

    //Make changes to the game screen
    screen2Displayed=false
  }

  //Functions to change the users scores

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
      outs++
      secondBaseActive = false
      firstBaseActive = false

      //Code to refresh the display of the screen
      storeItem("negativeGameAction", "Double Play")
      screenMode = 6
      screen6Displayed = false
      screen2Displayed = false

      changeBatter(true)
    }
    else if (action==4){
      //Code to display the transition screen
      storeItem("negativeGameAction", "Ground Ball")
      screenMode = 6
      screen6Displayed = false

      changeBatter(true)
    }
    else if (action==5){
      //Code to display the transition screen
      storeItem("negativeGameAction", "Flyball")
      screenMode = 6
      screen6Displayed = false

      changeBatter(true)
    }
    else{   
      //Code to display the transition screen
      storeItem("negativeGameAction", "Foul")
      screenMode = 6
      screen6Displayed = false

      //Code to process the fouls
      processFouls()
    }
  }

  //Functions to change the computers values

  //Function to process the homeruns scored by the user
  function computerHomeRunProcess(){
    computerScore++
    if (firstBaseActive == true){
      computerScore++
      firstBaseActive = false
    }
    if (secondBaseActive==true){
      computerScore++
      secondBaseActive=false
    }
    if (thirdBaseActive==true){
      computerScore++
      thirdBaseActive=false
    }
  
    //Showing the homerun screen to the user
    screenMode=3
  }

  function computerTripleProcess(){

    let scoredRuns = 0
    if (thirdBaseActive==true){
      computerScore++
      thirdBaseActive = false
      scoredRuns++
    }
    if (secondBaseActive==true){
      computerScore++
      secondBaseActive = false
      scoredRuns++
    }
    if (firstBaseActive == true){
      computerScore++
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

  function computerDoubleProcess(){
    let scoredRuns = 0
    if (thirdBaseActive==true){
      computerScore++
      thirdBaseActive = false
      scoredRuns++
    }
    if (secondBaseActive==true){
      computerScore++
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

  function computerSingleProcess(){

    let scoredRuns = 0
    if (thirdBaseActive==true){
      computerScore++
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

  function computerNoHitProcess(){
    action = round(random(1,7))

    if (action <= 2){
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
      outs++
      secondBaseActive = false

      //Code to refresh the display of the screen
      storeItem("negativeGameAction", "Double Play")
      screenMode = 6
      screen6Displayed = false
      screen2Displayed = false

      changeBatter(true)
    }
    else if (action==4){
      //Code to display the transition screen
      storeItem("negativeGameAction", "Ground Ball")
      screenMode = 6
      screen6Displayed = false

      changeBatter(true)
    }
    else if (action==5){
      //Code to display the transition screen
      storeItem("negativeGameAction", "Flyball")
      screenMode = 6
      screen6Displayed = false

      changeBatter(true)
    }
    else{
      //Code to display the transition screen
      storeItem("negativeGameAction", "Foul")
      screenMode = 6
      screen6Displayed = false

      //Code to process the fouls
      processFouls()
    }
  }

  //Other game functions (Joint)

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
          if(userAttacking == true){
            userScore++
          }
          else{
            computerScore++
          }
          
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
    if (outs>=3 && screen6Displayed == true){

      //Setting common variables
      outs = 0 
      screen1Displayed=false
      screenMode=1
      firstBaseActive = false ; secondBaseActive = false ; thirdBaseActive = false

      //Finding what part of inning
      if (userAttacking==true){
        //Seeing if the bottom of the final inning needs to be played
        if (inning == 3 && computerScore > userScore){
          screen1Displayed=true
          screenMode = 7
          screen7Displayed = false
        }
        else{
          userAttacking=false
        }
      }
      else{
        inning++
        userAttacking=true 
        if (inning >= 4){
          //Ensuring scores in the game aren't equal
          if (userScore != computerScore){
            screen1Displayed=true
            screenMode = 7
            screen7Displayed = false
          }
        }
      }
    }
  }

//Random Functions

  //Function to change the value of the opposing team to that inputted by the user
  function ChangeOpposingTeam(){
    opposingTeam = this.value()
  }

  //Function to change the value of the user team to that inputted by the user
  function ChangeUserTeam(){
    userTeam = this.value()
  }
  
  //Function completed when startGame button selected
  function StartGame(){
    screenMode=1
  }

  //Function to increment the timer for the transistion screen
  function timeIt(){
    counter++
  }

  //Working out the difference between the two values
  function findDifference(userValue,computerValue){

    //Working out the difference between the two inputs
    if (userValue>computerValue){
      difference = userValue - computerValue
    }
    else{
      difference = computerValue - userValue
    }

    return difference
  }

  //Function for the play again button
  function playAgain(){
    screenMode = 0
    screen0Displayed = false
    initialiseVariables()
  }