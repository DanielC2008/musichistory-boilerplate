"use strict";

const firebase = require("./firebase_config");

function getSongs(callback) {
	firebase.database().ref("songs").on("value", (dataSnapshot) => {
		callback(dataSnapshot.val());
	});
}

function callMoreSongs(callback) {
	// firebase.database().ref("songs2").on("value", (dataSnapshot) => {
	// 	callback(dataSnapshot.val());
	// });	
}

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