export class LinkedList<T> {
    private head: LinkedListNode<T> | null;
    private tail: LinkedListNode<T> | null;
    private _size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    at(i: number): T {
        let list = this.head;
        while (i-- > 0) list = list.next;
        return list.data;
    }

    indexOf(data: T): number {
        let i = 0;
        let node = this.head
        do {
            if (node.data === data) return i;
            i++;
        } while (node = node.next);
    }

    private _init(data: T): void {
        this.head = {
            previous: null,
            data,
            next: null
        };
        this.tail = this.head;
        this._size = 1;
    }

    prepend(data: T): void {
        if (!this.head) return this._init(data);
        this.head.previous = {
            previous: null,
            data,
            next: this.head
        };
        this.head = this.head.previous;
        this._size++;
    }

    append(data: T): void {
        if (!this.tail) return this._init(data);
        this.tail.next = {
            previous: this.tail,
            data,
            next: null
        };
        this.tail = this.tail.next;
        this._size++;
    }

    insert(data: T, i: number): void {
        let node = this.head;
        while (i-- > 0) {
            node = node.next;
        }
        const newnode: LinkedListNode<T> = {
            previous: node.previous,
            data,
            next: node
        };
        node.previous.next = newnode;
        node.previous = newnode;
    }

    remove(i: number): void {
        if (i === 0) return this.remove_head();
        if (i === this._size - 1) return this.remove_tail();
        let node = this.head;
        while (i-- > 0) {
            node = node.next;
        }
        // Assumption: V8 garbage-collects this.
        if (node.next) node.next.previous = node.previous;
        if (node.previous) node.previous.next = node.next;
        this._size--;
    }

    remove_head(): void {
        if (!this.head) return;
        this.head = this.head.next;
        this._size--;
        if (!this.head) return;
        this.head.previous = null;
    }

    remove_tail(): void {
        if (!this.tail) return;
        this.tail = this.tail.previous;
        this._size--;
        if (!this.tail) return;
        this.tail.next = null;
    }

    toArray(): T[] {
        const result = Array(this._size);
        let node = this.head;
        for (let i = 0; i < this._size; i++) {
            result[i] = node.data;
            node = node.next;
        }
        return result;
    }

    size(): number {
        return this._size;
    }
}

type LinkedListNode<T> = {
    previous: LinkedListNode<T> | null;
    data: T;
    next: LinkedListNode<T> | null;
}
