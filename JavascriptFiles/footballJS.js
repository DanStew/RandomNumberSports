//Initialising key variables
let screenMode //Defines what screen the system shows
let counter // Timer Variable
let passScreenSize // Variable testing whether screen large enough or not
let horizontalScreen = true// Variable to decide how the screen is displayed
let opposingTeam //The opposing team name of the system
let userTeam //The user team name of the system
let userScore //The score of the user
let computerScore // The score of the computer
let userAttacking // Decides whether user is attacking or not

//Initialising inputs and buttons
let inp1 ; let inp2
let button1

//Initialising game variables
let userPenalty ; let computerPenalty ; let suddenDeath

//Screen Mode Variables
let screen0Displayed ; let smallScreenDisplayed; let screen1Displayed ; let screen2Displayed ; let screen3Displayed ; let screen4Displayed ; let screen5Displayed

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
  screen2Displayed = false
  screen3Displayed = false
  screen4Displayed = false
  screen5Displayed = false
  smallScreenDisplayed = false

  //Initialising game variables
  userPenalty = 0
  computerPenalty = 0
  suddenDeath = false

  //Setting the local storage for the colours of the penalties
  storeItem("UserPenalty1", 255)
  storeItem("UserPenalty2", 255)
  storeItem("UserPenalty3", 255)
  storeItem("UserPenalty4", 255)
  storeItem("UserPenalty5", 255)
  storeItem("UserPenalty6", 255)
  storeItem("ComputerPenalty1",255)
  storeItem("ComputerPenalty2",255)
  storeItem("ComputerPenalty3",255)
  storeItem("ComputerPenalty4",255)
  storeItem("ComputerPenalty5",255)
  storeItem("ComputerPenalty6",255)
  
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

      createCanvas(338,580)
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
        bottomBannerSetup()
      }

      else if (screenMode == 1 && screen1Displayed == false){
        screen1Setup()
        bottomBannerSetup()
      }

      else if (screenMode == 2 && screen2Displayed == false){
        screen2Setup()
        bottomBannerSetup()
      }
      else if (screenMode == 2){
        if (counter >= 2 && userPenalty >= 5 && computerPenalty >= 5 && userPenalty == computerPenalty){
          if (userScore != computerScore){
            gameEnd()
          }
          else{
            suddenDeath = true
            screenMode = 5
          }
        }
        else if (counter >= 2){
          screenMode = 1
          screen1Displayed = false
        }
      }

      else if (screenMode == 3 && screen3Displayed == false){
        screen3Setup()
        bottomBannerSetup()
      }
      else if (screenMode == 3){
        if (counter >= 2 && userPenalty >= 5 && computerPenalty >= 5 && userPenalty == computerPenalty){
          if (userScore != computerScore){
            gameEnd()
          }
          else{
            suddenDeath = true
            screenMode = 5
          }
        }
        else if (counter >= 2){
          screenMode = 1
          screen1Displayed = false
        }
      }

      else if (screenMode == 4 && screen4Displayed == false){
        screen4Setup()
        bottomBannerSetup()
      }

      else if (screenMode == 5 && screen5Displayed == false){
        screen5Setup()
        bottomBannerSetup()
      }
      else if (screenMode == 5){
        if (counter >= 2){
          screenMode = 1
          screen1Displayed = false
        }
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
    textSize(60)
    textStyle(BOLD)
    noStroke()

    if (horizontalScreen == true){
      rect(0,460,1240,580)
      fill(220,220,220)
      rect(0,480,1240,580,20)
      fill(0)
      text("Hello", 500,560)  
    }
    
    
  }

  function screen0Setup(){

    background(120,240,130)

    //The text of the main screen
    fill(0)
    textStyle(BOLD)

    if (horizontalScreen == true){
      textSize(80)
      text("FOOTBALL", 394, 108)
      textSize(56)
      textStyle(NORMAL)
      text("Opposing Team : ", 124, 300)
      text("User Team : ",124,200)
    }
    else{
      textSize(60)
      textStyle(BOLD)
      text("FOOTBALL", 10, 100)
      textSize(40)
      textStyle(NORMAL)
      text("Opposing Team : ", 20, 400)
      text("User Team : ",40,200)
    }
    

    //Code to set the inputs and buttons for the website
    inp1.show()
    inp1.value("")
    inp2.show()
    inp2.value("")
    button1.show()
    button2.hide()

    //Code to ensure code isn't repeated
    screen0Displayed = true
  }

  function screen1Setup(){

    //Code to display the design of the screen
    background(220,220,220)

    if (horizontalScreen == true){
      //Code to split the screen into segments
      stroke(0)
      line(310,0,310,360)
      line(0,360,1240,360)

      //Showing the input box for the user to enter (and text for it)
      textSize(40)
      textStyle(NORMAL)
      fill(0)
      text("Enter your number : ",10,420)

      //Creating the playing field for the game
      noStroke()
      fill(120,240,130)
      rect(310,0,1240,360)

      //Code for the shape of the goal
      fill(255)
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
      textSize(40)
      text("Score", 100,60)
      text(userTeam + " : ",10,140)
      text(opposingTeam + " : ",10,280)

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
    }
    else{
      //Code to split the screen into segments
      stroke(0)
      line(0,220,338,220)
      line(0,420,338,420)

      //Showing the input box for the user to enter (and text for it)
      textSize(36)
      textStyle(NORMAL)
      fill(0)
      text("Enter your number : ",10,470)

      //Creating the playing field for the game
      noStroke()
      fill(120,240,130)
      rect(0,0,338,220)

      //Code for the shape of the goal
      fill(255)
      //Post rectangles
      rect(20,20,30,180)
      rect(20,20,260,30)
      rect(280,20,30,180)

      //Inside of goal
      fill(0,181,226)
      rect(50,50,230,150)
      fill(255)
      rect(126,50,2,150)
      rect(204,50,2,150)
      rect(50,100,230,2)
      rect(50,150,230,2)

      //Putting the numbers inside the net
      textSize(30)
      textStyle(BOLD)
      text("1",80,85)
      text("2",160,85)
      text("3",236,85)
      text("4",80,135)
      text("5",160,135)
      text("6",236,135)
      text("7",80,185)
      text("8",160,185)
      text("9",236,185)

      //Second Third third
      fill(0)
      textStyle(BOLD)
      textSize(30)
      text(userTeam + " : ",60,260)
      text(opposingTeam + " : ",50,350)

      //Setting whether user is taking or saving
      textSize(26)
      fill(255)
      rect(60,10,210,30)
      fill(0)
      if (userAttacking == true){
        text("Taking Penalty",80,34)
      }
      else{
        text("Saving Penalty",80,34)
      }

    }

    //Displaying the circles for the penalties
    displayCircles()
    

    //Code to hide and show buttons and inputs
    inp1.hide()
    inp2.hide()
    button1.hide()
    inp3.show()
    inp3.value("")

    //Code to ensure code isn't repeated
    screen1Displayed = true
  }

  //Code to display the scored penalty screen
  function screen2Setup(){
    
    counter = 0
    userAttacking = !userAttacking
    inp3.hide()
    background(120,240,130)
    fill(255)

    if (horizontalScreen == true){
      textSize(160)
      textStyle(BOLD)
      text("Penalty Scored",30,260)
    }
    else{
      textSize(80)
      textStyle(BOLD)
      text("Penalty",20,260)
      text("Scored",20,350)
    }
    
    //Code to ensure code isn't repeated
    screen2Displayed = true
  }

  //Code to display the missed penalty screen
  function screen3Setup(){
    background(255,0,0)
    counter = 0 
    inp3.hide()
    
    fill(255)

    //Swapping turns
    userAttacking = !userAttacking

    //Displaying the message
    if (horizontalScreen == true){
      textSize(160)
      textStyle(BOLD)
      text("Penalty Missed",30,260)
    }
    else{
      textSize(80)
      textStyle(BOLD)
      text("Penalty",20,260)
      text("Missed",20,350)
    }
    

    //Code to ensure code isn't repeated
    screen3Displayed = true
  }

  //Function to display the end game screen
  function screen4Setup(){

    //Controlling the design of the screen
    background(220,220,220)
    textStyle(BOLD)
    fill(0)

    if (horizontalScreen == true){
      textSize(50)
      text(userTeam + " : ",100,200)
      text(opposingTeam + " : ",100,300)
      text(userScore,500,200)
      text(computerScore,500,300)
  
      fill(0)
      if(userScore > computerScore){
        text("Final - " + userTeam + " Won ", 400,100 )
      }
      else{
        text("Final - " + opposingTeam + " Won ", 400,100 )
      }
    }
    else{
      textSize(32)
      text(userTeam + " : ",20,260)
      text(userScore,280,260)
      text(opposingTeam + " : ",10,380)
      text(computerScore,280,380)

      if(userScore > computerScore){
        textSize(60)
        fill(0)
        text("Final - ", 80,60 )
        textSize(40)
        text(userTeam,20,120)
        text("Won",110,180)
      }
      else{
        textSize(60)
        text("Final - ", 80,60 )
        textSize(40)
        text(opposingTeam,20,120)
        text("Won",110,180)
      }
    }
  
    //Displaying the circles onto the screen
    displayCircles()

    //Displaying the play again button
    button2.show()
    inp2.hide()

    //Code to ensure code isn't repeated
    screen4Displayed = true
  }

  function screen5Setup(){
    counter = 0
    
    //Designing the display of the screen
    inp3.hide()
    fill(255)
    background(255,0,0)
    textStyle(BOLD)

    if (horizontalScreen == true){
      textSize(160)
      text("Sudden Death",30,260)
    }
    else{
      textSize(90)
      text("Sudden",10,260)
      text("Death",30,350)
    }
    

    //Ensuring code isn't repeated
    screen5Displayed = true
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

    if (horizontalScreen == false){
      inp1.position(20,520)
      inp2.position(20,320)
      inp3.position(30,580)
    }
  }

  function buttonSetup(){

    //Creating the button to start the game (Main Screen)
    button1 = createButton("Start Game")
    button1.size(180,60)
    button1.position(520,500)
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

  //Function to process the inputs of the user in the game
  function gameAction(){
    if (this.value() != 0){

      //Getting the values
      userValue = this.value()
      computerValue = round(random(1,9))
      chance = round(random(1,3))

      takingPenaltyProcess(userValue,computerValue,chance)
    }
  }

  //Code to process the actions when the user takes a penalty
  function takingPenaltyProcess(userValue,computerValue,chance){

    if (userAttacking == true){
      userPenalty++
    }
    else{
      computerPenalty++
    }

    let difference = findDifference(userValue,computerValue)

    if (userValue == 1 || userValue == 3 || userValue == 7 || userValue == 9){
      if (difference >= 6){
        missedPenalty()
      }
      else if (difference >= 5 && chance >= 2){
        missedPenalty()
      }
      else if (difference >= 3 && chance == 3){
        missedPenalty()
      }
      else{
        scoredPenalty()
      }
    }
    else{
      if (difference >= 5){
        missedPenalty()
      }
      else if (difference >= 2 && chance == 3){
        missedPenalty()
      }
      else{
        scoredPenalty()
      }
    }
  }

  function missedPenalty(){

    //Storing the colour of the dot
    if (userAttacking == true){
      if (userPenalty <= 5){
        storeItem("UserPenalty" + userPenalty,"red")
      }
      else{
        storeItem("UserPenalty6" ,"red")
      }
    }
    else{
      if (userPenalty <= 5){
        storeItem("ComputerPenalty" + computerPenalty,"red")
      }
      else{
        storeItem("ComputerPenalty6" ,"red")
      }
    }

    //Code to display the score to the user
    screenMode = 3
    screen3Displayed = false
  }

  function scoredPenalty(){
    //Storing the colour of the dot
    if (userAttacking == true){
      if (userPenalty <= 5){
        storeItem("UserPenalty" + userPenalty,"lightGreen")
      }
      else{
        storeItem("UserPenalty6" ,"lightGreen")
      }
    }
    else{
      if (userPenalty <= 5){
        storeItem("ComputerPenalty" + computerPenalty,"lightGreen")
      }
      else{
        storeItem("ComputerPenalty6" ,"lightGreen")
      }
    }

    if (userAttacking == true){
      userScore++
    }
    else{
      computerScore++
    }

    //Code to display the screen to the user
    screenMode = 2
    screen2Displayed = false
  }

  function gameEnd(){
    screenMode = 4
    screen4Displayed = false
  }

  function mouseClicked(){
    if (horizontalScreen == true){
      if (mouseX >= 420 && mouseX <= 645){
        if (mouseY >= 120 && mouseY <= 191){
          buttonGameAction(1)
        }
        else if (mouseY >= 195 && mouseY <= 267){
          buttonGameAction(4)
        }
        else if (mouseY >= 270 && mouseY <= 339){
          buttonGameAction(7)
        }
      }
      else if (mouseX >= 648 && mouseX <= 892){
        if (mouseY >= 120 && mouseY <= 191){
          buttonGameAction(2)
        }
        else if (mouseY >= 195 && mouseY <= 267){
          buttonGameAction(5)
        }
        else if (mouseY >= 270 && mouseY <= 339){
          buttonGameAction(8)
        }
      }
      else if (mouseX >= 894 && mouseX <= 1158){
        if (mouseY >= 120 && mouseY <= 191){
          buttonGameAction(3)
        }
        else if (mouseY >= 195 && mouseY <= 267){
          buttonGameAction(6)
        }
        else if (mouseY >= 270 && mouseY <= 339){
          buttonGameAction(9)
        }
      }
    }
    else{
      if (mouseX >= 50 && mouseX <= 125){
        if (mouseY >= 50 && mouseY <= 98){
          buttonGameAction(1)
        }
        else if (mouseY >= 102 && mouseY <= 149){
          buttonGameAction(4)
        }
        else if (mouseY >= 151 && mouseY <= 199){
          buttonGameAction(7)
        }
      }
      else if (mouseX >= 128 && mouseX <= 202){
        if (mouseY >= 50 && mouseY <= 98){
          buttonGameAction(2)
        }
        else if (mouseY >= 102 && mouseY <= 149){
          buttonGameAction(5)
        }
        else if (mouseY >= 151 && mouseY <= 199){
          buttonGameAction(8)
        }
      }
      else if (mouseX >= 206 && mouseX <= 278){
        if (mouseY >= 50 && mouseY <= 98){
          buttonGameAction(3)
        }
        else if (mouseY >= 102 && mouseY <= 149){
          buttonGameAction(6)
        }
        else if (mouseY >= 151 && mouseY <= 199){
          buttonGameAction(9)
        }
      }
    }
    
  }

  //Function to process the inputs of the user in the game
  function buttonGameAction(userValue){
    computerValue = round(random(1,9))
    chance = round(random(1,3))

    takingPenaltyProcess(userValue,computerValue,chance)
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

  //Function to display the circles
  function displayCircles(){
    //Displaying the circles for the penalties
    stroke(0)

    if (screenMode == 1 && horizontalScreen == true){
      //User Penalties
      fill(localStorage.getItem("UserPenalty1"))
      circle(30,200,40)
      fill(localStorage.getItem("UserPenalty2"))
      circle(80,200,40)
      fill(localStorage.getItem("UserPenalty3"))
      circle(130,200,40)
      fill(localStorage.getItem("UserPenalty4"))
      circle(180,200,40)
      fill(localStorage.getItem("UserPenalty5"))
      circle(230,200,40)

      //Computer Penalties
      fill(localStorage.getItem("ComputerPenalty1"))
      circle(30,320,40)
      fill(localStorage.getItem("ComputerPenalty2"))
      circle(80,320,40)
      fill(localStorage.getItem("ComputerPenalty3"))
      circle(130,320,40)
      fill(localStorage.getItem("ComputerPenalty4"))
      circle(180,320,40)
      fill(localStorage.getItem("ComputerPenalty5"))
      circle(230,320,40)
    }
    else if (screenMode == 1){
      //User Penalties
      fill(localStorage.getItem("UserPenalty1"))
      circle(40,290,32)
      fill(localStorage.getItem("UserPenalty2"))
      circle(90,290,32)
      fill(localStorage.getItem("UserPenalty3"))
      circle(140,290,32)
      fill(localStorage.getItem("UserPenalty4"))
      circle(190,290,32)
      fill(localStorage.getItem("UserPenalty5"))
      circle(240,290,32)

      //Computer Penalties
      fill(localStorage.getItem("ComputerPenalty1"))
      circle(40,380,32)
      fill(localStorage.getItem("ComputerPenalty2"))
      circle(90,380,32)
      fill(localStorage.getItem("ComputerPenalty3"))
      circle(140,380,32)
      fill(localStorage.getItem("ComputerPenalty4"))
      circle(190,380,32)
      fill(localStorage.getItem("ComputerPenalty5"))
      circle(240,380,32)
    }
    else if (screenMode == 4 && horizontalScreen == true){

      //User Penalties
      fill(localStorage.getItem("UserPenalty1"))
      circle(630,180,40)
      fill(localStorage.getItem("UserPenalty2"))
      circle(680,180,40)
      fill(localStorage.getItem("UserPenalty3"))
      circle(730,180,40)
      fill(localStorage.getItem("UserPenalty4"))
      circle(780,180,40)
      fill(localStorage.getItem("UserPenalty5"))
      circle(830,180,40)

      //Computer Penalties
      fill(localStorage.getItem("ComputerPenalty1"))
      circle(630,280,40)
      fill(localStorage.getItem("ComputerPenalty2"))
      circle(680,280,40)
      fill(localStorage.getItem("ComputerPenalty3"))
      circle(730,280,40)
      fill(localStorage.getItem("ComputerPenalty4"))
      circle(780,280,40)
      fill(localStorage.getItem("ComputerPenalty5"))
      circle(830,280,40)
    }
    else if (screenMode == 4){
      //User Penalties
      fill(localStorage.getItem("UserPenalty1"))
      circle(70,320,32)
      fill(localStorage.getItem("UserPenalty2"))
      circle(110,320,32)
      fill(localStorage.getItem("UserPenalty3"))
      circle(150,320,32)
      fill(localStorage.getItem("UserPenalty4"))
      circle(190,320,32)
      fill(localStorage.getItem("UserPenalty5"))
      circle(230,320,32)

      //Computer Penalties
      fill(localStorage.getItem("ComputerPenalty1"))
      circle(70,440,32)
      fill(localStorage.getItem("ComputerPenalty2"))
      circle(110,440,32)
      fill(localStorage.getItem("ComputerPenalty3"))
      circle(150,440,32)
      fill(localStorage.getItem("ComputerPenalty4"))
      circle(190,440,32)
      fill(localStorage.getItem("ComputerPenalty5"))
      circle(230,440,32)
    }
    

    if (suddenDeath == true){
      if (userPenalty == computerPenalty){
        fill(255)

        if (screenMode == 1 && horizontalScreen == true){
          circle(280,200,40)
          circle(280,320,40)
        }
        else if (screenMode == 1){
          circle(290,290,32)
          circle(290,380,32)
        }
        else if (screenMode == 4 && horizontalScreen == true){
          fill(localStorage.getItem("UserPenalty6"))
          circle(880,180,40)
          fill(localStorage.getItem("ComputerPenalty6"))
          circle(880,280,40)
        }
        else{
          fill(localStorage.getItem("UserPenalty6"))
          circle(280,320,32)
          fill(localStorage.getItem("ComputerPenalty6"))
          circle(280,440,32)
        }
    
        storeItem("UserPenalty6",255)
        storeItem("ComputerPenalty6",255)
      }
      else{
        if (screenMode == 1 && horizontalScreen == true){
          fill(localStorage.getItem("UserPenalty6"))
          circle(280,200,40)
          fill(localStorage.getItem("ComputerPenalty6"))
          circle(280,320,40)
        }
        else if (screenMode == 1){
          fill(localStorage.getItem("UserPenalty6"))
          circle(290,290,32)
          fill(localStorage.getItem("ComputerPenalty6"))
          circle(290,380,32)
        }
      }
      
    }
  }