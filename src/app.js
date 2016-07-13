"use strict";

const xhr = require("./xhr");
const domHandler = require("./domHandler");
const addSongs = require("./addSongs");
const deleteBtn = require("./deleteBtn");

///////////HANDLE VIEW///////////
$("#viewDiv").hide();
$("#viewAddMusic").click(domHandler.viewAddMusic);
$("#viewMusic").click(domHandler.viewMusic);
///////////MORE SONGS///////////
$("#needMoreSongs").click(xhr.getMoreSongs);
///////////DELETE SONGS///////////
$(document).on("click", ".deleteButtons", deleteBtn);
///////////ADD SONGS///////////
$("#add").click(addSongs.addSongs);
///////////FILTER SONGS//////////
// $("#filterBtn").prop("disabled", true);
$("#filterBtn").click(addSongs.filterArtist);
