const updateLight = current =>
  current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'


// function updateLight(current) {
//     return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
// }

console.log(updateLight('green'))
