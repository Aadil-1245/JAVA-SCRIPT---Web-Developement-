// What if the people type their name like this one = 'AadIL" - like mixed of lower and upper case letter.
var name = "ThalapathY vijay ";
var nl = name.slice(0,1);
var nlm = nl.toUpperCase();
var nol = name.slice(1,name.length);
var bl = nol.toLowerCase();
var final =  nlm + bl ; 
console.log(final);