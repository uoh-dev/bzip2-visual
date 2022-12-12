export class LinkedList<T> {
    private head: LinkedListNode<T>;
    private tail: LinkedListNode<T>;
    private size: number;

    constructor(data: T) {
        this.head = {
            previous: null,
            data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
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

    prepend(data: T): void {
        this.head.previous = {
            previous: null,
            data,
            next: this.head
        };
        this.head = this.head.previous;
        this.size++;
    }

    append(data: T): void {
        this.tail.next = {
            previous: this.tail,
            data,
            next: null
        };
        this.tail = this.tail.next;
        this.size++;
    }

    toArray(): T[] {
        const result = Array(this.size);
        let node = this.head;
        for (let i = 0; i < this.size; i++) {
            result[i] = node.data;
            node = node.next;
        }
        return result;
    }
}

export type LinkedListNode<T> = {
    previous: LinkedListNode<T> | null;
    data: T;
    next: LinkedListNode<T> | null;
}

export const ascii_list: LinkedList<string> = new LinkedList(String.fromCharCode(0));

for (let i = 1; i < 0xFF; i++) {
    ascii_list.append(String.fromCharCode(i));
}
