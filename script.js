
var count = 0;
// var questionOne = document.getElementById("quest1").value;
function check(a, b, c, d, e, f, g, h, j, k) {

    if (a =="1") {
    count += 1;
    console.log(count);
  }
  if (b== "1") {
    count += 1;
  }
  if (c == "1") {
    count += 1;
  }
  if (d == "1") {
    count += 1;
  }
  if (e == "1") {
    count += 1;
  }
  if (f== "1") {
    count += 1;
  }
  if (g == "1") {
    count += 1;
  } if (h == "1") {
    count += 1;
  }
  // if (i == "1") {
  //   count += 1;
  // }
  if (j== "1") {
    count += 1;
  }
  if (k == "1") {
    count += 1;
  }
  

  return count
  // document.getElementById("after_submit").style.visibility ="visible";

  // document.getElementById("number_count").innerHTML = "You got " +count + "%.";

};
$(document).ready(function () {

  $('form#quiz').submit(function (event) {
    event.preventDefault();

    var Question1 = $("input:radio[name='firstQuestion']:checked").val()
    var Question2 = $("input:radio[name='secondQuestion']:checked").val()
    console.log(Question1);

    var Question3 = $("input[type='radio'][name='thirdQuestion']:checked").val()
    var Question4 = $("input[type='radio'][name='fothQuestion']:checked").val()
    var Question5 = $("input[type='radio'][name='fithQuestion']:checked").val()
    var Question6 = $("input[type='radio'][name='sixQuestion']:checked").val()
    var Question7 = $("input[type='radio'][name='sevenQuestion']:checked").val()
    var Question8 = $("input[type='radio'][name='eightQuestion']:checked").val()
    var Question9 = $("input[type='radio'][name='nineQuestion']:checked").val()
    var Question10 = $("input[type='radio'][name='tenQuestion']:checked").val()
 
    // console.log(Question1)
    check(Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10);
    console.log(count);
    $("form#quiz").hide();
    $('#number_count').text("You get " + count + "/10.")
    $("#number_count").show();
  })

})
