const units = [
  'B',
  'Kb',
  'Mb',
  'Gb',
  'Tb',
  'Pb',
  'Eb',
  'Zb',
  'Yb',
];

const unitList = [
  /^(?:B|Byte|Bytes)$/i,
  /^(?:Kb|Ki|Kib|K)$/i,
  /^(?:Mb|Mi|Mib|M)$/i,
  /^(?:Gb|Gi|Gib|G)$/i,
  /^(?:Tb|Ti|Tib|T)$/i,
  /^(?:Pb|Pi|Pib|P)$/i,
  /^(?:Eb|Ei|Eib|E)$/i,
  /^(?:Zb|Zi|Zib|Z)$/i,
  /^(?:Yb|Yi|Yib|Y)$/i,
];

const valueList = [
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

const threshold = 1000;

const gap = '';

const findLevelByUnit = (unit) => {
  for(let i = 0, len = unitList.length; i < len; i++) {
    if (unitList[i].test(unit)) return i;
  }
  return 0;
};

const findLevelByValue = (value) => {
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

  const num = Math.round((Number(value) / Math.pow(1024, level) * 100)) / 100;

  return `${num}${size.gap}${unitSymbol}`;
};

const reset = () => {
  size.units = units;
  size.threshold = threshold;
  size.gap = gap;
  size.reset = reset;
};

reset();

module.exports = size;
