let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');



button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=732a88c6f9f8186453f47b435c9ba5f3')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let nameValue = data.name;
        let tempValue = data.main.temp;
        let descValue = data.weather[0].description;
        
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        
    })
})
    


