
import './style.css'

const helloBtn = document.querySelector('#helloBtn')
const colorBtn = document.querySelector('#colorBtn')
const message = document.querySelector('#message')
const clock = document.querySelector('#clock')

helloBtn.addEventListener('click', () => {
  message.textContent = 'สวัสดีครับ ขอบคุณที่เข้าชมเว็บไซต์!'
})

const colors = ['#e8f0ff', '#ffe8ee', '#e5ffe9', '#fff2d9']
let colorIndex = 0

colorBtn.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length
  document.body.style.background = colors[colorIndex]
})

function updateClock() {
  clock.textContent = 'เวลาปัจจุบัน: ' + new Date().toLocaleString('th-TH')
}

updateClock()
setInterval(updateClock, 1000)
