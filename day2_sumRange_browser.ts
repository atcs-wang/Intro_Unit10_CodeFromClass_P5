function sumRange(): void {
    let lowerInputElement = document.querySelector("input.lower") as HTMLInputElement;
    let upperInputElement = document.querySelector("input.upper") as HTMLInputElement;

    let lower: number = Number(lowerInputElement.value);
    let higher: number = Number(upperInputElement.value);

    let sum: number = 0;
    for (let i = lower; i <= higher; i++) {
        sum += i;
    }

    let heading1 = document.querySelector('h1') as HTMLHeadingElement;
    let heading2 = document.querySelector('h2') as HTMLHeadingElement;

    heading1.textContent = `The sum of all integers in the range [${lower},${higher}] is:`
    heading2.textContent = String(sum);
    // console.log(`The sum of all integers in the range [${lower},${higher}] is ${sum}`);
}

let buttonElement = document.querySelector("button") as HTMLButtonElement;
buttonElement.onclick = sumRange;