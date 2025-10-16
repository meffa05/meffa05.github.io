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

//local storage assignment

//add message to local storage
const Output = document.querySelector('#Message')
const key = 'It\'s a secret to everybody. '

 localStorage.setItem(key, 'It\s a great day to have a great day!');


const button = document.querySelector('button')


button.addEventListener('click', () => {
    const storedValue = localStorage.getItem(key)
    Output.textContent = storedValue;
    })
    //carousel assignment
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()
setInterval(() => {
    // code to run EVERY 5 seconds to move an image to the right
    
    showImages(currentImage++)
}, 5000)
//variables
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
//move an image to the right
next.addEventListener('click', ()=>{
    
    showImages(currentImage++)
})
//move an image to the left
prev.addEventListener('click', ()=>{
    
    showImages(currentImage--)
})







    



