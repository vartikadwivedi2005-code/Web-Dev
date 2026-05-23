//game updated 

let canvas=document.querySelector("canvas")
  let pen=   canvas.getContext("2d")
  let snakeCell=[[0,0]]
  let cell=50
  let direction="right"
  let random=generateR()
  let gameOver=false
  let score=0
  let id=setInterval(()=>{
    draw()
    update()

  },300)

  document.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key=="ArrowUp"){
        direction='up'
    }else if(e.key=='ArrowDown'){
        direction='down'
    }else if(e.key=='ArrowLeft'){
        direction="left"

    }else{
        direction='right'
    }
    
  })


  function draw(){
    if(gameOver==true){
      clearInterval(id)
      pen.fillStyle="white"
      pen.font="50px Roboto"
      pen.fillText("Game Over!!!",50,100)
      return
    }
    pen.fillStyle="#4cc9f0"
    pen.clearRect(0,0,1000,600)
    for(let a of snakeCell){
        pen.fillRect(a[0],a[1],cell,cell)
    }
       
    pen.fillStyle="black"
    pen.font="40px sans-sarif"
    pen.fillText(`${score}`,100,300)
    pen.fillStyle="#f72585"
    pen.fillRect(random[0],random[1],cell,cell)

       
  }
  
  draw()
  function update(){
  let headX=  snakeCell[snakeCell.length-1][0]
  let headY=  snakeCell[snakeCell.length-1][1]

  let newX
  let newY
  if(direction=='right'){
    newX=headX+cell
    newY=headY
    if(newX==1000){
      gameOver=true
    }
  }
  else if(direction=="left"){
    newX=headX-cell
    newY=headY
    if(newX<0){
      gameOver=true
    }
  }
  else if(direction=="down"){
    newX=headX
    newY=headY+cell
    if(newY==600){
      gameOver=true
    }
  }
  else{
    newX=headX
    newY=headY-cell
    if(newY<0){
      gameOver=true
    }
  }
  snakeCell.push([newX,newY])
  if(newX==random[0] && newY==random[1]){
    random=generateR()
    score++
  }else{
    snakeCell.shift()
   }
  }

  function generateR(){
    return [
       Math.floor(Math.random()*950/cell)*cell,
       Math.floor(Math.random()*550/cell)*cell 
    ]
   
  }