class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.direct = "right";
        this.imageSrc = "images/fish/fish_right.gif";
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    move() {
        switch (this.direct) {
            case "right":
                this.imageSrc = `images/fish/fish_right.gif`;
                this.moveRight();
                break;
            case "left":
                this.imageSrc = `images/fish/fish_left.gif`;
                this.moveLeft();
                break;
            default:
                this.imageSrc = `images/fish/fish_right.gif`;
                this.moveRight();
        }
    }

    renderImg(paper) {
        let pen = paper.getContext('2d');
        let img = new Image();
        img.src = this.imageSrc;
        pen.drawImage(img, this.x, this.y);
    }
}