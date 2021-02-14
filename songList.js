var requestURL = 'JSON/美秀集團.json';
fetch(requestURL).then(function(response) {
    response.json().then(function(songsList) {
        console.log(songsList);
        console.log('樂團'+songsList.BandName);
        console.log('歌名'+songsList.songs[0].songName);
        console.log('價錢'+songsList.songs[0].price);
        window.onload = showSongList(songsList);
    });
  });
  
showSongList(songsList);

function showSongList(songsList){
    let songs = document.getElementById("songs");
    var songList = '';
    for(let i=0;i<songsList.songs.length;i++){
        songsHtml= `
            <div class="song my-3">
                <img src="img/美秀集團/捲煙.jpg" alt="">
                <span class="SongName my-3">${songsList.songs[i].songName}</span>
                <span>${songsList.BandName}</span>
                <img src="img/icon/play.png" alt="">
                <img src="img/icon/add.png" alt="">
            </div>
            `
        songList += songsHtml;
    }
    console.log(songList);
    songs.innerHTML = `<div class="songBanner m-3"><img src="img/${songsList.BandName}/${songsList.BandName}Banner.jpg" alt=""></div>${songList}`;
}