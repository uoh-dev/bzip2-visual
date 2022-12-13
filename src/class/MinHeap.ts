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
        while ((compare_i = parent_of(bump_i)) >= 0 && this.rank_function(this.heap[compare_i]) > rank) {
            this.swap(compare_i, bump_i);
            bump_i = compare_i;
        }
    }

    private pmub(i: number): void {
        const rank = this.rank_function(this.heap[i]);
        let pmub_i = i;
        while (true) {
            const lc = left_child(pmub_i);
            const rc = right_child(pmub_i);
            if (lc < this.heap.length && rc < this.heap.length) {
                if (this.heap[lc] >= this.heap[pmub_i] && this.heap[rc] >= this.heap[pmub_i]) break;
                else if (this.heap[lc] < this.heap[rc]) {
                    this.swap(lc, pmub_i);
                    pmub_i = lc;
                } else {
                    this.swap(rc, pmub_i);
                    pmub_i = rc;
                }
            } else if (lc < this.heap.length) {
                if (this.heap[lc] >= this.heap[pmub_i]) break;
                else {
                    this.swap(lc, pmub_i);
                    pmub_i = lc;
                }
            } else if (rc < this.heap.length) {
                if (this.heap[rc] >= this.heap[pmub_i]) break;
                else {
                    this.swap(rc, pmub_i);
                    pmub_i = rc;
                }
            } else break;
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

    pop(): T {
        this.swap(0, this.heap.length - 1);
        const res = this.heap.pop();
        if (this.heap.length > 1) this.pmub(0);
        return res;
    }

    // Warning: potentially unsafe to heap structure. Should not be altered.
    toArray(): readonly T[] {
        return Array.from(this.heap);
    }
}
