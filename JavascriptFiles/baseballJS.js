let screenMode = 0;
let opposingTeam = "The Computer";

function setup() {
    createCanvas(windowWidth*0.97, windowHeight*0.80)

    //Main Screen of the game
    if (screenMode==0){

      background(120,240,130)

      //The text of the main screen
      textSize(50)
      textStyle(BOLD)
      text("BASEBALL", windowWidth*0.3, windowHeight*0.2)
      textSize(32)
      textStyle(NORMAL)
      text("Opposing Team : ", windowWidth*0.1, windowHeight*0.4)

      //Creating the input box for the Opposing Team
      let inp1 = createInput('')
      inp1.position(windowWidth*0.64, windowHeight*0.6)
      inp1.size(160)
      inp1.input(ChangeOpposingTeam)

      let button1 = createButton("Start Game")
      button1.position(windowWidth*0.4,windowHeight*0.85)
      button1.mousePressed(StartGame)
    }
    else{

      background(220,220,220)

      //Code to split the screen into segments
      line(windowWidth*0.25,0,windowWidth*0.25,windowHeight*0.8)
      line(windowWidth*0.75,0,windowWidth*0.75,windowHeight*0.8)
    }
    
  }
  
  function draw() {
    if (screenMode == 1){
      line(windowWidth*0.25,0,windowWidth*0.25,windowHeight*0.8)
      line(windowWidth*0.75,0,windowWidth*0.75,windowHeight*0.8)
    }
  }

  function ChangeOpposingTeam(){
    opposingTeam = this.value()
  }

  function StartGame(){
    screenMode=1
  }