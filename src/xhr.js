"use strict";			

const domHandler = require("./domHandler");
let songArr = [];


// Create an XHR request
 $.ajax({
   url:"songs.json" 
 }).done(storeSongs);

//CALL MORE SONGS//////////////////////////
function getMoreSongs() {
	 $.ajax({
   url:"songs2.json" 
 }).done(storeSongs);
}

// error
function codeError() {
	alert("There was an ERROR!");
}

function storeSongs(data) {
	data.songs.forEach(function(curr) {
		songArr.push(curr);
	});
	domHandler.displaySongs(songArr);
} 

module.exports = {getMoreSongs, songArr};
