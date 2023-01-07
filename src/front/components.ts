export function addEvents() {
    let textareaNotEnc:HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("textareaNotEnc");
    let checkEncodeVisually:HTMLInputElement = <HTMLInputElement>document.getElementById("checkEncodeVisually");
    let buttonEncode:HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonEncode");

    textareaNotEnc.addEventListener("input", () => {
        buttonEncode.disabled = !(textareaNotEnc.value.length >= 1);
        checkEncodeVisually.disabled = !(textareaNotEnc.value.length <= 30 && textareaNotEnc.value.length >= 1);
        checkEncodeVisually.checked = checkEncodeVisually.checked && textareaNotEnc.value.length <= 30 && textareaNotEnc.value.length >= 0    
    })
}
