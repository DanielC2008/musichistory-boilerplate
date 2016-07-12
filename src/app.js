"use strict";

const xhr = require("./xhr");
const domHandler = require("./domHandler");
const addSongs = require("./addSongs");
const deleteBtn = require("./deleteBtn");

///////////HANDLE VIEW///////////
$("#viewDiv").hide();
$("#viewAddMusic").click(domHandler.viewAddMusic);
$("#viewMusic").click(domHandler.viewMusic)
$("#needMoreSongs").click(xhr.getMoreSongs);
$(document).on("click", ".deleteButtons", deleteBtn);
$("#add").click(addSongs);