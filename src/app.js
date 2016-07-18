"use strict";

const xhr = require("./xhr");
const domHandler = require("./domHandler");
const manipulateSongs = require("./manipulateSongs");
const db = require("./db_interaction");


db.getSongs()
.then(function(songData) {
	domHandler.displaySongs(songData);
});
///////////HANDLE VIEW///////////
$("#viewDiv").hide();
$("#viewAddMusic").click(domHandler.viewAddMusic);
$("#viewMusic").click(domHandler.viewMusic);
///////////MORE SONGS///////////
$(document).on("click", "#needMoreSongs", function() {
	db.callMoreSongs()
	.then(function(songData) {
		domHandler.displaySongs(songData);
	});
});
///////////DELETE SONGS///////////
$(document).on("click", ".deleteButtons", manipulateSongs.deleteBtn);
///////////ADD SONGS///////////
$("#add").click(manipulateSongs.addSongs);
///////////FILTER SONGS//////////
$("#filterBtn").click(manipulateSongs.filterArtist);
