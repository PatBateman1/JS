/**
 * effect of enumerable in for-in loop
 */
var foo = {};

Object.defineProperty(foo, "pro1", {
    enumerable: false
});

Object.defineProperty(foo, "pro2", {
    enumerable: true
});

var keys = Object.keys(foo);
console.log(keys);     
// [ 'pro2' ]

for (var key in foo) {
    console.log(key);
}
// pro2

function Foo(pro1) {
    this.pro1 = pro1
}

Object.defineProperty(Foo.prototype, "pro2", {
    enumerable: false
});

var foo = new Foo()
var keys = Object.keys(foo);
console.log(keys);     
// [ 'pro1' ]

for (var key in foo) {
    console.log(key);
}
// pro1

