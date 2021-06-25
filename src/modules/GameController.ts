// 控制其他的所有class
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameController {
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 2);
    }

    // 按键的方向（蛇头的方向）
    direction: string = '';

    // 记录游戏结束
    isLive: boolean = true;

    // 游戏的初始化
    init() {
        // 绑定键盘按键事件
        document.addEventListener('keydown', this.keyDownHandler.bind(this));
    }

    // 游戏的开启
    start() {
        // 调用run方法
        this.run();
    }

    // 键盘按键的响应函数
    keyDownHandler(event: KeyboardEvent) {
        console.log(this.direction)
        if (event.key) {
            this.direction = event.key;
        }
    }

    // 控制蛇移动
    run() {
        /**
         * 根据方向(this.direction) 来使蛇的位置改变
         * 向上 top 减少
         * 向下 top 增加
         * 向左 left 减少
         * 向右 left 增加
         */
        // 计算蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
            default:
                break;
        }

        // 检查蛇是否吃到食物
        if (this.checkEat(X, Y)) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            // 进入异常， 游戏结束
            alert(e.message);
            this.isLive = false;
        }

        // 开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - ((this.scorePanel.level-1) * 25));
    }

    // 检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        return X === this.food.X && Y === this.food.Y;
    }
}

export default GameController;
