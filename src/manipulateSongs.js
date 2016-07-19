"use strict";
	
const xhr = require("./xhr"),
      domHandler = require("./domHandler"),
			db = require("./db_interaction");
let filterArr = xhr.filterArr;
let songArr = xhr.songArr;

function addSongs() {
	let newSong = {};
	newSong.title = $("#addSong").val();
	newSong.artist = $("#addArtist").val();
	newSong.album = $("#addAlbum").val();	
	db.addSong(newSong)
	.then(function() {
		db.callMoreSongs()
		.then(function(songData) {
		domHandler.displaySongs(songData);
		domHandler.viewMusic();
		});
	});
}

//songArr remains the same unless newSongArr has something in it
let filterArtist = function() {
	console.log("youclicked");
	let newSongArr = [];
	let newArtist = filterArr.filter((curr) => curr.artist === $("#artistSelect").val());
	let newAlbum = filterArr.filter((curr) => curr.album === $("#albumSelect").val());
  newSongArr = newArtist.concat(newAlbum);
  console.log(newSongArr);
  newSongArr = newSongArr.filter((curr, i, inputArr) => {
  	return inputArr.indexOf(curr) == i;
  });
  songArr = newSongArr;
	console.log(songArr);
	let check = newSongArr[0] !== undefined ? domHandler.displaySongs(songArr): domHandler.displaySongs(filterArr);	
};

let deleteBtn = function() {
	let songId = $(this).parent().attr("id");
	db.deleteSong(songId)
	.then(function(){
		db.callMoreSongs()
		.then(function(songData) {
		domHandler.displaySongs(songData);
		});
	});
};


module.exports = {addSongs, filterArtist, deleteBtn};