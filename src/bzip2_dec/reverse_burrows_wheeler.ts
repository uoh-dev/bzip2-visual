import { suffix_array, suffix_tree } from "../bzip2_enc/burrows_wheeler_transform";

type $ = 0x100;
const $: $ = 0x100;

export function reverse_burrows_wheeler(input: string): string {
    let k = 0;
    const $_ptr_arr = [];
    for (; k < input.length; k++) {
        const byte = input.charCodeAt(k);
        if (0x80 & byte) break;
        $_ptr_arr.push(byte.toString(2).padStart(8, "0").slice(1));
    }
    k++;
    const $_ptr = parseInt($_ptr_arr.join(""), 2);
    const ascii_arr_noeof = input.slice(k).split("");
    const ascii_arr = ascii_arr_noeof.slice(0, $_ptr).concat([String.fromCharCode($)]).concat(ascii_arr_noeof.slice($_ptr));
    const suffix_arr = suffix_array(suffix_tree(ascii_arr));
    return "";
}
