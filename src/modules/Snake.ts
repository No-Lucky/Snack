class Snake {
    // 表示蛇的元素
    head: HTMLElement;
    bodies: HTMLCollection;

    // 获取蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 换取蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        if (this.X === value) return;

        // 计算X值的合法范围
        if (value < 0 || value > 290) throw new Error('蛇撞墙啦!');

        // 修改X时，蛇在水平移动，如果左移，则不能右移，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 如果新值大于原来的X，说明蛇想往右走，但是不能右走，所以继续向左
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }

        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBodyOverlap();
    }

    set Y(value: number) {
        if (this.Y === value) return;
        if (value < 0 || value > 290) throw new Error('蛇撞墙啦!');

        // 修改Y时，蛇在上下移动，如果上移，则不能下移，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 如果新值大于原来的X，说明蛇想往右走，但是不能右走，所以继续向左
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }

        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBodyOverlap();
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    moveBody() {
        /**
         * 设置蛇后边的身体等于前一节的身体的位置
         * 举例：
         *    第四节 = 第三节身体的位置
         */
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }

    }

    checkHeadBodyOverlap() {
        // 获取所有的身体，检查是否与头重合
        for (let i=1; i<this.bodies.length; i++) {
            let body = this.bodies[i] as HTMLElement;
            if(this.X === body.offsetLeft && this.Y === body.offsetTop) throw new Error('撞到自己啦！');
        }
    }
}

export default Snake;
