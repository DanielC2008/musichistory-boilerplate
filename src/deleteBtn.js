"use strict";

const xhr = require("./xhr");
const domHandler = require("./domHandler");
let songArr = xhr.songArr;

let deleteBtn = function() {
	let arrItem = $(this).parent().attr("id").split("--")[1];
	songArr.splice(arrItem, 1);
	domHandler.displaySongs(songArr);	
};	 

module.exports = deleteBtn;



