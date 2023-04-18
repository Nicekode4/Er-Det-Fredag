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
    "Niks, ",
    "Ikke på nuværende tidspunkt, ",
    "Desværre,",
    "Det afvises, ",
    "Negativt, ",
    "Udelukket ",
    "Jeg er ked af det, ",
    "det er ikke en mulighed. ",
    "Jeg må sige nej,  "
]

const AfterArray = [
    "ikke idag er det",
    "det er ikke",
    "men om et par dage er det",
    "men bare vent lidt, så er det",
    "i dag er ikke"
]

const fridayArray = [
    "den sidste dag i arbejdsugen",
    "enden af ​​ugen",
    "TGIF",
    "dagen før weekenden",
    "dagen, hvor de fleste mennesker ser frem til weekenden",
    "fredag",
    "en af ​​de to mest populære ugedage",
    "dagen før en to-dages pause fra arbejdet eller skolen",
    "starten på weekenden",
    "slutningen på arbejdsugen endnu",
    "dagen, hvor vi normalt ville tænke på at planlægge weekendaktiviteter",
    "en af ​​de mest populære dage at tage fri på",
    "en af ​​de to dage, hvor de fleste mennesker har fri",
    "dagen, hvor vi kan se frem til en afslappende weekend"
    
]
const random1 = Math.floor(Math.random() * noArray.length)
const random2 = Math.floor(Math.random() * AfterArray.length)
const random3 = Math.floor(Math.random() * fridayArray.length)
switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">${fridayArray[random3]}</a>`
        
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">${fridayArray[random3]}</a>`
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">${fridayArray[random3]}</a>`
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">${fridayArray[random3]}</a>`
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">${fridayArray[random3]}</a>`
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Det er' + `<a href="https://da.wikipedia.org/wiki/Fredag">${fridayArray[random3]}</a>`;
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = noArray[random1] + AfterArray[random2] + `<a href="https://da.wikipedia.org/wiki/Fredag">${fridayArray[random3]}</a>`
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`;