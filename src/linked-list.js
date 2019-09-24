const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = new Node;
        this.tail = new Node;
        this.length = 0;
    }

    append(data) {
        const oldTail = this.tail;
        this.tail = new Node(data, null, oldTail);
        if (!this.length) this.head = this.tail;
        else oldTail.prev = this.tail;
        this.length++;
        return this;
    }

    head() {
        return this.head.data;
    }

    tail() {
        return this.tail.data;
    }

    at(index) {
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.prev;
        }

        return temp.data;
    }

    insertAt(index, data) {
        if (this.length > 0) {
            let temp = this.head;
            for (let i = 0; i < index; i++) {
                temp = temp.prev;
            }
            temp.next.prev = new Node(data, temp, temp.next);
            this.length++;
        } else this.append(data);
    }

    isEmpty() {
        return (this.length === 0);
    }

    clear() {
        this.head = new Node;
        this.tail = this.head;
        this.length = 0;
        return new LinkedList();
    }

    deleteAt(index) {

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.prev;
        }
        if (this.length > 1) {
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
        }
        this.length--;
        return this;
    }

    reverse() {

        let temp = null, current = this.head;

        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.next;
        }
        if (temp != null) {
            this.head = temp.next;
        }
        temp = this.tail;
        this.tail = this.head;
        this.head = temp;
        return this;
    }

    indexOf(data) {
        let temp = this.head;
        for (let i = 0; i < this.length; i++) {
            if (temp.data === data) return i;
            else temp = temp.prev;
        }
        return -1;
    }
}

module.exports = LinkedList;
