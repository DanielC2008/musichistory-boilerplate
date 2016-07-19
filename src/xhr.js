"use strict";			

const domHandler = require("./domHandler");
const db = require("./db_interaction");

let songArr = [];
let filterArr = [];

// Create an XHR request
 // $.ajax({
 //   url:"songs.json" 
 // }).done(storeSongs);

//CALL MORE SONGS//////////////////////////
function getMoreSongs() {
}

// error
function codeError() {
	alert("There was an ERROR!");
}

function storeSongs(data) {
	// for (let curr in data) {
	// 	songArr.push(data[curr]);
	// 	filterArr.push(data[curr]);
	// }
	// domHandler.displaySongs(songArr);
	// domHandler.filterSelect(filterArr);
} 

module.exports = {getMoreSongs, songArr, filterArr};
