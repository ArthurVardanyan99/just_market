let basket = document.getElementById("basket");
let popUp = document.getElementById("popUp");
let basket_pop_up = document.getElementById("basket_pop_up");

function open_basket() {

    basket.addEventListener("click", () => {
        popUp.style.display = "block";
        document.getElementById(`blur`).style.filter = `blur(5px)`;
        document.body.style.overflow = `hidden`;
        basket_pop_up.style.animationName = `bascetPopUpOn`
    })
    popUp.addEventListener('click', (event) => {
        if(event.target.id === "exit3" || event.target.id === "popUp"){
            basket_pop_up.style.animationName = `bascetPopUpOff`
            document.getElementById(`blur`).style.filter = `none`;
            setTimeout(() => {
                popUp.style.display = "none";
                document.body.style.overflowY = `scroll`;
            },1000)
        }
    })

   

}

export default open_basket;