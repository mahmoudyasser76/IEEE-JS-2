// Item object
function createItem(name, category, price, stock) {
  return {
    name: name || "Unknown Item",
    category: category || "Unknown Category",
    price: price || 0.0,
    stock: stock || 0,

    updateStock(newStock) {
      this.stock = newStock || 0;
    },

    applyDiscount(discount) {
      const discountAmount = (this.price * (discount || 0)) / 100;
      this.price -= discountAmount;
    },
  };
}

// Inventory object
const Inventory = {
  items: [],

  addItem(item) {
    if (item && item.name) {
      this.items.push(item);
    } else {
      console.log("Invalid item");
    }
  },

  removeItem(itemName) {
    const index = this.items.findIndex((item) => item.name === itemName);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      console.log("Item not found");
    }
  },

  getItems(itemName) {
    return this.items.find((item) => item.name === itemName);
  },

  filterItems(predicate) {
    return this.items.filter(predicate);
  },
};

//create some items
const item1 = createItem("Laptop", "Electronics", 1200, 10);
const item2 = createItem("Phone", "Electronics", 800, 20);
const item3 = createItem("Shoes", "Footwear", 100, 50);
const item4 = createItem("Shirt", "Clothing", 30, 100);

//add items to inventory
Inventory.addItem(item1);
Inventory.addItem(item2);
Inventory.addItem(item3);
Inventory.addItem(item4);

// update stock
item1.updateStock(9);
// apply discount
item2.applyDiscount(10);

//filter items
const electronics = Inventory.filterItems(
  (item) => item.category === "Electronics"
);
console.log("Electronics:", electronics);
// filter items by low stock
const lowStockItems = Inventory.filterItems((item) => item.stock < 20);
console.log("Low stock items:", lowStockItems);

// remove item
Inventory.removeItem("Shoes");
console.log("Items after removing Shoes:", Inventory.items);
