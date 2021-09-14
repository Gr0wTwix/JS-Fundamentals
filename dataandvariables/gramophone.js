function solve (nameofband,album,song) {
let songduration = (album.length*nameofband.length)*song.length/2;
let rotation = Math.ceil(songduration/2.5);
console.log(`The plate was rotated ${rotation} times.`);
}
solve(`Black Sabbath`,`Paranoid`,`War Pigs`);