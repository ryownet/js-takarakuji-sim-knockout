
(function(w){
  "use strict";

  var $ = w.jQuery;
  var kujiUtil = require('./_kujiUtil');
  var judge = require('./_judge')
  var ko = window.ko || {};

  //速度計測用. 10秒間のくじ判定数をアラート
  var isDebug = false;


/*
  くじ結果データ管理のviewModel
 */

var vm = {
  totalSpendMoney: ko.observable(0),
  totalGetMoney: ko.observable(0),
  totalKujiCount: ko.observable(0),
  items: []
};
vm.sagaku = ko.computed(function() {
  var str = vm.totalGetMoney() - vm.totalSpendMoney() || 0;
  return str.toLocaleString()
}, this);
vm.sagakuIsMinus = function(){
  return vm.totalGetMoney() - vm.totalSpendMoney() || 0;
}
vm.dispItems = ko.observableArray(vm.items);



/*
スタートストップボタン管理のviewModel
*/
var actionVm = {
  isStop: ko.observable(true),
  start: function (e) {
    this.isStop(false);
    kujiUtil.intervalID = setInterval( this.getKuji, kujiUtil.INTERVAL );
    if(isDebug){
      setTimeout(function (){
        clearInterval( kujiUtil.intervalID );
        actionVm.isStop(true);
        window.alert(vm.totalKujiCount());
      }, 10000);
    }
  },
  stop: function (e) {
    this.isStop(true);
    clearInterval( kujiUtil.intervalID );
  },
  getKuji : function (){
    var k = new kujiUtil.Kuji();
    var j = judge(k, kujiUtil);
    actionVm.dispResult(j);
  },
  dispResult : function (atariKuji) {
    if( atariKuji.name ){
      // console.time('t')
      vm.totalGetMoney(vm.totalGetMoney() + atariKuji.kingaku);
      vm.items.forEach(function(itm, idx){
        if (itm.category === atariKuji.category){
          itm.atariCount(itm.atariCount()+1)
        }
      });
      //console.timeEnd('t')
    }
    vm.totalKujiCount(vm.totalKujiCount()+1);
    vm.totalSpendMoney(vm.totalSpendMoney() +  kujiUtil.TANKA);
  }
}
actionVm.isStart= ko.computed(function (){
  return !actionVm.isStop()
}, this);






$(document).ready(function (){
  $.getJSON('setting/data.json', function (data){
    kujiUtil.atariArr = data;

    var l = kujiUtil.atariArr.length;
    var category = '';
    for(var i=0; i< l; i++){
      if(kujiUtil.atariArr[i].category === category) continue;
      category = kujiUtil.atariArr[i].category;
      var atariVmData = {
        name: kujiUtil.atariArr[i].name,
        kingaku: kujiUtil.atariArr[i].kingaku,
        category: kujiUtil.atariArr[i].category,
        atariCount: ko.observable(0)
      };
      vm.items.push( atariVmData );
    }
    // knockout start!
    ko.applyBindings(vm, document.getElementById('app'));
    ko.applyBindings(actionVm, document.getElementById('actionBar'));
  })
});



})(window);
