// Calculator for the total price of an order

function calculateTotal() {
    let tshirtQty = parseInt(document.getElementById('tshirtQty').value);
    let mugQty = parseInt(document.getElementById('mugQty').value);
    let hatQty = parseInt(document.getElementById('hatQty').value);
    let maskQty = parseInt(document.getElementById('maskQty').value);
    let stickerQty = parseInt(document.getElementById('stickerQty').value);

    const tshirtPrice = 14;
    const mugPrice = 10;
    const hatPrice = 12;
    const maskPrice = 5;
    const stickerPrice = 5;

    const totalPrice =
        tshirtQty * tshirtPrice +
        mugQty * mugPrice +
        hatQty * hatPrice +
        maskQty * maskPrice +
        stickerQty * stickerPrice;

    document.getElementById('totalPrice').textContent = `Total Price: $${totalPrice}`;
}