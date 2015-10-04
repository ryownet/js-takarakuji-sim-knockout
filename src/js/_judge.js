
  /*
* 判定
* @param Kuji
* @return object
* TODO: 高速化
*/
var judge = function ( kuji, kujiUtil) {
  var isSameKumi = false;
  var isSameBan = false;
  var arr = kujiUtil.atariArr;
  var l = arr.length;
  for(var i=0;i<l; i++){
    //各当選回ごとにジャッジをリセット
    var isSameKumi_ = false;
    var isSameBan_ = false;
    if(arr[i].atari.kumi === kuji.kumi){
      isSameKumi_ = true;
    }else if(arr[i].atari.kumi === '##'){
      isSameKumi_ = true;
    }
    if(!isSameKumi_) continue;
    if(arr[i].atari.bangou === kuji.bangou){
      isSameBan_ = true;
    }else{
      if(arr[i].atari.bangou.indexOf('#') !== -1){

        // ＃の個数を数え、くじ番号で#の個数分を前方から削除して判定
        var komeNum = arr[i].atari.bangou.split('#').length-1;

        // くじ番号で#の個数分だけ消す
        var kujiBanNumArr = kuji.bangou.split('');
        for(var j=0; j<komeNum; j++){
         kujiBanNumArr[j] = '';
       }
       var kujiBanNum = kujiBanNumArr.join('');
       if(kujiBanNum ===  arr[i].atari.bangou.substr(komeNum)){
          isSameBan_ = true;
        }
      }
    }
    if( isSameBan_ && isSameKumi_){
      isSameKumi = isSameKumi_;
      isSameBan = isSameBan_;
      //あたり
      return arr[i];
    }
  }

  return {
    hazure: true
  }
}

module.exports = judge;