import LinkedList from './structures/linked-list.class'

/** Number to linkedList O(n) */
const numberToLinkedList = (num: number | string[]): LinkedList => {
    const fixedNumber = (typeof num === 'string') ? num : String(num).split('').reverse()
    const [firstDigit, ...lastDigits] = fixedNumber
    if (lastDigits.length) {
        return new LinkedList(firstDigit, numberToLinkedList(lastDigits))
    }
    return new LinkedList(firstDigit)
}

const numberToLinkedList_2 = (num: number): LinkedList | undefined => {
    const digit = num % 10
    const fixedDigit = digit < 1 && digit > 0 : undefined
    if (digit !== undefined) {
        return new LinkedList(digit, numberToLinkedList_2(num / 10))
    }
}

console.log(numberToLinkedList_2(10))