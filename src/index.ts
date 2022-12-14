import { canonical_huffman_table, huffman_tree } from "./bzip2_ascii/huffman_enc";
import { MinHeap } from "./class/MinHeap";

const encoding = canonical_huffman_table("aaaaaaaaaabcccccccccccccccddddddd");
console.log(encoding);
