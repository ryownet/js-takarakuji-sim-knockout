//kujiUtil

var kujiUtil = (function (){

  /*
ゼロうめ関数
*/
  var zeroPad = function (num, keta){
    var zero = '';
    for(var i = 0; i<keta; i++){
      zero += '0';
    }
    return ( zero + num).substr(-keta);
  };


  /*
くじクラス
  Class Kuji
*/
  var KujiKlass = function () {
    return {
      // 組は2けたのゼロ埋め数字
      kumi: zeroPad( Math.floor( Math.random() * 100 ), 2),
      // 番号は6けたのゼロ埋め数字
      bangou: zeroPad( Math.floor( Math.random() * 100000 ), 6 ),
      name : function () {
        return kumi + '組' + bangou + '番';
      }
    };
  }

  return {
    intervalID: null,
    TANKA: 300,
    INTERVAL: 2,
    atariArr: [],
    zeroPad: zeroPad,
    Kuji : KujiKlass
  }
})();

module.exports = kujiUtil;

