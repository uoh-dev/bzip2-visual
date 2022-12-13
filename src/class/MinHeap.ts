const parent_of = (i: number) => i % 2 === 0 ? (i - 2) / 2 : (i - 1) / 2;
const left_child = (i: number) => 2 * i + 1;
const right_child = (i: number) => 2 * i + 2;

export class MinHeap<T> {
    private rank_function: (data: T) => number;
    private heap: T[];
    private _size: number;
    private _max_size: number;
    
    constructor(rank_fn: (data: T) => number) {
        this.rank_function = rank_fn;
        this.heap = [];
    }

    private bump(i: number): void {
        const rank = this.rank_function(this.heap[i]);
        let bump_i = i;
        let compare_i;
        while (this.rank_function(this.heap[compare_i = parent_of(bump_i)]) > rank) {
            this.swap(compare_i, bump_i);
            bump_i = compare_i;
        }
    }

    private swap(i: number, j: number): void {
        const val_i = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = val_i;
    }

    insert(...datas: T[]): void {
        for (const data of datas) {
            this.heap.push(data);
            this.bump(this.heap.length - 1);
        }
    }

    // Warning: potentially unsafe to heap structure. Should not be altered.
    toArray(): readonly T[] {
        return Array.from(this.heap);
    }
}
