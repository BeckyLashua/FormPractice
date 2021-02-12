const appid = 'd877b15d71aacb05338b8d876cc470b7';

document.addEventListener('DOMContentLoaded', bindSubmit);

function bindSubmit() {
    let form1_submit = document.getElementById('submit1');
    form1_submit.addEventListener('click', (event) => {
        let city = document.getElementById('city').value;
        let country = document.getElementById('country').value;
        let req = new XMLHttpRequest();
        req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" 
                        + city + "," + country + "&appid=" + appid, true);
        req.addEventListener('load', () => {
            if(req.status >= 200 && req.status < 400) {
                let response1 = JSON.parse(req.responseText);
                document.getElementById('weather1').textContent = response1.weather[0].description;
                document.getElementById('temp1').textContent = response1.main.temp;
                document.getElementById('wind1').textContent = response1.wind.speed;
            } else {
                console.log("Error in network request: " + req.statusText);
            }
        });
        req.send(null);
        event.preventDefault();
    });


    let form2_submit = document.getElementById('submit2');
    form2_submit.addEventListener('click', (event) => {
        let zipcode = document.getElementById('zipcode').value;
        let country2 = document.getElementById('country2').value;
        let req2 = new XMLHttpRequest();
        req2.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip="
                        + zipcode + "," + country2 + "&appid=" + appid, true); 
        req2.addEventListener('load', () => {
            if(req2.status >= 200 && req2.status < 400) {
                let response2 = JSON.parse(req2.responseText);
                document.getElementById('weather2').textContent = response2.weather[0].description;
                document.getElementById('temp2').textContent = response2.main.temp;
                document.getElementById('wind2').textContent = response2.wind.speed;
            } else {
                console.log("Error in network request: " + req2.statusText);
            }
        });
        req2.send(null);
        event.preventDefault();   
    });
}

