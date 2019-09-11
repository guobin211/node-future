// 值为 0、-0、null、false、NaN、undefined、或者空字符串（""）,Boolean为false
if (0) {
  console.log('0 is true');
} else {
  console.log('0 is false');
}

if (1) {
  console.log('1 is true');
} else {
  console.log('1 is false');
}

let data = 0;
// true
console.log(!data);
data = 1;
// false
console.log(!data);
data = '0';
// false
console.log(!data);
data = '1';
// false
console.log(!data);
data = {};
// false
console.log(!data);
data = () => {};
// false
console.log(!data);
data = 'true';
// false
console.log(!data);
console.log(Boolean(data));
data = 'false';
// false
console.log(!data);
data = true;
// false
console.log(!data);
data = [];
// false
console.log(!data);
data = [1];
// false
console.log(!data);
