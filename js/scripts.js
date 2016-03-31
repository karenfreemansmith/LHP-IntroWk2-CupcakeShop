var celsiusToFarenheight = function(degrees) {
  return ((degrees*9)/5)+32;
};
var farenheightToCelsius = function(degrees) {
  return ((degrees-32)*5)/9;
};
var gallonsToQuarts = function(gallons) {
  return gallons*4;
};
var quartsToPints = function(quarts) {
  return quarts*2;
};
var pintsToCups = function(pints) {
  return pints*2;
};
var cupsToOunces = function(cups) {
  return cups*8;
};
var ozToLiters = function(ounces) {
  return ounces/33.82;
};

var litersToOunces = function(liters) {
  return liters*33.82;
};
var ouncesToCups = function(oz) {
  return oz/8;
};

$(document).ready(function() {
  $("#gal2liters").submit(function(event) {
    event.preventDefault();
    var gallonsInput = $("input#gallons").val();
    $(".gal2liters").text(ozToLiters(cupsToOunces(pintsToCups(quartsToPints(gallonsToQuarts(gallonsInput))))));
  });
  $("#liters2cups").submit(function(event) {
    event.preventDefault();
    var litersInput = $("input#liters").val();
    $(".liters2cups").text(ouncesToCups(litersToOunces(litersInput)));
  });
  $("#cup2Tbsp").submit(function(event) {
    event.preventDefault();
    var cupsInput = $("input#cups").val();
    $(".cup2Tbsp").text(cupsToOunces(cupsInput)/2);
  });
  $("#order form").submit(function(event) {
    event.preventDefault();

    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var productInput = $("input#product").val();
    var quantityInput = $("input#quantity").val();
    var totalInput = (parseInt(quantityInput) * 1.99) + 5.99;
    var dateInput = new Date();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".product").text(productInput);
    $(".quantity").text(quantityInput);
    $(".total").text(totalInput);
    $(".todayDate").text(dateInput.toDateString());

    $("#order").hide();
    $("#receipt").show();


  });
});
