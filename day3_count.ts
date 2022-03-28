function countUp() {
    //read contents of low/high inputs
    let lowInput = document.querySelector("input.low") as HTMLInputElement;
    let highInput = document.querySelector("input.high") as HTMLInputElement;
    let low : number = Number(lowInput.value);
    let high : number = Number(highInput.value);

    //generated the counting string
    let countMessage : string = "";
    for (let i = low; i <= high; i++){
        countMessage += i + " ";
    }

    //put the string into the "numbers" element
    let numbersParagraph = document.querySelector("p.numbers") as HTMLParagraphElement;
    numbersParagraph.textContent = countMessage;
}
let upButton = document.querySelector("button.up") as HTMLButtonElement;
upButton.onclick = countUp;

function countDown() {
    //read contents of low/high inputs
    let lowInput = document.querySelector("input.low") as HTMLInputElement;
    let highInput = document.querySelector("input.high") as HTMLInputElement;
    let low : number = Number(lowInput.value);
    let high : number = Number(highInput.value);

    //generated the counting string
    let countMessage : string = "";
    for (let i = high; i >= low; i--){
        countMessage += i + " ";
    }

    //put the string into the "numbers" element
    let numbersParagraph = document.querySelector("p.numbers") as HTMLParagraphElement;
    numbersParagraph.textContent = countMessage;
}
let downButton = document.querySelector("button.down") as HTMLButtonElement;
downButton.onclick = countDown;