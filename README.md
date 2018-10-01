Size-X
========

Human readable file size library.

### Installing

```shell
yarn add size-x # npm install size-x
```

### Usage

```javascript
const size = require('size-x');

const v1 = size(1); // 1B
const v2 = size(1024); // 1Kb
const v3 = size(10, 'Kb');// 0.01Kb
const v4 = size(Math.pow(1024, 2), 'M', '兆'); // 1兆
const v5 = size(Math.pow(1024, 2) * 512); // 512Mb

size.threshold = 512;
const v6 = size(Math.pow(1024, 2) * 512); // 0.5Gb
size.reset(); // size.threshold = 1000;

size.units = ['字节', '千字节', '兆字节', '吉字节', '太字节', '拍字节', '艾字节', '泽字节', '尧字节'];
const v7 = size(Math.pow(1024, 2)); // 1兆字节
size.reset(); // size.units = ['B', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']

size.gap = ' ';
const v8 = size(Math.pow(1024, 3)); // 1 Gb
size.reset(); // size.gap = ''
```
