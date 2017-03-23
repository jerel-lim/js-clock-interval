document.addEventListener('DOMContentLoaded', function () {
  var second = document.body.querySelector('#second')
  var minute = document.body.querySelector('#minute')
  var hour = document.body.querySelector('#hour')

  function secondRotation () {
    var degrees = 0
    setInterval(function () {
      second.style.transform = 'rotate(' + degrees + 'deg)'
      degrees += 6
    }, 1000)
  }
  secondRotation()

  function minuteRotation () {
    var degrees = 0
    setInterval(function () {
  // rotate
      minute.style.transform = 'rotate(' + degrees + 'deg)'
      degrees += 6
    }, 60000)
  }

  minuteRotation()

  function hourRotation () {
    var degrees = 0
    setInterval(function () {
    // rotate
      hour.style.transform = 'rotate(' + degrees + 'deg)'
      degrees += 6
    }, 3600000)
  }
  hourRotation()
})
