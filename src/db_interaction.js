"use strict";

const firebase = require("./firebase_config"),
    	fb = require("./fb-getter"),
    	fbData = fb(),
			domHandler = require("./domHandler");

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
			url: `${fbData.url}/songs.json`
		}).done((songData) => {
			resolve(songData);
		});
	});
}

function addSong() {

}

function deleteSong(songId) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `${fbData.url}/songs/${songId}.json`,
			method: "DELETE"
		}).done(function(){
			resolve();
		});
	});
}


module.exports = {
	getSongs,
	callMoreSongs,
	addSong,
	deleteSong,
};