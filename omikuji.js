
//おみくじの結果を配列に
omikujiResult = [["大吉","車"],["吉","新聞紙"],["凶","家"]];
//ランダムでおみくじの結果を出す
function randomOmikuji(){
    result = Math.floor(Math.random()*omikujiResult.length);
    return omikujiResult[result];
}



const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

//ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
    modal.style.display = 'block';
    //モーダルウィンドウの要素の取得と変更
    const result = document.getElementById('omikuji-result');
    const item = document.getElementById('item');
    let resultList = randomOmikuji();
    result.textContent = resultList[0];
    item.textContent = resultList[1];
};

//バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
    modal.style.display = 'none';
};

//モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
    if (e.target == modal) {
    modal.style.display = 'none';
    };
};

