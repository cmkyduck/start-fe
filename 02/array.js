var words = ["a", "b", "c"];
// ["c"]
console.log(words.pop(), words);

words.push("d");

console.log(words);

console.log(words.join("-"));

console.log(words);

var num = [1, 2, 3];

console.log(words.concat(num));

console.log(words);

var words = ["a", "b", "c"];
console.log(words.unshift("z"));
const newWords = words.unshift("z")
console.log(words);

words[1] = 1;
console.log(words);

var words = ["a", "b", "c"];
console.log(words.slice)