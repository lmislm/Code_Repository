function identify() {
  return this.name.toUpperCase()
}

function speak() {
  var greeting = "hello, I'm" + identify.call(this);
  console.log(greeting)
}

var you = {
  name: 'Reader'
}

identify.call(me)
identify.call(you)
