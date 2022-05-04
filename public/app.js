let search_but = document.getElementById(`search_but`)
let close_search = document.getElementById(`close_search`)
let search_input = document.getElementById(`search_input`)

// search_but.addEventListener(`click`,() => {
//     close_search.style.display = `inline`
//     search_input.style.display = `inline`
// })
// close_search.addEventListener(`click`, () => {
//     close_search.style.display = `none`
//     search_input.style.display = `none`
// })

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let home_slider = document.getElementById("home_slider");

let walpers = [];
fetch(`images.json`)
.then(response => response.json())
.then(res => res.slider)
.then(slider => {
   walpers = slider
})
let count = 0;

// let my_interval = setInterval(() => {
//     if(count === 0) {
//         count = walpers.length - 1;
//         home_slider.style.backgroundImage = `url(${walpers[count].url})`
        
//     } else {
//      count = count - 1;
//      home_slider.style.backgroundImage = `url(${walpers[count].url})`
//     }

// },5000)


prev.addEventListener(`click`,() => {
   if(count === 0) {
       count = walpers.length - 1;
       home_slider.style.backgroundImage = `url(${walpers[count].url})`
   } else {
    count = count - 1;
    home_slider.style.backgroundImage = `url(${walpers[count].url})`
   }
});

next.addEventListener(`click`,() => {
    if(count === walpers.length - 1) {
        count = 0;
        home_slider.style.backgroundImage = `url(${walpers[count].url})`
        count++
    } else {
     count = count + 1;
     home_slider.style.backgroundImage = `url(${walpers[count].url})`
    }
 });


 /////////// login/ registration ///////////////////////////////

import my_account_click from './log.js'
my_account_click();

 /////////// Basket ///////////////////////////////
 import open_basket from './my_basket_popUp.js'
 open_basket();

import {renderBasketItems} from "./Components/catalog/catalog.js";
renderBasketItems();
