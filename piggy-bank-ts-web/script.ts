const balanceElm = document.querySelector(".balance") as HTMLElement;
const balanceAmountElm = document.querySelector("#balance-amount") as HTMLElement;

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

function handleButtonClick(event : MouseEvent) {
    let clickedElm = event.currentTarget as HTMLElement;
    updateBalance(Number(clickedElm.dataset.amount), event.shiftKey);
    addToHistory(clickedElm, event.shiftKey);
};

document.querySelectorAll<HTMLElement>(".coin").forEach(function(elm) {
    elm.addEventListener("click", handleButtonClick);
});

document.addEventListener("keydown", (event : KeyboardEvent) => {
    if (event.repeat)
        return;
    // Looking for a .coin element that has a data-letter that matches the keypress
    let elm = document.querySelector(`.coin[data-letter='${event.key.toLowerCase()}']`) as HTMLElement | null;
    if (!elm) // elm === null
        return ;
    elm.classList.add("keypress");

    let coinValue : number = Number(elm.dataset.amount);
    updateBalance(coinValue, event.shiftKey);
    addToHistory(elm, event.shiftKey);    
});

document.addEventListener("keyup", (event : KeyboardEvent) => {
    // Looking for a .coin element that has a data-letter that matches the keypress
    let elm = document.querySelector(`.coin[data-letter='${event.key.toLowerCase()}']`) as HTMLElement | null;
    if (!elm) // elm === null
        return ;
    elm.classList.remove("keypress");
});

function addToHistory(coinElm : HTMLElement, wasRemoved : boolean) {
    let listItem : HTMLLIElement = document.createElement("li");
    listItem.textContent = coinElm.dataset.letter as string;
    if (wasRemoved)
        listItem.classList.add("negative");
    historyElm.appendChild(listItem);

    listItem.addEventListener("click", function (event : MouseEvent) {
        listItem.remove();
        updateBalance(Number(coinElm.dataset.amount), !wasRemoved);  
    });
}
