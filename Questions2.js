let str = "I am learning JavaScript, how to make a Substring of a string";
let str1 = str.substring(0,13);//makes a substring from a starting to the end of the index numbers.
let str2 = str.substr(0,24);//makes a substring from starting point to the length specified 
let str3 = str.slice(0,13); //slices up the string from starting index to the specified index 
let str4 = str.replace("I","We");//replaces the specified words to the alternative provided by the programmer.
let str5 = str.replace(/string/gi,"Objects");//there is no replaceAll function but an alternative to that is to declare the word to be replace not as a string and add// in starting and end of the word and adding g for global flag so all the occurances are changed and i to make the change irrespective of the Case of the letters of the word. 
console.log(str); 
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);

let arr = new Uint8Array(["2",3,4,5,2,9,8,7,2]);
let array=[true, false,'tokyo',"london",'paris'];
arr1 = arr.subarray(1, 5);
array1 = array.slice(1,3);
console.log(arr);
console.log(arr1);
console.log(array);
console.log(array1);