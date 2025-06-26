let gameSequence = [];
let userSequence = [];

let btns = ["red", "orange", "green", "blue"];


let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("game stared");
        started = true;

        levelUp();
    }  
});

function btnFlash(btn) {
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash")
    }, 250);
}

function levelUp() {
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    // console.log(randomBtn);
    // console.log(randomIdx);
    // console.log(randomColor);

    gameSequence.push(randomColor);
    console.log(gameSequence);
    
    btnFlash(randomBtn);
};

function checkBtn(idx) {

    if (userSequence[idx] === gameSequence[idx]) {
       if (userSequence.length == gameSequence.length) {
        setTimeout(() => {
           levelUp(); 
        }, 1000);
       }
         
    }else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>. <br /> Press any key to start`;

        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "#FFFFFF";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSequence.push(userColor);
    
    checkBtn(userSequence.length - 1);
}

let allBtn = document.querySelectorAll('.btn');

for (const btn of allBtn) {
    btn.addEventListener('click', btnPress);
}

function reset() {
    started = false;  
    gameSequence = [];
    userSequence = [];
    level = 0;
}

// track for the high score

// let highScore = localStorage.getItem("highScore") || 0;

// h2.innerHTML = `Game Over! Your score was <b>${level}</b>. <br /> Press any key to start`;

// if (level > highScore) {
//     highScore = level;
//     localStorage.setItem("highScore", highScore);
// }

// h2.innerHTML = `Game Over! Your score was <b>${level}</b>. <br /> Press any key to restart`;
// document.getElementById("high-score").innerText = `High Score: ${highScore}`;

// h2.innerText = `Level ${level}`;

// document.getElementById("high-score").innerText = `High Score: ${highScore}`;
