type BinaryNode<T> = {
    data: T;
    parent: BinaryNode<T> | null;
    left_child: BinaryNode<T> | null;
    right_child: BinaryNode<T> | null;
};

class MinHeap<T> {
    private root: BinaryNode<T> | null;
    private rank_function: (data: T) => number;

    constructor(rank_fn: (data: T) => number) {
        this.rank_function = rank_fn;
    }

    private _init(data: T): void {
        this.root = {
            data,
            parent: null,
            left_child: null,
            right_child: null
        };
    }

    private bump(node: BinaryNode<T>): void {
        const node_rank = this.rank_function(node.data);
        let comp_node;
        while (this.rank_function((comp_node = node.parent).data) > node_rank) {
            // TODO: shuffling nodes around to meet heap-criterium.
        }
    }

    insert(data: T): void {
        // TODO: insert data using bump method.
    }
}