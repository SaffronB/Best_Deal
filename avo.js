exports.deals = function(string) {
  var avoDeals = string.split(', ');
  return avoDeals
}

exports.avoPrices = function (avoDeals) {
var pricePerAvo = [];

for (var i=0; i<avoDeals.length; i++) {
  //looked at previous work to remember naming avoDeals[i] a new var (deal)
  var eachDeal = avoDeals[i];
  var priceArray = eachDeal.split("for R");
  var divideIndex= (priceArray[1] / priceArray[0]).toFixed(2)
  pricePerAvo.push(divideIndex);

}

return pricePerAvo;
}

//here I asked questions like can you push an array into an object? How do I map the two arrays together? I know I have to loop through one of them.
exports.avoMap = function (avoDeals) {
  //I remember Andre & Steven saying this is not the best way to import a function into another one, but I've forgotten how to do it the way they suggested.
  var avoPrices = exports.avoPrices;
  var pricePerAvo = avoPrices(avoDeals);

priceMap = {};

for (var i= 0; i<avoDeals.length; i++) {
  //I looked back at previuos work to remind myself that I had to phrase it avoDeals[i] and not avoDeals(i)
var deal = avoDeals[i];
var price = pricePerAvo [i];
//At first I had an error where the priceMap was returning the deal still in an array. After fiddling around I found out this was because I at first stated priceMap[price]= [deal];
  priceMap[price]= deal;
}

return priceMap;

}
