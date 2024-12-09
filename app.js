const apiKey = '2d5d235057f441b0b51120407240912'; // Замените на ваш реальный API ключ

function getWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) return alert('Пожалуйста, введите название города.');

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            if (data.error) {
                alert('Город не найден. Пожалуйста, проверьте правильность написания.');
                return;
            }

            const weatherData = `
                <p><strong>Город:</strong> ${data.location.name}, ${data.location.country}</p>
                <p><strong>Температура:</strong> ${data.current.temp_c}°C</p>
                <p><strong>Описание:</strong> ${data.current.condition.text}</p>
                <p><strong>Скорость ветра:</strong> ${data.current.wind_kph} км/ч</p>
                <p><strong>Давление:</strong> ${data.current.pressure_mb} мбар</p>
                <p><strong>Влажность:</strong> ${data.current.humidity}%</p>
                <img src="https:${data.current.condition.icon}">
            `;

            document.getElementById('weather-data').innerHTML = weatherData;
        })
        .catch(error => console.error('Ошибка:', error));
}