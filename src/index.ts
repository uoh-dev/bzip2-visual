import { huffman_table } from "./bzip2_ascii/huffman_enc";
import { MinHeap } from "./class/MinHeap";

const heap = new MinHeap<number>(x => x);
heap.insert(1, 2, 0.5, 4, 1);
console.log(heap.toArray());
