const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node;
        this._tail = new Node;
        this.length = 0;
    }

    append(data) {
        const oldTail = this._tail;
        this._tail = new Node(data, null, oldTail);
        if (!this.length) this._head = this._tail;
        else oldTail.prev = this._tail;
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let temp = this._head;
        for (let i = 0; i < index; i++) {
            temp = temp.prev;
        }

        return temp.data;
    }

    insertAt(index, data) {
        if (this.length > 0) {
            let temp = this._head;
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
        this._head = new Node;
        this._tail = this._head;
        this.length = 0;
        return new LinkedList();
    }

    deleteAt(index) {

        let temp = this._head;
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

        let temp = null, current = this._head;

        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.next;
        }
        if (temp != null) {
            this._head = temp.next;
        }
        temp = this._tail;
        this._tail = this._head;
        this._head = temp;
        return this;
    }

    indexOf(data) {
        let temp = this._head;
        for (let i = 0; i < this.length; i++) {
            if (temp.data === data) return i;
            else temp = temp.prev;
        }
        return -1;
    }
}

module.exports = LinkedList;
