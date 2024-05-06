let inventory = [
  {
    name: "apples",
    id: 1,
    quantity: 20,
    price: 0.85
  },
  {
    name: "bananas",
    id: 2,
    quantity: 10,
    price: 1.25
  },
  {
    name: "cherries",
    id: 3,
    quantity: 5,
    price: 2.5
  },
  {
    name: "dates",
    id: 4,
    quantity: 2,
    price: 3.0
  },
  {
    name: "elderberries",
    id: 5,
    quantity: 1,
    price: 4.0,
  },
  {
    name: "Watermelon",
    id: 6,
    quantity: 0,
    price: 5.0,
  },
  {
    name: "grapes",
    id: 7,
    quantity: 0,
    price: 6.0
  }
];

let order = {
  country: "United States",
  items: [
    {
      id: 1,
      quantity: 5,
    },
    {
      id: 2,
      quantity: 1,
    },
    {
      id: 6,
      quantity: 1,
    },
  ],
};

function processOrder(order, inventory) {
  let total = 0;
  let shipping = 0;
  let tax = 0;
  let grandTotal = 0;
  let items = order.items;
  let country = order.country;
  let totalItems = 0;
  let totalItemsPrice = 0;
  let totalItemsTax = 0;
  let totalItemsShipping = 0;
  let totalItemsGrandTotal = 0;

  for (let i = 0; i < items.length; i++) {
    // Get the item details
    let item = items[i];
    let itemID = item.id;
    let itemQuantity = item.quantity;
    let itemPrice = 0;
    let itemTax = 0;
    let itemShipping = 0;
    let itemGrandTotal = 0;

    for (let j = 0; j < inventory.length; j++) {
      // Find the item in the inventory
      if (inventory[j].id === itemID) {
        itemPrice = inventory[j].price;
        itemTax = itemPrice * 0.1;
        itemShipping = itemPrice * 0.05;
        itemGrandTotal = itemPrice + itemTax + itemShipping;
        totalItemsPrice += itemPrice * itemQuantity;
        totalItemsTax += itemTax * itemQuantity;
        totalItemsShipping += itemShipping * itemQuantity;
        totalItemsGrandTotal += itemGrandTotal * itemQuantity;
        totalItems += itemQuantity;
        break;
      }
    }
  }

  if (country === "United States") shipping = 5;
  else if (country === "Canada")  shipping = 10;
  else shipping = 15;

  tax = totalItemsTax;
  total = totalItemsPrice;
  grandTotal = total + tax + shipping;

  return {
    total,
    shipping,
    tax,
    grandTotal,
    totalItems,
    totalItemsPrice,
    totalItemsTax,
    totalItemsShipping,
    totalItemsGrandTotal,
  };
}

processOrder();
console.log(processOrder(order, inventory));
