import weatherTemplate from '../src/template/weatherTemplate.js'

(async function app(){
  const container = document.getElementById('container')
  container.innerHTML = await weatherTemplate()
})()