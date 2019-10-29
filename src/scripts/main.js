/*
    Purpose:
    Get a random number fact and append it to the DOM.
*/

import data from "./data.js"
import dom from "./dom.js"
import libraryMembers from "./libraryMembers.js"


// data.getNumberTrivia()
//     .then(triviaResponse => dom.printToDom(triviaResponse));


// let member = MembersBooksMethods.getMember("Daisy", "Stemm")
// console.log(member.books[0]);

let booksRose = libraryMembers.getCheckedOutBooks("Rose", "Thorne");

console.log("Rose's Books: ", booksRose);

// let afterCheckoutBooksRose = 

libraryMembers.memberCheckOutBook("Rose", "Thorne", "The Little Prince");

console.log("Rose's Books: ", booksRose);