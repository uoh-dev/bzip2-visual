import { run_length_dec } from "./bzip2_dec/run_length_dec";
import { run_length_enc } from "./bzip2_enc/run_length_enc";

const encoded = run_length_enc("\x00 abcdef");
const decoded = run_length_dec(encoded);
console.log("\x00 abcdef" === decoded);
