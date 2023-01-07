export function addEvents() {
    let textareaNotEnc: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("textareaNotEnc");
    let checkEncodeVisually: HTMLInputElement = <HTMLInputElement>document.getElementById("checkEncodeVisually");
    let buttonEncode: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonEncode");
    let spanCountLetters: HTMLSpanElement = <HTMLSpanElement>document.getElementById("spanCountLetters");

    let divBWT: HTMLDivElement = <HTMLDivElement>document.getElementById("divBWT");
    let spanOriginalText: HTMLSpanElement = <HTMLSpanElement>document.getElementById("spanOriginalText");

    textareaNotEnc.addEventListener("input", () => {
        // Disable encode and checkbox if no text or file is given.
        buttonEncode.disabled = !(textareaNotEnc.value.length > 0);

        // Visual encoding only feasible if less than 30 characters.
        checkEncodeVisually.disabled = !(textareaNotEnc.value.length > 0 && textareaNotEnc.value.length < 30);
        checkEncodeVisually.checked = checkEncodeVisually.checked && !(checkEncodeVisually.disabled)

        // Show amount of characters in textarea.
        spanCountLetters.textContent = textareaNotEnc.value.length.toString()
    })

    buttonEncode.addEventListener("click", () => {

        // TODO: Check if this button has already been clicked and only scroll if so.

        spanOriginalText.textContent = "Given Text: " + textareaNotEnc.value;


        // Reveal elements of visual encoding if wanted.
        if (checkEncodeVisually.checked) {
            // Show Elements of BWT and scroll to them.
            divBWT.style.display = "";
            divBWT.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" })


        }

        // Show results.
    })
}
