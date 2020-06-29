const standard = 'IEC';

const units = [
  'B',
  'K',
  'M',
  'G',
  'T',
  'P',
  'E',
  'Z',
  'Y',
];

const unitRegExpList = [
  /^(?:B|Byte|Bytes)$/i,
  /^(?:KB|Ki|KiB|K)$/i,
  /^(?:MB|Mi|MiB|M)$/i,
  /^(?:GB|Gi|GiB|G)$/i,
  /^(?:TB|Ti|TiB|T)$/i,
  /^(?:PB|Pi|PiB|P)$/i,
  /^(?:EB|Ei|EiB|E)$/i,
  /^(?:ZB|Zi|ZiB|Z)$/i,
  /^(?:YB|Yi|YiB|Y)$/i,
];

const iecValueList = [
  Math.pow(1024, 0),
  Math.pow(1024, 1),
  Math.pow(1024, 2),
  Math.pow(1024, 3),
  Math.pow(1024, 4),
  Math.pow(1024, 5),
  Math.pow(1024, 6),
  Math.pow(1024, 7),
  Math.pow(1024, 8),
];
const siValueList = [
  Math.pow(10, 0),
  Math.pow(10, 3),
  Math.pow(10, 6),
  Math.pow(10, 9),
  Math.pow(10, 12),
  Math.pow(10, 15),
  Math.pow(10, 18),
  Math.pow(10, 21),
  Math.pow(10, 24),
];

const threshold = 1000;

const gap = '';

const findLevelByUnit = (unit) => {
  for(let i = 0, len = unitRegExpList.length; i < len; i++) {
    if (unitRegExpList[i].test(unit)) return i;
  }
  return 0;
};

const findLevelByValue = (value) => {
  let valueList;
  if (/^IEC$/i.test(size.standard)) {
    valueList = iecValueList;
  } else {
    valueList= siValueList;
  }
  for(let i = 0, len = valueList.length; i < len; i++) {
    if (value / valueList[i] < size.threshold) return i;
  }
  return 0;
};

const size = (value = 0, unit, unitSymbol) => {
  let level;
  if (unit) {
    level = findLevelByUnit(unit);
    if (!unitSymbol) {
      unitSymbol = unit;
    }
  } else {
    level = findLevelByValue(value);
    unitSymbol = size.units[level];
  }

  let num;
  if (/^IEC$/i.test(size.standard)) {
    num = Math.round((Number(value) / Math.pow(1024, level) * 100)) / 100;
  } else {
    num = Math.round((Number(value) / Math.pow(10, level * 3) * 100)) / 100;
  }

  return `${num}${size.gap}${unitSymbol}`;
};

const reset = () => {
  size.standard = standard;
  size.units = units;
  size.threshold = threshold;
  size.gap = gap;
  size.reset = reset;
};

reset();

module.exports = size;
