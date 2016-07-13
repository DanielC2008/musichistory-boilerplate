"use strict";


// output to dom
let displaySongs = function(songArr) {
	$("#nameDiv").empty();
	$("#artistSelect").children().not(":first-child").remove();
	$("#albumSelect").children().not(":first-child").remove();
  songArr.forEach((currentSong, i) => {
	  $("#nameDiv").append(`<div id="curr--${i}" class="songDiv"></div>`); 
	  $(`#curr--${i}`).append(`<h1 class="titleTrack"> ${currentSong.title} </h1>`); 
	  $(`#curr--${i}`).append(`<h2 class="artist"> ${currentSong.artist} | </h2>`); 
	  $(`#curr--${i}`).append(`<h2 class="album"> ${currentSong.album} | </h2>`); 
	  $(`#curr--${i}`).append(`<button class="deleteButtons">Delete Song</button>`); 
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

module.exports = {displaySongs, viewAddMusic, viewMusic};