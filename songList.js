
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

var buyingList = []; //存有購買的歌曲，用物件存，購物車列表

const MycartIcon = document.getElementById("Mycart");
MycartIcon.addEventListener("mouseenter", function(){
    document.getElementById("MyCart").style.display = 'block';
})
document.getElementById("MyCart").addEventListener("mouseleave", function(){
    document.getElementById("MyCart").style.display = 'none';
})
window.addEventListener("scroll", function(){
    document.getElementById("MyCart").style.display = 'none';
})
/*document.querySelector("table").addEventListener("mouseleave", function(){
    document.querySelector("table").style.display = 'none';
})*/

//購物車新增
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

//購物車刪除
function deleteitem(deletesong){
    buyingList.splice(deletesong,1)
    //console.log(buyingList);
    Showbuyitmes(buyingList);
    
}

function Showbuyitmes(item){
    let ShowCart = document.getElementById("MyCart");
    var addCartHtml=''; 
    for(let i=0; i<item.length; i++){
        //addCartHtml += `<tr><td>${item[i].songName}</td> <td>${item[i].price}</td> <td><button id="delete" onclick="deleteitem(${i})">X</button></td></tr>`; //新增html語法 / 如果該項刪除鈕被點下去，去執行刪除function
        addCartHtml += `      
        <div class="item">
            <img src="img/${item[i].BandName}/${item[i].songName}.jpg" alt="">
            <span class="songName">${item[i].songName}</span>
            <span class="bandName">${item[i].BandName}</span>
            <span class="price">$${item[i].price}</span>
            <img class="cancel" onclick="deleteitem(${i})" src="img/icon/cancel.png" alt="">
        </div>`; //新增html語法 / 如果該項刪除鈕被點下去，去執行刪除function
    }
    //console.log(addCartHtml);
    ShowCart.innerHTML = addCartHtml + `<button class="m-3">Check Out</button>`;
}