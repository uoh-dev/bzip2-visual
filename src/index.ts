import { move_to_front_dec } from "./bzip2_dec/move_to_front_dec";
import { run_length_dec } from "./bzip2_dec/run_length_dec";
import { huffman_enc } from "./bzip2_enc/huffman_enc";
import { move_to_front_enc } from "./bzip2_enc/move_to_front_enc";
import { run_length_enc } from "./bzip2_enc/run_length_enc";
import { LinkedList } from "./class/LinkedList";
import { show_tree } from "./front/huffman_steps";

const encode = huffman_enc("eeeabcd");
for (const char of encode) console.log(char.charCodeAt(0));
show_tree()
