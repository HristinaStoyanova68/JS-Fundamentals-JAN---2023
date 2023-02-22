function gramophone(band, album, song) {
    //(albumName.length * bandName.length) * song-name.length / 2

    let seconds = (album.length * band.length) * song.length / 2;
    let rorations = seconds / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rorations)} times.`);
}

gramophone('Black Sabbath', 'Paranoid',

'War Pigs');
console.log('...........');
gramophone('Rammstein', 'Sehnsucht',

'Engel');