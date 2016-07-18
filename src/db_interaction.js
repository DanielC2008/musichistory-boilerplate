"use strict";

const firebase = require("./firebase_config"),
    	fb = require("./fb-getter"),
    	fbData = fb(),
			domHandler = require("./domHandler");

// function getSongs(callback) {
// 	firebase.database().ref("songs").limitToFirst(5).on("value", (dataSnapshot) => {
// 		callback(dataSnapshot.val());
// 	});
// }

function getSongs() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `${fbData.url}/songs.json?orderBy="$key"&limitToFirst=5`
		}).done((songData) => {
			resolve(songData);
		});
	});
}

function callMoreSongs() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `${fbData.url}/songs.json?orderBy="$key"&limitToLast=4`
		}).done((songData) => {
			resolve(songData);
		});
	});
}
// function callMoreSongs(callback) {
// 		firebase.database().ref("songs2").once("value")
// 		.then((newSongs) => {
// 			let moreSongs = newSongs.val();
// 			for (let curr in moreSongs) {
// 				firebase.database().ref("songs").push(moreSongs[curr]);
// 		  }
// 		});
// }

function addSong() {

}

function deleteSong() {
	// firebase.database().ref("song")
}


module.exports = {
	getSongs,
	callMoreSongs,
	addSong,
	deleteSong,
};