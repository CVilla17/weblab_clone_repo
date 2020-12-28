const SNAKE_SPEED = 10;
const snakeBody = [
    { x: 11, y: 11 },
    { x: 10, y: 11 },
    { x: 9, y: 11 }
]

updateSnake = () => {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { x: snakeBody[i].x, y: snakeBody[i].y }
    }

    let newDirection = getInputDirection()
    snakeBody[0].y += newDirection.y
    snakeBody[0].x += newDirection.x
}

drawSnake = (gameBoard) => {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}
