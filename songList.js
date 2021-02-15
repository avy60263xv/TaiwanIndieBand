
//動態改變頁面樂團歌單
const BandListName = document.getElementById("BandListName");
const ListNames = BandListName.querySelectorAll("li");
//console.log(ListNames);
for(let i=0; i<ListNames.length; i++){
    ListNames[i].addEventListener("click", ChangePageSongs);
}
function ChangePageSongs(){
    let BandName = this.getAttribute("data-value")
    //console.log(BandName);
    var requestURL = `JSON/${BandName}.json`;
    fetch(requestURL).then(function(response) {
        response.json().then(function(songsList) {
            //console.log(songsList);
            //console.log('樂團'+songsList.BandName);
            //console.log('歌名'+songsList.songs[0].songName);
            //console.log('價錢'+songsList.songs[0].price);
            window.onload = showSongList(songsList);
        });
      });    
}

function showSongList(songsList){
    let songs = document.getElementById("songs");
    var songList = '';
    for(let i=0;i<songsList.songs.length;i++){
        songsHtml= `
            <div class="song my-3">
                <img src="img/${songsList.BandName}/${songsList.songs[i].songName}.jpg" alt="">
                <span class="SongName my-3">${songsList.songs[i].songName}</span>
                <span>${songsList.BandName}</span>
                <img src="img/icon/play.png" alt="">
                <img onclick="additem('${songsList.BandName}', '${songsList.songs[i].songName}', '${songsList.songs[i].price}')" src="img/icon/add.png" alt="">
            </div>
            `
        songList += songsHtml;
    }
    //console.log(songList);
    songs.innerHTML = `<div class="songBanner m-3"><img src="img/${songsList.BandName}/${songsList.BandName}Banner.jpg" alt=""></div>${songList}`;
}

var buyingList = []; //存有購買的歌曲，用物件存
//購物車列表
function additem(BandName, songName, price){
    var song = {
        BandName: BandName,
        songName: songName,
        price: price
    };
    buyingList.push(song); //購買一筆歌曲
    //console.log(buyingList);
    Showbuyitmes(buyingList);
}

function deleteitem(){

}

function Showbuyitmes(item){
    let ShowCart = document.getElementById("ShowCart");
    //let addCartHtml = `<li>${songName} $${price} <button class="cancelX">X</button></li>`;
    console.log(item);

    
}