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

function addSong(newSong) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `${fbData.url}/songs.json`,
			method: "POST",
			data: JSON.stringify(newSong),
			dataType: "json"
		}).done(function(songId){
			resolve(songId);
		});
	});
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
/////////THIS IS NOT FUNCTOINAL, WILL FIX WITH ANGULAR/////////////
function filter(filterArray) {
	console.log(filterArray);
	return new Promise((resolve, reject) => {
			$.ajax({
				url: `${fbData.url}/songs/.json?orderBy="$key"&equalTo="${filterArray[0]}&equalTo="${filterArray[1]}"`,
				method: "GET"
			}).done(function(songData) {
			resolve(songData);
		});
	});		
}


module.exports = {
	getSongs,
	callMoreSongs,
	addSong,
	deleteSong,
	filter
};