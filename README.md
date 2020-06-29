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
const v2 = size(1024); // 1K
const v3 = size(10, 'K'); // 0.01K
const v4 = size(Math.pow(1024, 2), 'M', '兆'); // 1兆
const v5 = size(Math.pow(1024, 2) * 512); // 512M

size.threshold = 512;
const v6 = size(Math.pow(1024, 2) * 512); // 0.5G
size.reset(); // size.threshold = 1000;

size.units = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
const v7 = size(Math.pow(1024, 2)); // 1MiB
size.reset(); // size.units = ['B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']

size.units = ['字节', '千字节', '兆字节', '吉字节', '太字节', '拍字节', '艾字节', '泽字节', '尧字节'];
const v8 = size(Math.pow(1024, 2)); // 1兆字节
size.reset(); // size.units = ['B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']

size.standard = 'SI';
size.units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const v9 = size(Math.pow(1000, 2)); // 1MB
size.reset(); // size.units = ['B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']

size.gap = ' ';
const v10 = size(Math.pow(1024, 3)); // 1 G
size.reset(); // size.gap = ''
```
