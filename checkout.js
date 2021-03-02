//撈localStorage的資料（先從字串轉回陣列-物件格式，在存到buyingList重新裡面）
var getmyShoppingList = localStorage.getItem('myShoppingList');
var buyingList; //存有購買的歌曲，用物件存，購物車列表
if(getmyShoppingList){
    buyingList = JSON.parse(getmyShoppingList);
    //console.log(buyingList);
    Showbuyitmes(buyingList);
}else{
    buyingList = [];
}


//頁面顯示資料
checkbuyitmes(buyingList);


//購物車刪除(先收現在的localStorage,要刪的key)
function deleteitem(key){
    //先接現在的localStorage中的資料，字串轉物件
    var buyingListString = localStorage.getItem('myShoppingList');
    buyingList = JSON.parse(buyingListString);
    buyingList.splice(key,1); //刪除使用者點的那一筆資料，並重新存回localStorage
    localStorage.setItem('myShoppingList',JSON.stringify(buyingList));
    Showbuyitmes(buyingList);
    checkbuyitmes(buyingList);
}

function checkbuyitmes(buyingList){
    let CheckCart = document.getElementById("CheckCart");
    //console.log(CheckCart);
    var CheckCartHtml=''; 
    let totalMoney = 0;
    for(let i=0; i<buyingList.length; i++){
        totalMoney += parseInt(buyingList[i].price);
        CheckCartHtml += `      
        <tr class="item">
            <th scope="row">${i+1}</th>
            <td><img class="songPic" src="img/${buyingList[i].BandName}/${buyingList[i].songName}.jpg" alt=""></td>
            <td><span class="songName">${buyingList[i].songName}</span></td>
            <td><span class="bandName">${buyingList[i].BandName}</span></td>
            <td><span class="price">$${buyingList[i].price}</span></td>
            <td><img class="cancelIcon" class="cancel" onclick="deleteitem(${i})" src="img/icon/cancel.png" alt=""></td>
        </tr>`; //新增html語法 / 如果該項刪除鈕被點下去，去執行刪除function
    }
    let totalSum = document.getElementById("totalSum");
    
    //console.log(addCartHtml);
    CheckCart.innerHTML = CheckCartHtml;
    totalSum.innerHTML = `<td id="totalSum">${totalMoney}</td>`;
}

var stepper1Node = document.querySelector('#stepper1');
var stepper1 = new Stepper(document.querySelector('#stepper1'));

function finish(){
    alert("下訂完成");
    self.location = 'index.html';

    //先接現在的localStorage中的資料，字串轉物件
    var buyingListString = localStorage.getItem('myShoppingList');
    buyingList = JSON.parse(buyingListString);
    buyingList='';
    localStorage.setItem('myShoppingList',buyingList);
    Showbuyitmes(buyingList);
}