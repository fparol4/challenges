interface LinkedListInterface {
    value: any,
    next: LinkedListInterface | undefined
}

class LinkedList implements LinkedListInterface {
    public value: any
    public next: LinkedListInterface

    constructor(value: any, next: LinkedListInterface) {
        this.value = value
        this.next = next
    }
}

export default LinkedList