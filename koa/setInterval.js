var now = new Date().getTime()
var expire = now + 3000
var time = setInterval(function () {
  var now = new Date().getTime()
  if(now > expire) {
    console.log('12312')
    clearInterval(time)
  }
}, 100)
