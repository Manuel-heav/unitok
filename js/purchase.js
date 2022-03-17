const price = document.getElementById("price")
const value = parseFloat(price.innerHTML.replace("ETH", ""))*2814
console.log(value)
window.paypal.Buttons({
    createOrder: (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: value.toString()
                }
            }]
        })
    }
,
    onApprove: (data, actions) => {

    }
}).render('#buy')

