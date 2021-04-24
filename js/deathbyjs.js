//STEP 1
function alphabet_order(str) {
return str.split('').sort().join('');
}

console.log(alphabet_order('webmaster'));

//STEP 2
function uppercase(str) {
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase('the quick brown fox'));

//STEP 3
function vowel_count(str1) {
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count('The quick brown fox'));

//STEP 4
function makeid(l) {
var text = '';
var char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));



//STEP 5
function Longest_Country_Name(country_name) {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
'');
}
console.log(Longest_Country_Name(['Philippines', 'Indonesia', 'United States of America']));