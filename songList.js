
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

//html骨架
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
    //顯示不同樂團的Banner
    songs.innerHTML = `<div class="songBanner m-3"><img src="img/${songsList.BandName}/${songsList.BandName}Banner.jpg" alt=""></div>${songList}`;
}

//撈localStorage的資料（先從字串轉回陣列-物件格式，在存到buyingList重新裡面）
var getmyShoppingList = localStorage.getItem('myShoppingList');
var buyingList; //存有購買的歌曲，用物件存，購物車列表
if(getmyShoppingList){
    buyingList = JSON.parse(getmyShoppingList);
    console.log(buyingList);
    Showbuyitmes(buyingList);
}else{
    buyingList = [];
}


//購物車滑動出現/消失
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
    
    // 新增並過濾相同的物件
    buyingList.push(song);
    const set = new Set();
   // buyingList =  buyingList.filter(item => !set.has(item.songName) ? set.add(item.songName) : false); //把第一次看到的物件留下來（用歌名比對）
    buyingList =  buyingList.filter(function(item){
        if(!set.has(item.songName)){
            return set.add(item.songName);
        }else{
            alert("此歌曲已加入購物車囉！");
        }
    }); 
    console.log(buyingList);
    //同時新增資料到localStorage(物件轉字串，存進localStorage)
    var buyingListString = JSON.stringify(buyingList);
    localStorage.setItem('myShoppingList',buyingListString);
    Showbuyitmes(buyingList);
}

//購物車刪除(先收現在的localStorage,要刪的key)
function deleteitem(key){
    //先接現在的localStorage中的資料，字串轉物件
    var buyingListString = localStorage.getItem('myShoppingList');
    buyingList = JSON.parse(buyingListString);
    buyingList.splice(key,1); //刪除使用者點的那一筆資料，並重新存回localStorage
    localStorage.setItem('myShoppingList',JSON.stringify(buyingList));
    Showbuyitmes(buyingList);
    
}

function Showbuyitmes(buyingList){
    let ShowCart = document.getElementById("MyCart");
    var addCartHtml=''; 
    for(let i=0; i<buyingList.length; i++){
        addCartHtml += `      
        <div class="item">
            <img src="img/${buyingList[i].BandName}/${buyingList[i].songName}.jpg" alt="">
            <span class="songName">${buyingList[i].songName}</span>
            <span class="bandName">${buyingList[i].BandName}</span>
            <span class="price">$${buyingList[i].price}</span>
            <img class="cancel" onclick="deleteitem(${i})" src="img/icon/cancel.png" alt="">
        </div>`; //新增html語法 / 如果該項刪除鈕被點下去，去執行刪除function
    }
    //console.log(addCartHtml);
    ShowCart.innerHTML = addCartHtml + `<button class="m-3">Check Out</button>`;
}