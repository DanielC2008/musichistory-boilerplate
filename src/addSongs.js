"use strict";
	
const xhr = require("./xhr");
const domHandler = require("./domHandler");
	
let songArr = xhr.songArr;

function addSongs() {
	let newSong = {};
	newSong.title = $("#addSong").val();
	newSong.artist = $("#addArtist").val();
	newSong.album = $("#addAlbum").val();	
	songArr.push(newSong);
	domHandler.displaySongs(songArr);
}

module.exports = addSongs;