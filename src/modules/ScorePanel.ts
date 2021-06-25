// 定义计分牌
class ScorePanel {
    score: number = 0;
    level: number = 1;

    // 分数和等级所在的原色，在构造函数里面初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置限制等级
    maxLevel: number;
    // 设置升级的梯度
    updateStep: number;

    constructor(maxLevel: number = 10, updateStep: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.updateStep = updateStep;
    }

    // 加分方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.updateStep === 0) {
            this.updateLevel();
        }
    }

    // 提升等级
    updateLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;
