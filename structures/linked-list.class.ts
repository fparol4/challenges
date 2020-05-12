interface LinkedListInterface {
    value: any,
    next: LinkedListInterface | undefined
}

class LinkedList implements LinkedListInterface {
    public value: any
    public next: LinkedListInterface | undefined

    constructor(value: any, next: LinkedListInterface | undefined = undefined) {
        this.value = value
        this.next = next
    }
}

export default LinkedList