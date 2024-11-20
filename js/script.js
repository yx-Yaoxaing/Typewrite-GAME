import { GameSwitch}   from "./GameSwitch.js";
const gameSwitch = document.querySelector('.game-switch');
const body = document.body;
//  日夜模式切换
new GameSwitch(gameSwitch, body);


const typewriterText = document.querySelector('.typewriter-text');
const originalText = typewriterText.textContent.trim();
initGame();
// 初始化游戏
function initGame() {
    const characters = originalText.split('').map((char, index) => {
        return `<span class="char" data-index="${index}">${char}</span>`;
    });
    characters.unshift('<span class="cursor">|</span>');
    typewriterText.innerHTML = characters.join('');
}
document.addEventListener('keydown', handleKeyPress);
let currentPosition = 0;
// 记录用户输入的字符
let userInput = '';
function handleKeyPress(e) {
    if (e.key.length !== 1 && e.key !== 'Backspace') return;
    if (e.key === 'Backspace') {
        if (currentPosition > 0) {
            currentPosition--; 
            userInput = userInput.slice(0, currentPosition); 
            updateDisplay(); 
        }
        return; 
    }
  
    if (currentPosition < originalText.length) {
        userInput += e.key; 
        currentPosition++; 
        if (currentPosition === 1) { 
            const typewriterTextElement = document.querySelector('.typewriter-text');
            const firstChildSpan = typewriterTextElement.querySelector('span:first-child');
            if (firstChildSpan) {
                typewriterTextElement.removeChild(firstChildSpan);
            }
        }
        updateDisplay();  
    }

    if (userInput.length > originalText.length) {
        userInput = userInput.slice(0, originalText.length); 
        currentPosition = originalText.length; 
        updateDisplay();
    }
}


function updateDisplay() {
    const chars = document.querySelectorAll('.char');
    chars.forEach((char, index) => {
        if (index < userInput.length) {
            if (userInput[index] === originalText[index]) {
                char.className = 'char correct';
                char.textContent = userInput[index];
            } else {
                char.className = 'char incorrect';
                char.textContent = userInput[index];
            }
        } else if (index === userInput.length) {
            char.className = 'char current';
            char.innerHTML = `<span class="cursor">|</span>${originalText[index]}`;
        } else {
            char.className = 'char';
            char.textContent = originalText[index];
        }
    });
}