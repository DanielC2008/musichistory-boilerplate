var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array.
songs.push("Toddler > by spoon on the album Gloss Drop");
songs.unshift("I Summon You > by Spoon on the album Give Me Fiction")


// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
 for (i = 0; i < songs.length; i++) {
  songs[i] = songs[i].replace(/[^0-9a-zA-Z>\s]/g, "");
 	songs[i] = songs[i].replace(">", "-");	
 }
 console.log(songs);

// Must add each string to the DOM in index.html in the main content area.
// for loop to run through array
// create a div with class titleTrack and include song name
// create 3 div with class trackInfo
getNameDiv = document.getElementById("nameDiv");
for (i = 0; i < songs.length; i++) {
	var getName = songs[i].split("-");
	getNameDiv.innerHTML += `<div> ${getName[0]} <div>`;
	getNameDiv.innerHTML += `<div> ${getName[1]} <div>`;
}

