async function getWeather(){
  const apikey = 'e0b26f3974ec202127a8c9d7e1f1ce27'
  const lang = 'es'
  const base_api = `http://api.openweathermap.org/data/2.5/weather?q=guadalajara`

  const url = `${base_api}&lang=${lang}&units=metric&appid=${apikey}`
  
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error al realizar la peticion: ', error);
  }
}

export default getWeather