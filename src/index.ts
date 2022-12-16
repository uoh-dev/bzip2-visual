import { move_to_front_dec } from "./bzip2_dec/move_to_front_dec";
import { run_length_dec } from "./bzip2_dec/run_length_dec";
import { move_to_front_enc } from "./bzip2_enc/move_to_front_enc";
import { run_length_enc } from "./bzip2_enc/run_length_enc";
import { LinkedList } from "./class/LinkedList";

const encode = move_to_front_enc("abcdef");
const decode = move_to_front_dec(encode);
console.log(decode);
