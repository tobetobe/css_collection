let canvas = document.getElementById('mycanvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

console.table({ width: window.innerWidth, height: window.innerHeight })

var ctx = canvas.getContext('2d')

var x = 100
var y = 100

function animate () {
  console.info(`called`)
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, innerWidth, innerHeight)
  ctx.beginPath()
  x += 1
  ctx.arc(x, y, 30, 0, Math.PI * 2)
  ctx.fillStyle = 'blue'
  ctx.fill()
  ctx.stroke()
}

animate()
