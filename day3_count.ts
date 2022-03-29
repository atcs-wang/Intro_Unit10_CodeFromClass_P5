//global constants for the various elements on the page
const lowInput = document.querySelector("input.low") as HTMLInputElement;
const highInput = document.querySelector("input.high") as HTMLInputElement;
const numbersParagraph = document.querySelector("p.numbers") as HTMLParagraphElement;
const upButton = document.querySelector("button.up") as HTMLButtonElement;
const downButton = document.querySelector("button.down") as HTMLButtonElement;

function countUp() {
    //read contents of low/high inputs
    let low : number = Number(lowInput.value);
    let high : number = Number(highInput.value);

    //generated the counting string
    let countMessage : string = "";
    for (let i = low; i <= high; i++){
        countMessage += i + " ";
    }

    //put the string into the "numbers" element
    numbersParagraph.textContent = countMessage;
}
upButton.onclick = countUp;

function countDown() {
    //read contents of low/high inputs
    let low : number = Number(lowInput.value);
    let high : number = Number(highInput.value);

    //generated the counting string
    let countMessage : string = "";
    for (let i = high; i >= low; i--){
        countMessage += i + " ";
    }

    //put the string into the "numbers" element
    numbersParagraph.textContent = countMessage;
}
downButton.onclick = countDown;