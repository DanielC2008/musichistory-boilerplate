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

//songArr remains the same unless newSongArr has something in it
function filterArtist() {
	let newSongArr = [];
	let newArtist = filterArr.filter((curr) => curr.artist === $("#artistSelect").val());
	let newAlbum = filterArr.filter((curr) => curr.album === $("#albumSelect").val());
  newSongArr = newArtist.concat(newAlbum);
  newSongArr = newSongArr.filter((curr, i, inputArr) => {
  	return inputArr.indexOf(curr) == i;
  });
  songArr = newSongArr;
	let check = newSongArr[0] !== undefined ? domHandler.displaySongs(songArr): domHandler.displaySongs(filterArr);	
}

let deleteBtn = function() {
	let arrItem = $(this).parent().attr("id").split("--")[1];
	songArr.splice(arrItem, 1);
	domHandler.displaySongs(songArr);	
};


module.exports = {addSongs, filterArtist, deleteBtn};