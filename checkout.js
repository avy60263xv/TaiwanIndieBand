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