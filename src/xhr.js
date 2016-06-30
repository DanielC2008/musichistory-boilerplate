"use strict";			
// Create an XHR request
 $.ajax({
   url:"songs.json" 
 }).done(getSongs);

// output to dom
function getSongs(data) {
  getNameDiv.empty();
  let currentSong = data.songs;
  for (var i = 0; i < data.songs.length; i++) { 
	  getNameDiv.append(`<div id="curr--${i}" class="songDiv"></div>`); 
	  $(`#curr--${i}`).append(`<h1 class="titleTrack"> ${currentSong[i].title} </h1>`); 
	  $(`#curr--${i}`).append(`<h2 class="artist"> ${currentSong[i].artist} | </h2>`); 
	  $(`#curr--${i}`).append(`<h2 class="album"> ${currentSong[i].album} | </h2>`); 
	  $(`#curr--${i}`).append(`<button class="deleteButtons">Delete Song</button>`); 

	}
}
// error
function codeError() {
	alert("There was an ERROR!");
}

//CALL MORE SONGS//////////////////////////
$("#needMoreSongs").on("click", function getMoreSongs() {
	 $.ajax({
   url:"songs2.json" 
 }).done(getSongs);
});


// delete button
let getNameDiv = $("#nameDiv");
getNameDiv.on("click", function() {
  $(event.target).parent().remove();	
});	



$("#add").click(function() {
	let newSong = {};
	newSong.title = $("#addSong").val();
	newSong.artist = $("#addArtist").val();
	newSong.album = $("#addAlbum").val();	
	$("#nameDiv").append(`<div id="new--div" class="songDiv"></div>`); 
	$(`#new--div`).append(`<h1 class="titleTrack"> newSong.title </h1>`); 
	$(`#new--div`).append(`<h2 class="artist"> newSong.artist | </h2>`); 
	$(`#new--div`).append(`<h2 class="album"> newSong.album | </h2>`); 
	$(`#new--div`).append(`<button class="deleteButtons">Delete Song</button>`); 
});