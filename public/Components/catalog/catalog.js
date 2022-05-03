let search_but = document.getElementById(`search_but`);
let close_search = document.getElementById(`close_search`);
let search_input = document.getElementById(`search_input`);
//////////////////////////////////////////////////////////////
let hotmeals_div = document.getElementById(`hotmeals_div`);
let hotmeals_but = document.getElementById(`hotmeals_but`);

let seafood_div = document.getElementById(`seafood_div`);
let seafood_but = document.getElementById(`seafood_but`);

let salades_div = document.getElementById(`salades_div`);
let salades_but = document.getElementById(`salades_but`);

let sweets_div = document.getElementById(`sweets_div`);
let sweets_but = document.getElementById(`sweets_but`);

let drinks_div = document.getElementById(`drinks_div`);
let drinks_but = document.getElementById(`drinks_but`);

let fastfood_div = document.getElementById(`fastfood_div`);
let fastfood_but = document.getElementById(`fastfood_but`);

let div_array = [hotmeals_div,seafood_div,salades_div,sweets_div,drinks_div,fastfood_div];
let button_array = [hotmeals_but,seafood_but,salades_but,sweets_but,drinks_but,fastfood_but];

let totalPrice = document.getElementById('totalPrice');


///////////////////// search //////////////////
function initSearch() {
    search_but.addEventListener(`click`,() => {
        close_search.style.display = `inline`
        search_input.style.display = `inline`
    })
    close_search.addEventListener(`click`, () => {
        close_search.style.display = `none`
        search_input.style.display = `none`
    })
}
initSearch();


////////////////////////  menu visibility /////////////////////


function buttons_color1 (button) {
    button.style.backgroundColor = "white";
    button.style.color = "rgb(41, 126, 175)";
    return button;
};
function buttons_color2 (button) {
    button.style.backgroundColor = "rgba(255, 255, 255, 0)";
    button.style.color = "white";
    return button;
};

function initSidebar() {
    hotmeals_but.addEventListener("click", () => {
        div_array.map(el => {
            el.style.display = "none";
        });
        button_array.map(el => {
        buttons_color2(el);
        });
        hotmeals_div.style.display = "flex";
        buttons_color1(hotmeals_but);
    });

    seafood_but.addEventListener("click", () => {
        div_array.map(el => {
            el.style.display = "none";
        });
        button_array.map(el => {
            buttons_color2(el);
        });
        seafood_div.style.display = "flex";
        buttons_color1(seafood_but);
    });

    salades_but.addEventListener("click", () => {
        div_array.map(el => {
            el.style.display = "none";
        })
        button_array.map(el => {
            buttons_color2(el);
        });
        salades_div.style.display = "flex";
        buttons_color1(salades_but);
    });

    fastfood_but.addEventListener("click", () => {
        div_array.map(el => {
            el.style.display = "none";
        });
        button_array.map(el => {
            buttons_color2(el);
        });
        fastfood_div.style.display = "flex";
        buttons_color1(fastfood_but);
    });

    sweets_but.addEventListener("click", () => {
        div_array.map(el => {
            el.style.display = "none";
        });
        button_array.map(el => {
            buttons_color2(el);
        });
        sweets_div.style.display = "flex";
        buttons_color1(sweets_but);
    });

    drinks_but.addEventListener("click", () => {
        div_array.map(el => {
            el.style.display = "none";
        });
        button_array.map(el => {
            buttons_color2(el);
        });
        drinks_div.style.display = "flex";
        buttons_color1(drinks_but);
    });
}
try {
    initSidebar()
} catch (error) {
    
}


// import { url } from 'inspector';
///////////////////////// LogIn - Registration ////////////////////////////

import my_account_click from '../../log.js'
my_account_click();


 /////////// Basket ///////////////////////////////

import open_basket from '../../my_basket_popUp.js'
open_basket();

import orderComplete from '../../order.js';
orderComplete();

////////////////// Filling menu///////////////////////

function renderProdocts() {
    fetch('/product/list') 
    .then (response => response.json())
    .then (result => {
        for(const key of result) {
            const block_div = document.createElement('div');
            block_div.className = 'block_div';
            const bagroundImage_div = document.createElement('div');
            bagroundImage_div.className = 'bagroundImage_div'
            bagroundImage_div.style.backgroundImage = `url(${key.productUrl})`;
            block_div.appendChild(bagroundImage_div);
            //////
            const info_div = document.createElement('div');
            info_div.className = 'info_div';
            const foodName = document.createElement('p');
            foodName.innerText = key.productName;
            const foodPrice = document.createElement('p');
            foodPrice.innerText = key.productPrice;
            ////
            const add_food_btn = document.createElement('button');
            add_food_btn.innerText = "Add to basket";
            add_food_btn.className = "add_food_btn";
            add_food_btn.setAttribute('data-prod-id', key.productId)
            add_food_btn.addEventListener('click', add_to_basket);
            ////
            const plus_minus = document.createElement('div');
            plus_minus.className = "plus_minus";
            const plus = document.createElement('button');
            plus.innerText = "+";
            plus.id = "plus";
            plus.addEventListener('click', () => {add_food_count.value++});
            const minus = document.createElement('button');
            minus.innerText = "-";
            minus.id = "minus";
            minus.addEventListener('click', () => { add_food_count.value > 0 ? add_food_count.value-- : 1 });
            const add_food_count = document.createElement('input');
            add_food_count.type = "number";
            add_food_count.value = 0;
            add_food_count.min = 1;
            add_food_count.setAttribute('data-prod-count-id', key.productId)
    
            plus_minus.appendChild(add_food_btn);
            plus_minus.appendChild(minus);
            plus_minus.appendChild(add_food_count);
            plus_minus.appendChild(plus);
            ///////////////////////////
            info_div.appendChild(foodName);
            info_div.appendChild(foodPrice);
            info_div.appendChild(plus_minus);
            block_div.appendChild(info_div);
    
            switch (key.productType) {
                case "fast_food":
                    fastfood_div.appendChild(block_div);
                    break;
                case "hot-meals":
                    hotmeals_div.appendChild(block_div);
                    break;
                case "sea-food":
                    seafood_div.appendChild(block_div);
                    break;
                case "salades":
                    salades_div.appendChild(block_div);
                    break;
                case "sweets":
                    sweets_div.appendChild(block_div);
                    break;
                case "drinks":
                    drinks_div.appendChild(block_div);
                    break;
            }
        }
    })
}
    
