1. Avo:
We want to find the best place to buy some avocados. We like avocados because they are green. The supermarket has a set of different, slightly odd, offers for avos. A friend of ours has been hanging, staring at them, and has sent us this message:

"1 for R3, 2 for R7, 3 for R10, 5 for R14.50."
Use this string as your starting point. Use TDD and write functions that:

convert the string into an array (split out the quantity and the price);
take an array as an input and calculate the Price Per Avo for each deal (make sure you use just two decimal points);
find the cheapest deal;
find the most expensive deal;
find the average price across all the deals.

2. Fruition:
We want to find the best place to buy several types fruit: apples, bananas, and oranges. We like fruit. It is delicious. Another computer programmer has given us this information, in JSON format:

{
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
}
Use TDD and write functions that:

find the seller of the cheapest oranges;
return the prices and sellers of apples, order ascending by price;
return the prices and sellers of apples, order descending by price;
return the cheapest fruit;
return the seller of the fruit with the lowest price;
return all the shops that sell oranges.
