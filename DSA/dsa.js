const palindrome  = (num) =>{

    let num1 = num.toString()

    return +num1.split('').reverse().join('')

}

console.log(palindrome(123))