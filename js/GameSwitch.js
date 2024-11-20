export class GameSwitch {
    constructor(gameSwitch, body) {
        // 添加点击事件
        gameSwitch.addEventListener('click', () => {
            gameSwitch.classList.toggle('night');
            body.classList.toggle('day-mode');
        });
    }
}

