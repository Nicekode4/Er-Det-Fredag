if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(reg => console.log('service worker registered', reg))
	.catch(err => console.error('service worker not registered', err)) 
}

//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Nej det er ikke';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Nej det er ikke';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Nej det er ikke';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Nej det er ikke';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'Nej det er ikke';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Det er';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Nej det er ikke';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`;