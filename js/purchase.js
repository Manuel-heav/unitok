const paypalCreateOrder = window.firebase.functions.httpsCallable("paypalCreateOrder");
window.paypal.Buttons({
    createOrder: (data, actions) => paypalCreateOrder().then(response => response.data.id),

    onApprove: (data, actions) => {

    }
}).render('#buy')

