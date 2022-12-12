import { suffix_array, suffix_tree } from "./bzip2/burrows_wheeler_transform";
import { run_length_enc } from "./bzip2/run_length_enc";

const s = "eaee33";
const t = suffix_tree(s);
console.log(suffix_array(t));
