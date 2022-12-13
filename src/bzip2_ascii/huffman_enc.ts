import { MinHeap } from "../class/MinHeap";

type BinNode<T> = {
    parent: BinNode<T> | null;
    left_child: BinNode<T> | null;
    right_child: BinNode<T> | null;
    data: T;
}

export function huffman_tree(input: string): BinNode<{ code?: number, count: number }> {
    const counters: number[] = Array(256).fill(0);
    for (const char of input) counters[char.codePointAt(0)]++;
    const heap = new MinHeap<BinNode<{ code?: number, count: number }>>(x => x.data.count);
    heap.insert(...counters.filter(count => count > 0).map((count, code) => ({
        parent: null,
        left_child: null,
        right_child: null,
        data: {
            count,
            code
        }
    })));
    console.log(heap);
    let node1, node2;
    while ((node1 = heap.pop()) && (node2 = heap.pop())) {
        const node: BinNode<{ code?: number, count: number }> = {
            parent: null,
            left_child: node1,
            right_child: node2,
            data: {
                count: node1.data.count + node2.data.count
            }
        }
        node1.parent = node;
        node2.parent = node;
    }
    return node1;
}
