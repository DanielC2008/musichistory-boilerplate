"use strict";
	
const xhr = require("./xhr");
const domHandler = require("./domHandler");
let filterArr = xhr.filterArr;
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

function filterArtist() {
	let newSongArr = [];
	let newArtist = songArr.filter((curr) => curr.artist === $("#artistSelect").val());
	let newAlbum = songArr.filter((curr) => curr.album === $("#albumSelect").val());
  newSongArr = newArtist.concat(newAlbum);
	console.log(filterArr);
	console.log(newSongArr);
	let check = newSongArr[0] !== undefined ? domHandler.displaySongs(newSongArr): domHandler.displaySongs(filterArr);	
}

module.exports = {addSongs, filterArtist};