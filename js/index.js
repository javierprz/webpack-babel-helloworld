import '@babel/polyfill'
import MyClass from './MyClass.js'

let hello = new MyClass('Javi')
console.log(hello.sayHi())
let h1 = document.getElementById('hello')
h1.innerHTML = hello.sayHi()
