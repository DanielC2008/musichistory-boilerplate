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
	domHandler.viewMusic();
	}

function filterSongs() {
	let newArtist = songArr.filter((curr) => curr.artist === $("#artistSelect").val());
	let newAlbum = songArr.filter((curr) => curr.album === $("#albumSelect").val());

	// console.log(newAlbum);
	// songArr = newArtist[0] !== undefined ? newArtist: songArr;
	// let pushAlbum = newAlbum[0] !== undefined ? 
		// songArr.splice(0, songArr.length, newAlbum.forEach((curr) => {
			songArr.splice(0, songArr.length, newArtist[0]);
			songArr.push(newAlbum[0]);
		// })
	// : songArr;
	console.log(songArr);

}


module.exports = {addSongs, filterSongs};