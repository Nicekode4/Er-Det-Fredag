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
const noArray = [
    "Nej, ",
    "Næh, ",
    "Nope, ",
    "Niks, "
]

const AfterArray = [
    "ikke idag er det",
    "det er ikke",
    "men om et par dage er det",
    "vent lidt, så er det"
]
const random1 = Math.floor(Math.random() * noArray.length)
const random2 = Math.floor(Math.random() * AfterArray.length)
switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">fredag</a>`
        
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">fredag</a>`
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">fredag</a>`
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">fredag</a>`
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">fredag</a>`
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Det er';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">fredag</a>`
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`;