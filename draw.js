const ctx = canvas.getContext('2d');

let canvas;

function drawjs(src) {
    canvas = document.getElementById(src);
    this.arc = function drawArc(x, y, r, startAngle, endAngle, color) {
        ctx.beginPath();
        ctx.arc(x, y, r, startAngle, endAngle, color);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    };
    this.text = function drawText(font, color, text, x, y) {
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
    };
    this.tri = function drawTri(x, y, length1, height1, length2, height2, color) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(length1, height1);
        ctx.lineTo(length2, height2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}
