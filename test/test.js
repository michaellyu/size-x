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

  it('size(10, \'K\') to 0.01K', function () {
    assert(size(10, 'K') === '0.01K');
  });

  it('size(1024, \'K\') to 1K', function () {
    assert(size(1024, 'K') === '1K');
  });

  it('size(1048576, \'M\') to 1M', function () {
    assert(size(1048576, 'M') === '1M');
  });

  it('size(1073741824, \'G\') to 1G', function () {
    assert(size(1073741824, 'G') === '1G');
  });

  it('size(Math.pow(1024, 4), \'T\') to 1T', function () {
    assert(size(Math.pow(1024, 4), 'T') === '1T');
  });

  it('size(Math.pow(1024, 5), \'P\') to 1P', function () {
    assert(size(Math.pow(1024, 5), 'P') === '1P');
  });

  it('size(Math.pow(1024, 6), \'E\') to 1E', function () {
    assert(size(Math.pow(1024, 6), 'E') === '1E');
  });

  it('size(Math.pow(1024, 7), \'Z\') to 1Z', function () {
    assert(size(Math.pow(1024, 7), 'Z') === '1Z');
  });

  it('size(Math.pow(1024, 8), \'Y\') to 1Y', function () {
    assert(size(Math.pow(1024, 8), 'Y') === '1Y');
  });

  it('size(Math.pow(1024, 1), \'KiB\') to 1KiB', function () {
    assert(size(Math.pow(1024, 1), 'KiB') === '1KiB');
  });

  it('size(Math.pow(1024, 2), \'M\', \'兆\') to 1兆', function () {
    assert(size(Math.pow(1024, 2), 'M', '兆') === '1兆');
  });

  it('size(Math.pow(1024, 3) + Math.pow(1024, 3) / 10 + Math.pow(1024, 3) / 100, \'G\') to 1.11G', function () {
    assert(size(Math.pow(1024, 3) + Math.pow(1024, 3) / 10 + Math.pow(1024, 3) / 100, 'G') === '1.11G');
  });

  it('size(Math.pow(1024, 2)) to 1M', function () {
    assert(size(Math.pow(1024, 2)) === '1M');
  });

  it('size(Math.pow(1024, 2) * 512) to 512M', function () {
    assert(size(Math.pow(1024, 2) * 512) === '512M');
  });

  it('size(Math.pow(1024, 2) * 512) to 0.5G // size.threshold = 512', function () {
    size.threshold = 512;
    assert(size(Math.pow(1024, 2) * 512) === '0.5G');
    size.reset();
  });

  it('size(Math.pow(1024, 2) * 1000) to 0.98G', function () {
    assert(size(Math.pow(1024, 2) * 1000) === '0.98G');
  });

  it('size(Math.pow(1024, 4)) to 1 T // size.gap = \' \'', function () {
    size.gap = ' ';
    assert(size(Math.pow(1024, 4)) === '1 T');
    size.reset();
  });

  it('size(Math.pow(1024, 2)) to 1兆字节 // size.units = [\'字节\', \'千字节\', \'兆字节\', \'吉字节\', \'太字节\', \'拍字节\', \'艾字节\', \'泽字节\', \'尧字节\']', function () {
    size.units = ['字节', '千字节', '兆字节', '吉字节', '太字节', '拍字节', '艾字节', '泽字节', '尧字节'];
    assert(size(Math.pow(1024, 2)) === '1兆字节');
    size.reset();
  });

  it('size(Math.pow(1000, 3)) to 953.67M', function () {
    assert(size(Math.pow(1000, 3)) === '953.67M');
  });

  it('size(Math.pow(1000, 3)) to 1G // size.standard = \'SI\'', function () {
    size.standard = 'SI';
    assert(size(Math.pow(1000, 3)) === '1G');
    size.reset();
  });
});
