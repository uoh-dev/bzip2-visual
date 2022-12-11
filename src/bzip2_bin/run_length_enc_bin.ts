export function run_length_enc_bin(array_buffer: ArrayBuffer): ArrayBuffer {
    const int8_array = new Uint8Array(array_buffer);
    const out_array: number[] = [];
    let run_value = -1;
    let counter = 0;
    for (const int8 of int8_array) {
        const binary_string = int8.toString(2).padStart(8, "0");
        for (const binary_char of binary_string) {
            const binary = parseInt(binary_char);
            if (binary === run_value && counter < 7) {
                counter += 1;
            } else {
                out_array.push(run_value * 8 + counter);
                run_value = binary;
                counter = 1;
            }
        }
    }
    out_array.push(run_value * 8 + counter);
    out_array.shift();
    if (out_array.length % 2 !== 0) out_array.push(0);
    const out_array_buffer = new ArrayBuffer(out_array.length / 2);
    const out_int8_array = new Uint8Array(out_array_buffer);
    for (let i = 0; i < out_array.length; i++) {
        out_int8_array[i] = 16 * out_array[2*i] + out_array[2*i + 1];
    }
    return out_array_buffer;
}
