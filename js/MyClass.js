class MyClass {
  constructor (name) {
    this.name = name
  }

  sayHi () {
    return 'Hello ' + this.name + '!!!'
  }
}

module.exports = MyClass
