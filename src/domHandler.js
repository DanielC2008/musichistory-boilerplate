"use strict";


// output to dom
function displaySongs(songObj) {
	$("#nameDiv").empty();
	let i = 0;
  for (let curr in songObj) {
	  $("#nameDiv").append(`<div id="${curr}" class="songDiv"></div>`); 
	  $(`#${curr}`).append(`<h1 class="titleTrack"> ${songObj[curr].title} </h1>`); 
	  $(`#${curr}`).append(`<h2 class="artist"> ${songObj[curr].artist} | </h2>`); 
	  $(`#${curr}`).append(`<h2 class="album"> ${songObj[curr].album} | </h2>`); 
	  $(`#${curr}`).append(`<button class="deleteButtons">Delete Song</button>`); 
	  i++;
	}
}

let filterSelect = function(filterArr) {
	$("#artistSelect").children().not(":first-child").remove();
	$("#albumSelect").children().not(":first-child").remove();
		filterArr.forEach((currentSong) => {
		$("#artistSelect").append(`<option class="artistChoice">${currentSong.artist}</option>`);
	  $("#albumSelect").append(`<option class="albulmChoice">${currentSong.album}</option>`);
		});
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