"use strict";

// const xhr = require("./xhr");
let $getNameDiv = $("#nameDiv");

// output to dom
let displaySongs = function(songArr) {
	$getNameDiv.empty();
  songArr.forEach((currentSong, i) => {
	  $getNameDiv.append(`<div id="curr--${i}" class="songDiv"></div>`); 
	  $(`#curr--${i}`).append(`<h1 class="titleTrack"> ${currentSong.title} </h1>`); 
	  $(`#curr--${i}`).append(`<h2 class="artist"> ${currentSong.artist} | </h2>`); 
	  $(`#curr--${i}`).append(`<h2 class="album"> ${currentSong.album} | </h2>`); 
	  $(`#curr--${i}`).append(`<button class="deleteButtons">Delete Song</button>`); 
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