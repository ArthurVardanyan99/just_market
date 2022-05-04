import { getBasketItems } from './Components/catalog/catalog.js'

let order_section = document.getElementById(`order_section`);
let order = document.getElementById(`order`);
let exit4 = document.getElementById(`exit4`);
let buy = document.getElementById(`buy`);
let phone = document.getElementById(`phone`);
let address = document.getElementById(`address`);
let container = document.getElementById(`container`);
function orderComplete () {
    buy.addEventListener(`click`, () => {
        let userTruty = localStorage.getItem("user_id");
        if (userTruty) {
            container.style.display = `block`;
            order_section.style.display = `block`;
            document.body.style.overflow = `hidden`
            document.getElementById(`blur`).style.filter = `blur(5px)` 
        } else {

            alert('Please log in to your account');

        }
        
    });
    
    exit4.addEventListener(`click`, () => {
        container.style.display = `none`;
        order_section.style.display = `none`;
        document.body.style.overflow = `scroll`;
        document.getElementById(`blur`).style.filter = `none`;
        phone.value = ``;
        address.value = '';
    }); 
}

order.addEventListener('click', makeOrder)

function makeOrder(event) {
    event.preventDefault();
    console.log('makeOrder', this);
    const user_id = Number(localStorage.getItem("user_id"));
    console.log({ user_id });
    let phone_number = phone.value;
    let address_value = address.value;

    const basket_items = getBasketItems();

    const body = {
        userId: user_id,
        productIds: basket_items.map((pr) => ({id: pr.productId, count: pr.count})),
        address: address_value,
        phone_number: phone_number,
    };
    console.log({ body });


    fetch('/order/create',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    .then(response => {
        console.log('order created');
        localStorage.removeItem('basket');
    })
    .catch( error => {
        console.log('order create error: ', error);
    })

    container.style.display = `none`;
    order_section.style.display = `none`;
    document.body.style.overflow = `scroll`;
    document.getElementById(`blur`).style.filter = `none`;
    phone.value = ``;
    address.value = '';
    alert("Thank you for your order");
}

export default orderComplete;

