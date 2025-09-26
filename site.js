console.log("It worked! File is linked correctly.");

const div = document.querySelector('#Welcome') 
const good = document.querySelector('#Good')
const hours = new Date().getHours() // get the current hour
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
div.style.backgroundColor = '#70c6e2ff';

if (isMorning == true) {//if its morning
    div.textContent = 'Good Morning!'
    div.style.color = '#FBD991';
    
} 
else if (isAfternoon == true) {//if its afternoon
    div.textContent = 'Good Afternoon!'
    div.style.color ='#499A76';
    
    
}
else if (isEvening == true) {//if its evening
    div.textContent = 'Good Evening!'
    div.style.color ='#0092CB';
}

