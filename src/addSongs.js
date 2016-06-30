"use strict";

$("#add").click(function() {
	let newSong = {};
	newSong.title = $("#addSong").val();
	newSong.artist = $("#addArtist").val();
	newSong.album = $("#addAlbum").val();	
		console.log(newSong.title);
	$("#nameDiv").append(`<div id="new--div" class="songDiv"></div>`); 
	$(`#new--div`).append(`<h1 class="titleTrack"> newSong.title </h1>`); 
	$(`#new--div`).append(`<h2 class="artist"> newSong.artist | </h2>`); 
	$(`#new--div`).append(`<h2 class="album"> newSong.album | </h2>`); 
	$(`#new--div`).append(`<button class="deleteButtons">Delete Song</button>`); 
});