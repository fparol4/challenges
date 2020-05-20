const isPalindrome = (str) => {
    if (str.length <= 1) return true
    return str[0] === str.slice(-1) && isPalindrome(str.slice(1, str.length - 1))
}

console.log(isPalindrome('tacocat'))