var getNameDiv = document.getElementById("nameDiv");
getNameDiv.addEventListener("click", deleteSong);				


function getSongs() {
 	var data = JSON.parse(event.target.responseText);
  // Show usage of JSON.parse() here to get a POJO
  for (i = 0; i < data.songs.length; i++) { //<-------------start loop to add song content to page
  	var currentSong = data.songs[i];
	  getNameDiv.innerHTML += `<div class="songDiv"><h1 class="titleTrack"> ${currentSong.title} </h1><h2 class="artist"> ${currentSong.artist} | </h2>
<h2 class="album"> ${currentSong.album} | </h2><button class="deleteButtons">Delete Song</button></div>`;
	}
}

function deleteSong () {
  event.currentTarget.removeChild(event.target.parentNode);
}

function codeError() {
	alert("There was an ERROR!");
}

// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", getSongs);
myRequest.addEventListener("error", codeError);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "songs.json");

// Tell the XHR object to start
myRequest.send();


//CALL MORE SONGS//////////////////////////
var buttonMoreSongs = document.getElementById("needMoreSongs");
buttonMoreSongs.addEventListener("click", getMoreSongs);

function getMoreSongs() {
	var moreSongs = new XMLHttpRequest();
	moreSongs.addEventListener("load", getSongs);
	moreSongs.addEventListener("error", codeError);

	moreSongs.open("GET", "songs2.json")
	moreSongs.send();
}

