class LinkedList<T> {
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;

    constructor(data: T) {
        this.head = {
            previous: null,
            data,
            next: null
        };
        this.tail = this.head;
    }

    at(i: number): T {
        let list = this.head;
        while (i-- > 0) list = list.next;
        return list.data;
    }

    prepend(data: T): void {
        this.head.previous = {
            previous: null,
            data,
            next: this.head
        };
        this.head = this.head.previous;
    }

    append(data: T): void {
        this.tail.next = {
            previous: this.tail,
            data,
            next: null
        };
        this.tail = this.tail.next;
    }
}

type LinkedListNode<T> = {
    previous: LinkedListNode<T> | null;
    data: T;
    next: LinkedListNode<T> | null;
}

const ascii_list: LinkedList<string> = new LinkedList(String.fromCharCode(0));

for (let i = 1; i < 0xFF; i++) {
    ascii_list.append(String.fromCharCode(i));
}
