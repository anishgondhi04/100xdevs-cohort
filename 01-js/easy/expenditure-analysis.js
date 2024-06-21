/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let numOfTransactions = transactions.length;

  let listOfItems = [];

  let count = 0;

  for (let i = 0; i < numOfTransactions; i++) {
    let Item = {category: '',totalSpent: 0};
    let flag = 0;
    if (count == 0){
      Item.category = transactions[0].category;
      Item.totalSpent = transactions[0].price;
      listOfItems[count++] = Item;
      continue;
    }
    for(let j = 0; j < count; j++){
      if(listOfItems[j].category.toLowerCase() == transactions[i].category.toLowerCase() ){
        listOfItems[j].totalSpent += transactions[i].price;
        flag++;
      }
    }
    if(!flag){
      Item.category = transactions[i].category;
      Item.totalSpent = transactions[i].price;
      listOfItems[count++] = Item;
    }
  }
  return listOfItems;
}

module.exports = calculateTotalSpentByCategory;
