/*
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, 
function accept 1 parameters:n, n is the number of customers 
to buy hotdogs, different numbers have different prices (refer to the 
following table), return a number that the customer need to pay 
how much money.

+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+
You can use if..else or ternary operator to complete it.
*/

// function saleHotdogs(n){
//           let a = 100;
//           let b = 95;
//           let c = 90;
          
//           return n < 5 ? (a * n) : n >= 5 && n < 10 ? (n * b) : (n * c);
// }

function saleHotdogs(n) {
          let a = 100;
          let b = 95;
          let c = 90;

          if(n < 5) {
                    return a * n;
          }else if (n >= 5 && n < 10) {
                    return b * n;
          }else {
                    return n * c
          }

}

console.log(saleHotdogs(1));
console.log(saleHotdogs(4));
console.log(saleHotdogs(5));
console.log(saleHotdogs(9));
console.log(saleHotdogs(10));
console.log(saleHotdogs(100));