const key = "85fb50dc79f24cbf9f3123807231307";

let place = null;

function getweather() {
    place = document.getElementById('cityname').value;
    console.log(typeof (place));
    if (place === '') {
        place = 'Tinsukia'
    }
    let p = fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${place}&days=7`);

    p.then((value1) => {
        return value1.json();
    }).then((value2) => {
        const weather_day0 = {
            icon: value2.forecast.forecastday[0].day.condition.icon,
            temperature: value2.forecast.forecastday[0].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[0].date,
            description: value2.forecast.forecastday[0].day.condition.text,
            humidity: value2.forecast.forecastday[0].day.avghumidity,
        }

        const weather_day1 = {
            icon: value2.forecast.forecastday[1].day.condition.icon,
            temperature: value2.forecast.forecastday[1].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[1].date,
            description: value2.forecast.forecastday[1].day.condition.text,
            humidity: value2.forecast.forecastday[1].day.avghumidity,
        }

        const weather_day2 = {
            icon: value2.forecast.forecastday[2].day.condition.icon,
            temperature: value2.forecast.forecastday[2].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[2].date,
            description: value2.forecast.forecastday[2].day.condition.text,
            humidity: value2.forecast.forecastday[2].day.avghumidity,
        }

        const weather_day3 = {
            icon: value2.forecast.forecastday[3].day.condition.icon,
            temperature: value2.forecast.forecastday[3].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[3].date,
            description: value2.forecast.forecastday[3].day.condition.text,
            humidity: value2.forecast.forecastday[3].day.avghumidity,
        }

        const weather_day4 = {
            icon: value2.forecast.forecastday[4].day.condition.icon,
            temperature: value2.forecast.forecastday[4].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[4].date,
            description: value2.forecast.forecastday[4].day.condition.text,
            humidity: value2.forecast.forecastday[4].day.avghumidity,
        }

        const weather_day5 = {
            icon: value2.forecast.forecastday[5].day.condition.icon,
            temperature: value2.forecast.forecastday[5].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[5].date,
            description: value2.forecast.forecastday[5].day.condition.text,
            humidity: value2.forecast.forecastday[5].day.avghumidity,
        }

        const weather_day6 = {
            icon: value2.forecast.forecastday[6].day.condition.icon,
            temperature: value2.forecast.forecastday[6].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[6].date,
            description: value2.forecast.forecastday[6].day.condition.text,
            humidity: value2.forecast.forecastday[6].day.avghumidity,
        }

        document.getElementById('icon0').innerHTML = `<img src="${weather_day0.icon}"/>`;
        document.getElementById('city0').innerHTML = weather_day0.city;
        document.getElementById('temp0').innerHTML = weather_day0.temperature + '&#8451;';
        document.getElementById('desc0').innerHTML = weather_day0.description;
        document.getElementById('humidity0').innerHTML = weather_day0.humidity;
        document.getElementById('date0').innerHTML = weather_day0.date;

        document.getElementById('icon1').innerHTML = `<img src="${weather_day1.icon}"/>`;
        document.getElementById('temp1').innerHTML = weather_day1.temperature + '&#8451;';
        document.getElementById('desc1').innerHTML = weather_day1.description;
        document.getElementById('humidity1').innerHTML = weather_day1.humidity;
        document.getElementById('date1').innerHTML = weather_day1.date;

        document.getElementById('icon2').innerHTML = `<img src="${weather_day2.icon}"/>`;
        document.getElementById('temp2').innerHTML = weather_day2.temperature + '&#8451;';
        document.getElementById('desc2').innerHTML = weather_day2.description;
        document.getElementById('humidity2').innerHTML = weather_day2.humidity;
        document.getElementById('date2').innerHTML = weather_day2.date;

        document.getElementById('icon3').innerHTML = `<img src="${weather_day3.icon}"/>`;
        document.getElementById('temp3').innerHTML = weather_day3.temperature + '&#8451;';
        document.getElementById('desc3').innerHTML = weather_day3.description;
        document.getElementById('humidity3').innerHTML = weather_day3.humidity;
        document.getElementById('date3').innerHTML = weather_day3.date;

        document.getElementById('icon4').innerHTML = `<img src="${weather_day4.icon}"/>`;
        document.getElementById('temp4').innerHTML = weather_day4.temperature + '&#8451;';
        document.getElementById('desc4').innerHTML = weather_day4.description;
        document.getElementById('humidity4').innerHTML = weather_day4.humidity;
        document.getElementById('date4').innerHTML = weather_day4.date;

        document.getElementById('icon5').innerHTML = `<img src="${weather_day5.icon}"/>`;
        document.getElementById('temp5').innerHTML = weather_day5.temperature + '&#8451;';
        document.getElementById('desc5').innerHTML = weather_day5.description;
        document.getElementById('humidity5').innerHTML = weather_day5.humidity;
        document.getElementById('date5').innerHTML = weather_day5.date;

        document.getElementById('icon6').innerHTML = `<img src="${weather_day6.icon}"/>`;
        document.getElementById('temp6').innerHTML = weather_day6.temperature + '&#8451;';
        document.getElementById('desc6').innerHTML = weather_day6.description;
        document.getElementById('humidity6').innerHTML = weather_day6.humidity;
        document.getElementById('date6').innerHTML = weather_day6.date;
    })
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(firstcall)
}


function firstcall(position){
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let p = fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude},${longitude}&days=7`);

    p.then((value1) => {
        return value1.json();
    }).then((value2) => {
        const weather_day0 = {
            icon: value2.forecast.forecastday[0].day.condition.icon,
            temperature: value2.forecast.forecastday[0].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[0].date,
            description: value2.forecast.forecastday[0].day.condition.text,
            humidity: value2.forecast.forecastday[0].day.avghumidity,
        }

        const weather_day1 = {
            icon: value2.forecast.forecastday[1].day.condition.icon,
            temperature: value2.forecast.forecastday[1].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[1].date,
            description: value2.forecast.forecastday[1].day.condition.text,
            humidity: value2.forecast.forecastday[1].day.avghumidity,
        }

        const weather_day2 = {
            icon: value2.forecast.forecastday[2].day.condition.icon,
            temperature: value2.forecast.forecastday[2].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[2].date,
            description: value2.forecast.forecastday[2].day.condition.text,
            humidity: value2.forecast.forecastday[2].day.avghumidity,
        }

        const weather_day3 = {
            icon: value2.forecast.forecastday[3].day.condition.icon,
            temperature: value2.forecast.forecastday[3].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[3].date,
            description: value2.forecast.forecastday[3].day.condition.text,
            humidity: value2.forecast.forecastday[3].day.avghumidity,
        }

        const weather_day4 = {
            icon: value2.forecast.forecastday[4].day.condition.icon,
            temperature: value2.forecast.forecastday[4].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[4].date,
            description: value2.forecast.forecastday[4].day.condition.text,
            humidity: value2.forecast.forecastday[4].day.avghumidity,
        }

        const weather_day5 = {
            icon: value2.forecast.forecastday[5].day.condition.icon,
            temperature: value2.forecast.forecastday[5].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[5].date,
            description: value2.forecast.forecastday[5].day.condition.text,
            humidity: value2.forecast.forecastday[5].day.avghumidity,
        }

        const weather_day6 = {
            icon: value2.forecast.forecastday[6].day.condition.icon,
            temperature: value2.forecast.forecastday[6].day.avgtemp_c,
            city: value2.location.name,
            date: value2.forecast.forecastday[6].date,
            description: value2.forecast.forecastday[6].day.condition.text,
            humidity: value2.forecast.forecastday[6].day.avghumidity,
        }

        document.getElementById('icon0').innerHTML = `<img src="${weather_day0.icon}"/>`;
        document.getElementById('city0').innerHTML = weather_day0.city;
        document.getElementById('temp0').innerHTML = weather_day0.temperature + '&#8451;';
        document.getElementById('desc0').innerHTML = weather_day0.description;
        document.getElementById('humidity0').innerHTML = weather_day0.humidity;
        document.getElementById('date0').innerHTML = weather_day0.date;

        document.getElementById('icon1').innerHTML = `<img src="${weather_day1.icon}"/>`;
        document.getElementById('temp1').innerHTML = weather_day1.temperature + '&#8451;';
        document.getElementById('desc1').innerHTML = weather_day1.description;
        document.getElementById('humidity1').innerHTML = weather_day1.humidity;
        document.getElementById('date1').innerHTML = weather_day1.date;

        document.getElementById('icon2').innerHTML = `<img src="${weather_day2.icon}"/>`;
        document.getElementById('temp2').innerHTML = weather_day2.temperature + '&#8451;';
        document.getElementById('desc2').innerHTML = weather_day2.description;
        document.getElementById('humidity2').innerHTML = weather_day2.humidity;
        document.getElementById('date2').innerHTML = weather_day2.date;

        document.getElementById('icon3').innerHTML = `<img src="${weather_day3.icon}"/>`;
        document.getElementById('temp3').innerHTML = weather_day3.temperature + '&#8451;';
        document.getElementById('desc3').innerHTML = weather_day3.description;
        document.getElementById('humidity3').innerHTML = weather_day3.humidity;
        document.getElementById('date3').innerHTML = weather_day3.date;

        document.getElementById('icon4').innerHTML = `<img src="${weather_day4.icon}"/>`;
        document.getElementById('temp4').innerHTML = weather_day4.temperature + '&#8451;';
        document.getElementById('desc4').innerHTML = weather_day4.description;
        document.getElementById('humidity4').innerHTML = weather_day4.humidity;
        document.getElementById('date4').innerHTML = weather_day4.date;

        document.getElementById('icon5').innerHTML = `<img src="${weather_day5.icon}"/>`;
        document.getElementById('temp5').innerHTML = weather_day5.temperature + '&#8451;';
        document.getElementById('desc5').innerHTML = weather_day5.description;
        document.getElementById('humidity5').innerHTML = weather_day5.humidity;
        document.getElementById('date5').innerHTML = weather_day5.date;

        document.getElementById('icon6').innerHTML = `<img src="${weather_day6.icon}"/>`;
        document.getElementById('temp6').innerHTML = weather_day6.temperature + '&#8451;';
        document.getElementById('desc6').innerHTML = weather_day6.description;
        document.getElementById('humidity6').innerHTML = weather_day6.humidity;
        document.getElementById('date6').innerHTML = weather_day6.date;
    })
}

// firstcall()