// g finds all the matches not just the first
// i tells it to be case sensitive
// what goes inside // is the pattern
// [] tells to match any character in a set
// aeiou tells the match any character in a set
// "" replace it with empty string

//////// De - structured solution //////////

const str = "Remove my vowels"
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, "")
//   }

// console.log(disemvowel(str))

///////////// Basic Solution /////////////

function disemvowel(str) {
    let vowels = [ 'a', 'e', 'i', 'o', 'u']

    return str.split('').filter(element => {
        return vowels.indexOf(element.toLowerCase()) == -1
    }).join('')
}

console.log(disemvowel(str))