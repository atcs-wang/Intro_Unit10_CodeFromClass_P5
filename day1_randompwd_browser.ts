function generatePassword(): void {
    let inputElement = document.querySelector("input.length") as HTMLInputElement;
    let length : number = Number(inputElement.value);

    let password : string = "";
    for (let i = 0; i < length; i++) {
        let randomCode : number;
        if (Math.random() < .9) {//90% chance of letters
            if (Math.random() < .5) //50% chance of lowercase
                randomCode = Math.floor(Math.random() * 26) + 97 //[97, 123) - lowercase
            else 
                randomCode = Math.floor(Math.random() * 26) + 65 //[65-91) - uppercase
        } else {
            randomCode = Math.floor(Math.random() * 10) + 48 //[48-58) - digits
        }
        let character : string = String.fromCharCode(randomCode);
        password += character;
    }
    let paragraphElement = document.querySelector("p") as HTMLParagraphElement;
    paragraphElement.textContent = password;
        
}

let buttonElement = document.querySelector("button") as HTMLButtonElement
buttonElement.onclick = generatePassword
