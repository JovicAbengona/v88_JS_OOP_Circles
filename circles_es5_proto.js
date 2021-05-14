function Circle(){
    this.top = top;
    this.left = left;
    this.size = size;
    this.color = currentColor;

    Circle.prototype.drawCircle = function(){
        const div = document.createElement("div");
        let top = this.top;
        let left = this.left;
        let size = this.size;

        div.style.backgroundColor = this.color;
        div.style.position = "absolute";
        div.style.borderRadius = "50%";

        const drawCircle = setInterval(function(){
            size--;
            div.style.top = `${top - size / 2}px`;
            div.style.left = `${left - size / 2}px`;
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;

            if (size == 0){
                clearInterval(drawCircle);
                div.remove();
            }
        }, 20);

        canvas.append(div);
    }
}

let circles = [];
let currentColor = "#52b788";
const canvas = document.getElementById("canvas");
const color = document.querySelector(".color");
const reset = document.querySelector(".reset");

reset.addEventListener("click", function(){
    canvas.innerHTML = "";
});

color.addEventListener("change", function(){
    currentColor = this.value;
});

canvas.addEventListener("click", function(event){
    let size = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    let top = event.clientY;
    let left = event.clientX;
    circles.push(new Circle(top, left, size));
    circles[circles.length - 1].drawCircle();
});
