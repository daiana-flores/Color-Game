var colors = [];
var pickedColor;
var numSquares = 6;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
        modeButtons.forEach(function(btn) {
            btn.classList.remove('selected');
        });
        this.classList.add('selected');
        this.textContent === 'EASY' ? numSquares = 3 : numSquares = 6;
        reset();
        });
    }
    }

    function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = '¡Correcto!';
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = 'Jugar de Nuevo';
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Inténtalo Nuevamente';
        }
        });
    }
    }

    function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
        } else {
        squares[i].style.display = 'none';
        }
    }
    h1.style.backgroundColor = '#232323';
    messageDisplay.textContent = '';
    resetButton.textContent = 'Nuevos Colores';
    }

    resetButton.addEventListener('click', function() {
    reset();
    });

    function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    }

    function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    }

    function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
    }