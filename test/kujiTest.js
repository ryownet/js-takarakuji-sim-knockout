// judge 関数のチェック

var assert = require('assert');
var kujiUtil = require('../src/js/_kujiUtil');

kujiUtil.atariArr = require('../public/setting/data.json');

var AtariKuji = require('./atariKuji');
var HazureKuji = require('./hazureKuji');

var judge = require('../src/js/_judge');
 
describe('judge', function () {
  describe('くじ', function () {
    it('1等が当たること', function () {
      var k = new AtariKuji(1);
      var j = judge(k, kujiUtil);
        assert.equal(j.name , '1等');
    });

    it('前後賞が当たること[前]', function () {
      var k = new AtariKuji(2);
      var j = judge(k, kujiUtil);
        assert.equal(j.name , '1等の前後賞');
    });

    it('前後賞が当たること[後]', function () {
      var k = new AtariKuji(3);
      var j = judge(k, kujiUtil);
        assert.equal(j.name , '1等の前後賞');
    });

    it('組み違い賞が当たること', function () {
      var k = new AtariKuji(4);
      var j = judge(k, kujiUtil);
        assert.equal(j.name , '1等の組み違い');
    });

    it('2等が当たること', function () {
      var k = new AtariKuji(5);
      var j = judge(k, kujiUtil);
        assert.equal(j.name , '2等');
    });

    it('3等が当たること', function () {
      var k = new AtariKuji(6);
      var j = judge(k, kujiUtil);
        assert.equal(j.name , '3等');
    });

    it('4等が当たること', function () {
      var k = new AtariKuji(7);
      var j = judge(k, kujiUtil);
        assert.equal(j.name , '4等');
    });

    it('5等が当たること', function () {
      var k = new AtariKuji(8);
      var j = judge(k, kujiUtil);
        assert.equal(j.name , '5等');
    });

    it('6等が当たること', function () {
      var k = new AtariKuji(9);
      var j = judge(k, kujiUtil);
        assert.equal(j.name , '6等');
    });
    it('はずれくじがはずれること', function () {
      var k = new HazureKuji();
      var j = judge(k, kujiUtil);
        assert.equal(j.hazure , true);
    });
  });
});
