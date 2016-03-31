$(document).ready(function() {
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
