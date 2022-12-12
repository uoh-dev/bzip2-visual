import { move_to_front_enc } from "./bzip2_ascii/move_to_front_enc";

const enc = move_to_front_enc("bananaaa").slice(256);
for (const char of enc)
    console.log(char.charCodeAt(0));
