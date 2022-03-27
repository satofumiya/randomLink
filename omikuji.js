//リンク先のURLを配列にする
result = ["daikichi.html","kichi.html","kyou.html","shoukichi.html"];

function randomLink(){
    //ランダムでインデックスを決める
    link = Math.floor(Math.random()*result.length);
    //リンク先を返す
    return location.href = "result/" + result[link];
}