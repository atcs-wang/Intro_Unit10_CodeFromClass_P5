const balanceElm = document.querySelector(".balance") as HTMLElement;
const balanceAmountElm = document.querySelector("#balance-amount") as HTMLElement;

const pennyElm = document.querySelector("#penny") as HTMLElement;
const nickelElm = document.querySelector("#nickel") as HTMLElement;
const dimeElm = document.querySelector("#dime") as HTMLElement;
const quarterElm = document.querySelector("#quarter") as HTMLElement;

const coinAddSoundElm = document.querySelector("audio.coin-add") as HTMLAudioElement;
const coinRemoveSoundElm = document.querySelector("audio.coin-remove") as HTMLAudioElement;

const historyElm = document.querySelector(".history") as HTMLElement;

function updateBalance(amount: number, remove: boolean) : void {
    let balance : number = Number(balanceAmountElm.textContent);
    balance += (remove) ? -amount : amount;
    balanceAmountElm.textContent = balance.toFixed(2);

    let soundElm : HTMLAudioElement = remove ? coinRemoveSoundElm : coinAddSoundElm;
    soundElm.currentTime = 0; // start over
    soundElm.play();
}

pennyElm.onclick = function (event : MouseEvent) {
    updateBalance(0.01, event.shiftKey);
    addToHistory("p");
};
nickelElm.addEventListener("click", function (event : MouseEvent) {
    updateBalance(0.05, event.shiftKey);
    addToHistory("n");
}); 
dimeElm.onclick = (event : MouseEvent) => {
    updateBalance(0.10, event.shiftKey);
    addToHistory("d");
};
quarterElm.addEventListener("click", (event : MouseEvent) => {
    updateBalance(0.25, event.shiftKey);
    addToHistory("q");
});

document.addEventListener("keydown", (event : KeyboardEvent) => {
    if (event.repeat)
        return;

    let coinValue : number = 0;
    switch (event.key) {
        case "p": case "P":
            coinValue = 0.01;
            pennyElm.classList.add("keypress");
        break;
        case "n": case "N":
            coinValue = 0.05;
            nickelElm.classList.add("keypress");
        break;
        case "d": case "D":
            coinValue = 0.10;
            dimeElm.classList.add("keypress");
        break;
        case "q": case "Q":
            coinValue = 0.25;
            quarterElm.classList.add("keypress");
        break;
        default:
            return;
    } 
    updateBalance(coinValue, event.shiftKey);
    addToHistory(event.key);    
});

document.addEventListener("keyup", (event : KeyboardEvent) => {
    switch (event.key) {
        case "p": case "P":
            pennyElm.classList.remove("keypress");
        break;
        case "n": case "N":
            nickelElm.classList.remove("keypress");
        break;
        case "d": case "D":
            dimeElm.classList.remove("keypress");
        break;
        case "q": case "Q":
            quarterElm.classList.remove("keypress");
        break;
        default:
            return;
    } 
});

function addToHistory(coin : string) {
    let listItem : HTMLLIElement = document.createElement("li");
    listItem.textContent = coin;
    historyElm.appendChild(listItem);
}