$(function () {
  const sliderElement = $("#slider-range");
  sliderElement.slider({
    range: true,
    min: 0,
    max: 30000,
    values: [5000, 10000],
    slide: function (event, ui) {
      $("#amount").val( ui.values[0]  +"₽ - "+ ui.values[1]+ "₽");
    }
  });
  $("#amount").val(sliderElement.slider("values", 0) + "₽ -" +
   sliderElement.slider("values", 1) + "₽");
});
