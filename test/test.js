const assert = require('power-assert');
const size = require('../index.js');

describe('size', function () {
  it('size() to 0B', function () {
    assert(size() === '0B');
  });

  it('size(1) to 1B', function () {
    assert(size(1) === '1B');
  });

  it('size(1, \'B\') to 1B', function () {
    assert(size(1, 'B') === '1B');
  });

  it('size(10, \'Kb\') to 0.01Kb', function () {
    assert(size(10, 'Kb') === '0.01Kb');
  });

  it('size(1024, \'Kb\') to 1Kb', function () {
    assert(size(1024, 'Kb') === '1Kb');
  });

  it('size(1048576, \'Mb\') to 1Mb', function () {
    assert(size(1048576, 'Mb') === '1Mb');
  });

  it('size(1073741824, \'Gb\') to 1Gb', function () {
    assert(size(1073741824, 'Gb') === '1Gb');
  });

  it('size(Math.pow(1024, 4), \'Tb\') to 1Tb', function () {
    assert(size(Math.pow(1024, 4), 'Tb') === '1Tb');
  });

  it('size(Math.pow(1024, 5), \'Pb\') to 1Pb', function () {
    assert(size(Math.pow(1024, 5), 'Pb') === '1Pb');
  });

  it('size(Math.pow(1024, 6), \'Eb\') to 1Eb', function () {
    assert(size(Math.pow(1024, 6), 'Eb') === '1Eb');
  });

  it('size(Math.pow(1024, 7), \'Zb\') to 1Zb', function () {
    assert(size(Math.pow(1024, 7), 'Zb') === '1Zb');
  });

  it('size(Math.pow(1024, 8), \'Yb\') to 1Yb', function () {
    assert(size(Math.pow(1024, 8), 'Yb') === '1Yb');
  });

  it('size(Math.pow(1024, 1), \'kib\') to 1kib', function () {
    assert(size(Math.pow(1024, 1), 'kib') === '1kib');
  });

  it('size(Math.pow(1024, 2), \'M\', \'兆\') to 1兆', function () {
    assert(size(Math.pow(1024, 2), 'M', '兆') === '1兆');
  });

  it('size(Math.pow(1024, 3) + Math.pow(1024, 3) / 10 + Math.pow(1024, 3) / 100, \'G\') to 1.11G', function () {
    assert(size(Math.pow(1024, 3) + Math.pow(1024, 3) / 10 + Math.pow(1024, 3) / 100, 'G') === '1.11G');
  });

  it('size(Math.pow(1024, 2)) to 1Mb', function () {
    assert(size(Math.pow(1024, 2)) === '1Mb');
  });

  it('size(Math.pow(1024, 2) * 512) to 512Mb', function () {
    assert(size(Math.pow(1024, 2) * 512) === '512Mb');
  });

  it('size(Math.pow(1024, 2) * 512) to 0.5Gb // size.threshold = 512', function () {
    size.threshold = 512;
    assert(size(Math.pow(1024, 2) * 512) === '0.5Gb');
    size.reset();
  });

  it('size(Math.pow(1024, 2) * 1000) to 0.98Gb', function () {
    assert(size(Math.pow(1024, 2) * 1000) === '0.98Gb');
  });

  it('size(Math.pow(1024, 4)) to 1 Tb // size.gap = \' \'', function () {
    size.gap = ' ';
    assert(size(Math.pow(1024, 4)) === '1 Tb');
    size.reset();
  });

  it('size(Math.pow(1024, 2)) to 1兆字节 // size.units = [\'字节\', \'千字节\', \'兆字节\', \'吉字节\', \'太字节\', \'拍字节\', \'艾字节\', \'泽字节\', \'尧字节\']', function () {
    size.units = ['字节', '千字节', '兆字节', '吉字节', '太字节', '拍字节', '艾字节', '泽字节', '尧字节'];
    assert(size(Math.pow(1024, 2)) === '1兆字节');
    size.reset();
  });
});
