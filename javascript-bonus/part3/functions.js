/*
1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like "Making green tea" when called with "green tea". Store the result in a variable named teaOrder.
*/

const makeTea = (typeOfTea = "chai") => {
  return `Making ${typeOfTea}`;
};

const teaOrder = makeTea("green tea");
// console.log(teaOrder);

/*
2. Create a function named "orderTea" that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like "Order confirmed for chai". Call 'confirmOrder' from within 'orderTea' and return result.
*/

const orderTea = (teaType = "chai") => {
  const confirmOrder = () => {
    return `Order confirmed for ${teaType}`;
  };
  return confirmOrder();
};

const result = orderTea("green tea");
// console.log(result);

/*
3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'. Store the result in a variable named 'totalCost'.
*/

const calculateTotal = (price, quantity) => price * quantity;

const totalCost = calculateTotal(34, 11);
// console.log(totalCost);

/*
4. Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it with the argument "earl grey". Return the result of calling 'makeTea'.
NOTE: HIGHER ORDER FUNCTION
*/

const processTeaOrder = (func) => {
  return func("earl grey");
};

const newMakeTea = (teaType) => {
  return `Making ${teaType}`;
};

const order = processTeaOrder(newMakeTea);
// console.log(order);

/*
5. Write a function named 'createTeaMaker' that returns another function. the returned function should take one parameter, 'teaType', return a message like "Making green tea". Store the returned function in a variable named 'teaMaker' and call it with 'green tea'.
*/

const createTeaMaker = () => {
  return (teaType) => {
    return `Making ${teaType}`;
  };
};

const teaMaker = createTeaMaker();
console.log(teaMaker("haka"));
