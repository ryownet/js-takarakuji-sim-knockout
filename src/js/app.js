
(function(w){
  "use strict";

  var $ = w.jQuery;
  var kujiUtil = require('./_kujiUtil');
  var dispResult = require('./_dispResult');
  var judge = require('./_judge')

  //速度計測用. 10秒間のくじ判定数をアラート
  var isDebug = false;


/*
  くじ結果データ管理のviewModel
 */
var vm = new Vue({
  el: '#app',
  data: {
    totalSpendMoney: 0,
    totalGetMoney: 0,
    totalKujiCount: 0,
    sagaku: 0,
    dispItems: []
  },
  computed: {
    isMinus: function () {
      return this.sagaku < 0 ;
    }
  }
});
Vue.filter('kanma', function (value) {
  return value.toLocaleString();
})

/*
スタートストップボタン管理のviewModel
*/
var actionVm = new Vue({
  el: '#actionBar',
  data: {
    isStop: true,
    isStart: false
  },
  methods: {
    start: function (e) {
      this.isStop = false;
      this.isStart = true;
      kujiUtil.intervalID = setInterval( this.getKuji, kujiUtil.INTERVAL );
      if(isDebug){
        setTimeout(function (){
          clearInterval( kujiUtil.intervalID );
          this.isStop = true;
          window.alert(vm.totalKujiCount);
        }, 10000);
      }
    },
    stop: function (e) {
      this.isStop = true;
      this.isStart = false;
      clearInterval( kujiUtil.intervalID );
    },
    getKuji : function (){
      var k = new kujiUtil.Kuji();
      var j = judge(k, kujiUtil);
      dispResult(j, vm, kujiUtil);
    }
  }
});







$(document).ready(function (){
  $.getJSON('setting/data.json', function (data){
    kujiUtil.atariArr = data;

    var l = kujiUtil.atariArr.length;
    var category = '';
    var items = [];
    for(var i=0; i< l; i++){
      if(kujiUtil.atariArr[i].category === category) continue;
      category = kujiUtil.atariArr[i].category;
      var atariVmData = {
        name: kujiUtil.atariArr[i].name,
        kingaku: kujiUtil.atariArr[i].kingaku,
        category: kujiUtil.atariArr[i].category,
        atariCount: 0
      };
      vm.dispItems.push( atariVmData );
    }
  })
});




})(window);
