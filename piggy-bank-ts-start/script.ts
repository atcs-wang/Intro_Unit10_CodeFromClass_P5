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
};
nickelElm.onclick = function (event : MouseEvent) {
    updateBalance(0.05, event.shiftKey);
};
dimeElm.onclick = (event : MouseEvent) => {
    updateBalance(0.10, event.shiftKey);
};
quarterElm.onclick = (event : MouseEvent) => {
    updateBalance(0.25, event.shiftKey);
};