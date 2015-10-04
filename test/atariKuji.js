
var atariKuji = function( num ){
  switch (num){
    case 1:
      return{
        kumi: '87',
        bangou: '178686',
        hosoku: '1等'
      }
    break;
    case 2:
      return{
        kumi: '87',
        bangou: '178687',
        hosoku: '1等の前後賞'
      }
    break;
    case 3:
      return{
        kumi: '87',
        bangou: '178685',
        hosoku: '1等の前後賞'
      }
    break;
    case 4:
      return{
        kumi: '##',
        bangou: '178686',
        hosoku: '1等の組み違い'
      }
    break;
    case 5:
      return{
        kumi: '68',
        bangou: '196663',
        hosoku: '2等'
      }
    break;
    case 6:
      return{
        kumi: '##',
        bangou: '115185',
        hosoku: '3等'
      }
    break;
    case 7:
      return{
        kumi: '##',
        bangou: '##4222',
        hosoku: '4等'
      }
    break;
    case 8:
      return{
        kumi: '##',
        bangou: '####54',
        hosoku: '5等'
      }
    break;
    case 9:
      return{
        kumi: '##',
        bangou: '#####5',
        hosoku: '6等'
      }
    break;
  }
};
module.exports = atariKuji;
