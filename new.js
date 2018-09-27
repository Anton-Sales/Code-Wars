const string = "hello"

function removeVowels (str) {
    let vowels = [ 'a', 'e', 'i', 'o', 'u' ]
    
    return str.split('').filter(element => {
         return vowels.indexOf(element.toLowerCase()) == -1
    }).join('')
}

console.log(removeVowels(string))