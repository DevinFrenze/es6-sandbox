function f() {
  console.log('function');
}

console.log( typeof null );
console.log( typeof NaN );
console.log( Array.prototype );

const obj = { key: 'value' };

console.log(obj);

const a = [];
a.test = 'test';
a.push(1);
console.log(a);

const d = new Date();
d.test = 'test';
console.log(Object.entries(d));


console.log(new Object(true));
const ten = new Object(10);
console.log(ten);
console.log(10);
console.log(ten == 10);
console.log(ten === 10);

console.log(Object.getPrototypeOf(f));
console.log(Object.getPrototypeOf(d));


console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(ten));
console.log(Object.getOwnPropertyDescriptors(Object.prototype));
console.log(Object.getOwnPropertyDescriptors(Function.prototype));
Object.prototype.toDevin = function() { return 'devin'; }

console.log(Function.prototype.isPrototypeOf(Object));
console.log(Function.prototype.propertyIsEnumerable('bind'));

class Test {
  constructor(v = 'value') {
    this.value = v;
  }
}

console.log(typeof Number);
console.log(typeof new Number(10));
console.log(new Number(10));
console.log(Test);
console.log(typeof Test);
console.log(Object.getOwnPropertyDescriptors(Test));
console.log(Object.getOwnPropertyDescriptors(Test.prototype));
