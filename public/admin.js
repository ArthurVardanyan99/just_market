let prodUrl = document.getElementById("prodUrl");
let prodName = document.getElementById("prodName");
let prodPrice = document.getElementById("prodPrice");
let prodType = document.getElementById("prodType");
let addButton = document.getElementById("add");


addButton.addEventListener('click', function() {
    console.log('aaaaaa', prodUrl.value);

    const body = {
        productUrl: prodUrl.value,
        productName: prodName.value,
        productPrice: prodPrice.value,
        productType: prodType.value,
    }

    fetch('/product/create',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    .then(response => {
        console.log('prodcut created');
    })
    .catch( error => {
        console.log('prod create error: ', error);
    })
    
})
