// Title Case a sentence
//
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lowercase
//
// For the purpose of this, you should capitalize connecting words like the and of.

function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  for (let i=0; i<words.length; i++) {
   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
 }
 return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));



// with map method
// function titleCase(str) {
//   let titled = str.toLowerCase().split(" ").map(function(elem) {
//     return elem[0].toUpperCase() + elem.slice(1);
//   })
//   return titled.join(" ");
// }
//
// titleCase("I'm a little tea pot");
