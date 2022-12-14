import { canonical_huffman_table, huffman_enc, huffman_tree } from "./bzip2_enc/huffman_enc";
import { MinHeap } from "./class/MinHeap";

const encoding = huffman_enc("aaaaaaaaaabcccccccccccccccddddddd");
for (const char of encoding) console.log(`${char.charCodeAt(0)} (${char.charCodeAt(0).toString(2).padStart(8, "0")})`);
