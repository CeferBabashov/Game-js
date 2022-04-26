let bar1 = document.querySelector("#qapi1");
let bar2 = document.querySelector("#qapi2");
let ball = document.querySelector('#top');
let score1 = document.querySelector('#score1');
let score2 = document.querySelector('#score2');
let bar1x = 0;
let bar2x = 0;
let ballX = 0;
let ballY = 0;
let dx = 5;
let dy = 5;   
let point1 = 0;
let point2 = 0;

let set = setInterval(move, 40); 
onkeydown  = barMove;
score1.innerHTML = `${point1}`;
score2.innerHTML = `${point2}`;


function barMove(e) {
    if (e.keyCode == 39 && bar2x < 500) {
        bar2x += 25;
    }
    if (e.keyCode == 37 && bar2x > 0) {
        bar2x -= 25;
    }
    if(e.keyCode == 68 && bar1x<500){
        
        bar1x += 25;
    }
    if(e.keyCode == 65 && bar1x>0){
        bar1x -= 25;
    }
    bar1.style.left=bar1x + 'px';
    bar2.style.left = bar2x + 'px';
}

function move() {

    if (ballX < 0 || ballX > 550) {
        dx *= -1;
    }

    if (ballY < 0 &&  ballX >= bar1x -25  && ballX <= bar1x +100  ) {
        dy *= -1;
        point1++;
        console.log(point1);
        score1.innerHTML = `${point1}`;
    }
    else  if (ballY > 450 && ballX >= bar2x -25  && ballX <= bar2x +100) {
        dy++;
        dx++;
        dy *= -1;
        point2++;
        console.log(point2);
        score2.innerHTML = `${point2}`;
    }
    
    else if (ballY <0) {
        alert(`Player 2 Won, Score is : ${point2}-${point1}`);
        clearInterval(set);
        location.reload();
    }
    else if (ballY > 450) {
        point1++;
        // score1.innerHTML=`${point1}`;
        alert(`Player 1 Won, Score is : ${point1}-${point2}`);
        clearInterval(set);
        location.reload();
    }
    
    ballX += dx;
    ballY += dy;
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}