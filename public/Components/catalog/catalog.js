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


///////////////////// search //////////////////
search_but.addEventListener(`click`,() => {
    close_search.style.display = `inline`
    search_input.style.display = `inline`
})
close_search.addEventListener(`click`, () => {
    close_search.style.display = `none`
    search_input.style.display = `none`
})


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


// import { url } from 'inspector';
///////////////////////// LogIn - Registration ////////////////////////////

import my_account_click from '../../log.js'
my_account_click();


 /////////// Basket ///////////////////////////////
 let buy = document.getElementById("buy");

 import open_basket from '../../my_basket_popUp.js'
 open_basket();
;
 buy.addEventListener("click", ()=> {
    window.location.href = '../SaleForm/SaleForm.html';
})


/////////////////////////////////////////

let product_array = [
    {
        productId : 1,
        productUrl : "../../Images/menu/fastfood/burger.png",
        productName : "Burger",
        productPrice : "2500",
        productType : "fast_food"
    },

    {
        productId : 2,
        productUrl : "../../Images/menu/fastfood/hotfdog.jpg",
        productName : "Hot-Dog",
        productPrice : "450",
        productType : "fast_food"
    },

    {
        productId : 3,
        productUrl : "../../Images/menu/fastfood/hotfdog.jpg",
        productName : "Hot-Dog",
        productPrice : "450",
        productType : "fast_food"
    },
    
    {
        productId : 4,
        productUrl : "../../Images/menu/fastfood/hotfdog.jpg",
        productName : "Hot-Dog",
        productPrice : "450",
        productType : "fast_food"
    },
    
    {
        productId : 5,
        productUrl : "../../Images/menu/fastfood/hotfdog.jpg",
        productName : "Hot-Dog",
        productPrice : "450",
        productType : "fast_food"
    },
    
    {
        productId : 6,
        productUrl : "../../Images/menu/fastfood/hotfdog.jpg",
        productName : "Hot-Dog",
        productPrice : "450",
        productType : "drinks"
    },
    
    {
        productId : 7,
        productUrl : "../../Images/menu/fastfood/hotfdog.jpg",
        productName : "Hot-Dog",
        productPrice : "450",
        productType : "hot-meals"
    },
    
    {
        productId : 8,
        productUrl : "../../Images/menu/fastfood/hotfdog.jpg",
        productName : "Hot-Dog",
        productPrice : "450",
        productType : "hot-meals"
    },
    
    {
        productId : 9,
        productUrl : "../../Images/menu/fastfood/hotfdog.jpg",
        productName : "Hot-Dog",
        productPrice : "450",
        productType : "hot-meals"
    }
];

function renderProdocts() {
    for(const key of product_array) {
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
        minus.addEventListener('click', () => { add_food_count.value > 1 ? add_food_count.value-- : 1 });
        const add_food_count = document.createElement('input');
        add_food_count.type = "number";
        add_food_count.value = 0;
        add_food_count.min = 1;

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
}
    
renderProdocts();
let list = document.getElementById('list');
let basket_count = document.getElementById('basket_count');

function add_to_basket(event) {
    const curr_prod_id = event.target.getAttribute("data-prod-id");
    basket_count.innerText = Number(basket_count.innerText)  + 1;
    for(const key of product_array) {
        if (key.productId == curr_prod_id) {
            const basket_prod_div = document.createElement('div');
            basket_prod_div.style.height = "80px"
            const basket_prod_name = document.createElement('span');
            basket_prod_name.innerText = key.productName;
            const basket_prod_price = document.createElement('span');
            basket_prod_price.innerText = key.productPrice;
            const basket_prod_count = document.createElement('span');
            basket_prod_count.innerText = 2;
            const basket_prod_sum = document.createElement('span');
            basket_prod_sum.innerText = Number(basket_prod_price.innerText) * Number(basket_prod_count.innerText);
            const basket_prod_dell = document.createElement('button');
            basket_prod_dell.innerText = "Remove";
            basket_prod_div.appendChild( basket_prod_name);
            basket_prod_div.appendChild( basket_prod_price);
            basket_prod_div.appendChild( basket_prod_count);
            basket_prod_div.appendChild( basket_prod_sum);
            basket_prod_div.appendChild( basket_prod_dell);
            list.appendChild(basket_prod_div);
        }
        // console.log(key.productId);
    }
}


