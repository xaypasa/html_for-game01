let x = 0
let y = 0
let fx = 0
let fy = 0

const box = document.getElementById('box')
const frog = document.getElementById('frog')

function fropJumg() {
    fx = Math.floor(Math.random() * 1366)
    fy = Math.floor(Math.random() * 768)
    frog.style.top = fy + 'px'
    frog.style.left = fx + 'px'
}

function moveBox(direction) {
    if(x === fx && y === fy) {
        score++
        document.getElementById('score')
    }
    switch (direction) {
        case 'up':
            y -= 10
            break;
        case 'down':
            y += 10
            break;
        case 'left':
            x -= 10
            break;
        case 'right':
            x += 10
            break;
    }
    box.style.top = y + 'px'
    box.style.left = x + 'px'
}

document.addEventListener('keydown', function (event) {
    console.log(event.key)
    switch (event.key) {
        case 'w':
            moveBox('up')
            break;
        case 's':
            moveBox('down')
            break;
        case 'a':
            moveBox('left')
            break;
        case 'd':
            moveBox('right')
            break;
        case ' ':
            fropJumg();
            break;
    }
})