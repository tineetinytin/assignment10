//STEP 1
// let name = prompt('Enter your name.');
// alert(name.length);

//STEP 2
// let name = prompt('Enter your name');
// let nameNum = (name.length)-1;
// // console.log(nameNum);
// let num = prompt(`Give me a number from 0 - ${nameNum}`);
// let result = alert(name.toUpperCase().charAt(num));

//STEP 3
// let fname = prompt('Enter your first name');
// let lname = prompt('Enter your last name');
// let fullName = fname.concat(' ', lname);
// // console.log(fullName);
// let full = alert(`Your name is: ${fullName}`);

//STEP 4
// let phrase = 'The quick brown fox jumps over the lazy fox';
// alert(phrase.indexOf('fox'));

//STEP 5
// let phrase = 'The quick brown fox jumps over the lazy fox';
// alert(phrase.lastIndexOf('fox'));

//STEP 6
// let phrase = 'The quick brown fox jumps over the lazy dog';
// let fullName = prompt('Enter your full name.');
// alert(phrase.replace('the lazy dog', fullName));

//STEP 7
// let phrase = 'The quick brown fox jumps over the lazy dog';
// let word = prompt('Enter a word');
// let wordMatch = new RegExp(word, 'g');
// let search = alert(phrase.match(wordMatch));

//STEP 8

//SLICE()
// let old_string = 'The quick brown fox jumps over the lazy dog';
// let new_string = old_string.slice(31,43);
// let result = alert(new_string.toUpperCase());

//SUBSTR()
// let old_string = 'The quick brown fox jumps over the lazy dog';
// let new_string = old_string.substr(31,43);
// let result = alert(new_string.toUpperCase());

//SUBSTRING()
// let old_string = 'The quick brown fox jumps over the lazy dog';
// let new_string = old_string.substring(31,43);
// let result = alert(new_string.toUpperCase());

//STEP 9
// let phrase = '  THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG  ';
// let lower = alert(phrase.trim().toLowerCase());

//STEP 10
let phrase = 'The quick brown fox jumps over the lazy dog';
function capitalizeFirstLetter(phrase) {
    return alert(phrase.charAt(0).toUpperCase() + phrase.slice(1));
  }
capitalizeFirstLetter(phrase);

