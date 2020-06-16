function SuperType() {
    this.superProperty = 1
}

function SubType() {
    this.subProperty = 2
}

// inherite from SuperType
SubType.prototype = new SuperType()
sub = new SubType()

console.log(sub.superProperty)
// 1

console.log(sub.subProperty)
// 2

console.log(SubType.prototype.__proto__ === SuperType.prototype)
// true

console.log(sub.__proto__)
// SuperType { superProperty: 1 }