function palindrome(num){

   const toString = num.toString()

   return finalNum =  +toString.split('').reverse().join('')
}



console.log( palindrome(123) )