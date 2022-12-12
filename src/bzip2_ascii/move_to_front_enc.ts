import { LinkedList } from "../class/LinkedList";

export function move_to_front_enc(input: string): string {
    const ascii_list: LinkedList<string> = new LinkedList(String.fromCharCode(0));
    for (let i = 1; i < 0x100; i++) {
        ascii_list.append(String.fromCharCode(i));
    }
    const out: string[] = Array(input.length);
    for (let i = 0; i < input.length; i++) {
        const index = ascii_list.indexOf(input[i]);
        console.log(`${input[i]}: index ${index}`);
        out[i] = String.fromCharCode(index);
        ascii_list.remove(index);
        ascii_list.prepend(input[i]);
    }
    return ascii_list.toArray().join("") + out.join("");
}
