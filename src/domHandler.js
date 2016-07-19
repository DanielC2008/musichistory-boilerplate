"use strict";


// output to dom
function displaySongs(songObj) {
	$("#nameDiv").empty();
  for (let curr in songObj) {
	  $("#nameDiv").append(`<div id="${curr}" class="songDiv"></div>`); 
	  $(`#${curr}`).append(`<h1 class="titleTrack"> ${songObj[curr].title} </h1>`); 
	  $(`#${curr}`).append(`<h2 class="artist"> ${songObj[curr].artist} | </h2>`); 
	  $(`#${curr}`).append(`<h2 class="album"> ${songObj[curr].album} | </h2>`); 
	  $(`#${curr}`).append(`<button class="deleteButtons">Delete Song</button>`); 
	}
	filterSelect(songObj);
}

let filterSelect = function(songObj) {
	$("#artistSelect").children().not(":first-child").remove();
	$("#albumSelect").children().not(":first-child").remove();
		for (let currentSong in songObj) {
			$("#artistSelect").append(`<option class="artistChoice">${songObj[currentSong].artist}</option>`);
	  	$("#albumSelect").append(`<option class="albulmChoice">${songObj[currentSong].album}</option>`);
		}
};


let viewAddMusic = () => {
	$("#nameDiv").hide();
	$("#viewDiv").show();
};

let viewMusic = () => {
	$("#viewDiv").hide();
	$("#nameDiv").show();
};

module.exports = {displaySongs, filterSelect, viewAddMusic, viewMusic};