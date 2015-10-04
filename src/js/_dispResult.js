/*
dispResult
*/
module.exports = function ( atariKuji, vm, kujiUtil){
  if( atariKuji.name ){
    // console.time('t')
    vm.totalGetMoney += atariKuji.kingaku;
    vm.dispItems.forEach(function(item){
      if (item.category === atariKuji.category){
        item.atariCount++;
      }
    });

    //console.timeEnd('t')
  }
  vm.totalKujiCount++;
  vm.totalSpendMoney += kujiUtil.TANKA;
  vm.sagaku = vm.totalGetMoney - vm.totalSpendMoney;
}
