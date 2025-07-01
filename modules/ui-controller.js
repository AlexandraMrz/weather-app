const elements = {
    cityInput: document.getElementById('city-input'),
    searchButton: document.getElementById('search-button'),
    autocompleteList: document.getElementById('autocomplete-list'),
    weatherCard: document.getElementById('weather-display'),
    cityName: document.getElementById('city-name'),
    temperature: document.getElementById('temperature'),
    description: document.getElementById('description'),
    weatherIcon: document.getElementById('weather-icon')
};

export function displayWeather({name, temp, description, icon}){
    elements.cityName.textContent = name;
    elements.temperature.textContent = '${Math.round(temp)}°C';
    elements.description.textContent = capitalize(description);
    elements.weatherIcon.src = icon;
    elements.weatherIcon.alt = description;
    elements.weatherCard.classList.remove('hidden');
}

export function clearWheater(){
    elements.weatherCard.classList.add('hidden');
    elements.cityName.textContent = '';
    elements.temperature.textContent = '';
    elements.description.textContent = '';
    elements.weatherIcon.src = '';
    elements.weatherIcon.alt = '';
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function showAutoCompleteSuggestions(suggestions = []){
    elements.autocompleteList.innerHTML = '';
    suggestions.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        li.tabIndex = 0;
        li.classList.add('autocomplete-item');
        elements.autocompleteList.appendChild(li);
    });
}

export function clearAutoComplete(){
    elements.autocompleteList.innerHTML = '';
}

export function getUIElements(){
    return elements;
}