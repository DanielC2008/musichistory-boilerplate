"use strict";

const xhr = require("./xhr");
const domHandler = require("./domHandler");
const manipulateSongs = require("./manipulateSongs");

///////////HANDLE VIEW///////////
$("#viewDiv").hide();
$("#viewAddMusic").click(domHandler.viewAddMusic);
$("#viewMusic").click(domHandler.viewMusic);
///////////MORE SONGS///////////
$("#needMoreSongs").click(xhr.getMoreSongs);
///////////DELETE SONGS///////////
$(document).on("click", ".deleteButtons", manipulateSongs.deleteBtn);
///////////ADD SONGS///////////
$("#add").click(manipulateSongs.addSongs);
///////////FILTER SONGS//////////
$("#filterBtn").click(manipulateSongs.filterArtist);
