"use strict";

const firebase = require("./firebase_config");
const domHandler = require("./domHandler");

function getSongs(callback) {
	firebase.database().ref("songs").on("value", (dataSnapshot) => {
		callback(dataSnapshot.val());
	});
}

function callMoreSongs(callback) {
		firebase.database().ref("songs2").once("value")
		.then((newSongs) => {
			let moreSongs = newSongs.val();
			for (let curr in moreSongs) {
				firebase.database().ref("songs").push(moreSongs[curr]);
		  }
		});
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