try {
    renderProdocts();
    countAndSetTotal();
} catch (error) {
    
}

renderBasketItems();

function add_to_basket(event) {
    const curr_prod_id = event.target.getAttribute("data-prod-id");
    const count_input = document.querySelector(`[data-prod-count-id="${curr_prod_id}"]`)
    const product_count = Number(count_input.value);
    if (product_count <= 0 ) {
        return
    } else {
        fetch('/product/list/' + curr_prod_id) 
        .then (response => response.json())
        .then (result => {
            addBasketItem({...result, count: product_count})
            renderBasketItems();
        });
    }

}
 function renderBasketItems() {
    let basket_table_body = document.getElementById('basket_table_body');
    let basket_count = document.getElementById('basket_count');
    const basket_items = getBasketItems();
    while(basket_table_body.firstChild) {
        basket_table_body.removeChild(basket_table_body.firstChild);
    }
    for(const key of basket_items) {
            const basket_prod_tr = document.createElement('tr');
            const basket_prod_name = document.createElement('td');
            basket_prod_name.innerText = key.productName;
            const basket_prod_price = document.createElement('td');
            basket_prod_price.innerText = key.productPrice;
            const basket_prod_count = document.createElement('td');
            // basket_prod_count.style.backgroundColor = "rgb(169, 217, 231)";
            const basket_prod_count_value = document.createElement('input');
            basket_prod_count_value.type = "number";
            basket_prod_count_value.value = key.count;
            basket_prod_count_value.setAttribute('productId', key.productId);
            basket_prod_count_value.addEventListener('keyup', updateBasketCount);
            basket_prod_count_value.className = "basket_prod_count_value"
            basket_prod_count.appendChild(basket_prod_count_value);
            const basket_prod_sum = document.createElement('td');
            basket_prod_sum.innerText = Number(basket_prod_price.innerText) * basket_prod_count_value.value;
            basket_prod_sum.setAttribute('productSum', key.productId);
            const basket_prod_dell = document.createElement('td');
            basket_prod_dell.innerText = "X";
            basket_prod_dell.setAttribute('removeProd', key.productId);
            basket_prod_dell.addEventListener('click', removeProduct);
            basket_prod_dell.style.color = 'red';
            basket_prod_dell.style.cursor = "pointer";
            basket_prod_tr.appendChild( basket_prod_name);
            basket_prod_tr.appendChild( basket_prod_price);
            basket_prod_tr.appendChild( basket_prod_count);
            basket_prod_tr.appendChild( basket_prod_sum);
            basket_prod_tr.appendChild( basket_prod_dell);
            basket_table_body.appendChild(basket_prod_tr);

    }
    document.getElementById('basket_count').innerText = basket_items.length;
}

function removeProduct () {
    let basket_items = getBasketItems();
    let removeElementId = Number(this.getAttribute('removeProd'));
    basket_items = basket_items.filter( value => value.productId !== removeElementId)
    localStorage.setItem('basket', JSON.stringify(basket_items));
    renderBasketItems();
    countAndSetTotal();
}
////////////////////////////
function updateBasketCount() {
    
    let inputValue = Number(this.value);
    let productId = Number(this.getAttribute("productId"));
    let productSum = document.querySelector(`[productSum="${productId}"]`);
    if (inputValue < 1) {
        this.value = 1;
    } else {
        let basket_items = getBasketItems();
        for (let pr of basket_items) {
            if (pr.productId === productId) {
                pr.count = inputValue;
                productSum.innerText = pr.count * Number(pr.productPrice);
            }
        }

        localStorage.setItem('basket', JSON.stringify(basket_items));
        countAndSetTotal();

    }
}

function addBasketItem(new_prodcut) {
    let current_items = localStorage.getItem('basket');
    if (!current_items) {
        current_items = [{...new_prodcut /* , count: 1 */}]
    } else {
        current_items = JSON.parse(current_items);
        let has_product_before = false;
        for (let pr of current_items) {
            if (pr.productId === new_prodcut.productId) {
                pr.count += new_prodcut.count;
                has_product_before = true;
            }
        }
        if (has_product_before === false) {
            current_items.push({...new_prodcut})
        }
    }
    localStorage.setItem('basket', JSON.stringify(current_items))
}

function getBasketItems() {
    let current_items = localStorage.getItem('basket');
    if (!current_items) {
        return []
    } else {
        current_items = JSON.parse(current_items);
        return current_items;
    }
}

function countAndSetTotal() {
    const basket_items = getBasketItems();
    let localTotalPrice = 0;
    for (let pr of basket_items) {
        localTotalPrice += pr.count * Number(pr.productPrice);
    }
    totalPrice.innerText = localTotalPrice;
}

export {renderBasketItems, getBasketItems}  