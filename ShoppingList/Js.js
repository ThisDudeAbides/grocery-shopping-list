var cart = [];

function addItem(n, p, q)
{
    var item =
        {
            name: n,
            price: p,
            quantity: q
        };
    cart.push(item);
    printCart(cart);
    TotalCost(price);

}

function printCart(cart)
{
    // Find a <table> element with id="myTable":
    var table = document.getElementById("cart");
    table.innerHTML = "";
    for (var i = 0; i < cart.length; i++) {
        var row = table.insertRow(0);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        //var cell3 = row.insertCell(2);
        //table.
        // Add some text to the new cells:
        cell1.innerHTML = cart[i].name;
        cell2.innerHTML = cart[i].price;
     
    }   
}
function TotalCost(price)
{
    total = 0;
    for (var i in cart)
    {
        total += cart[i].price;
    }

    document.getElementById('TotalCost').innerHTML += `<tr><td></td><td>$${total}</td></tr>`;
}