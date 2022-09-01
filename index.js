// var header_input = document.getElementsByClassName("el-inner-input");
// // alert(header_input);
var first_li = document.getElementsByClassName("nav-li")[0];
var second_li = document.getElementsByClassName("nav-li")[1];
var third_li = document.getElementsByClassName("nav-li")[2];
var four_li = document.getElementsByClassName("nav-li")[3];

var indexpage = document.getElementById("indexpage");
var pagetwo = document.getElementById("pagetwo");

first_li.addEventListener("click", function () {
  this.style.borderBottom = "2px solid #ec1525";
  this.style.color = "#ec1525";
  second_li.style.borderBottom = "none";
  second_li.style.color = "#000";
  third_li.style.borderBottom = "none";
  third_li.style.color = "#000";
  four_li.style.borderBottom = "none";
  four_li.style.color = "#000";
  indexpage.style.display = "flex";
  pagetwo.style.display = "none";
});

second_li.addEventListener("click", function () {
  this.style.borderBottom = "2px solid #ec1525";
  this.style.color = "#ec1525";
  first_li.style.borderBottom = "none";
  first_li.style.color = "#000";
  third_li.style.borderBottom = "none";
  third_li.style.color = "#000";
  four_li.style.borderBottom = "none";
  four_li.style.color = "#000";
  indexpage.style.display = "none";
  pagetwo.style.display = "flex";
});

third_li.addEventListener("click", function () {
  this.style.borderBottom = "2px solid #ec1525";
  this.style.color = "#ec1525";
  second_li.style.borderBottom = "none";
  second_li.style.color = "#000";
  first_li.style.borderBottom = "none";
  first_li.style.color = "#000";
  four_li.style.borderBottom = "none";
  four_li.style.color = "#000";
});

four_li.addEventListener("click", function () {
  this.style.borderBottom = "2px solid #ec1525";
  this.style.color = "#ec1525";
  second_li.style.borderBottom = "none";
  second_li.style.color = "#000";
  third_li.style.borderBottom = "none";
  third_li.style.color = "#000";
  first_li.style.borderBottom = "none";
  first_li.style.color = "#000";
});

// var li_1 = document.getElementById("li-1");
// var li_2 = document.getElementById("li-2");
// var li_3 = document.getElementById("li-3");

var li_1 = document.getElementsByClassName("inner-li")[0];
var li_2 = document.getElementsByClassName("inner-li")[1];
var li_3 = document.getElementsByClassName("inner-li")[2];
var title_mobile = document.getElementById("title-mobile");
var at_header = document.getElementById("at-header");
var mb_two = document.getElementById("mb-two");
var two_main = document.getElementById("two-main");
var lch = document.getElementById("left-card-header");
var card_h = document.getElementById("card-h");
var lw = document.getElementById("lw");
var rw = document.getElementById("rw");

li_1.addEventListener("click", function () {
  this.style.borderBottom = "2px solid #ec1525";
  this.style.color = "#ec1525";
  li_2.style.borderBottom = "none";
  li_2.style.color = "#000";
  li_3.style.borderBottom = "none";
  li_3.style.color = "#000";
  title_mobile.style.display = "block";
  indexpage.style.display = "none";
  at_header.style.display = "none";
  mb_two.style.display = "none";
  two_main.style.display = "none";
  lw.style.display = "none";
  rw.style.display = "none";
  lch.style.display = "none";
  card_h.style.display = "none";
});

li_2.addEventListener("click", function () {
  this.style.borderBottom = "2px solid #ec1525";
  this.style.color = "#ec1525";
  li_1.style.borderBottom = "none";
  li_1.style.color = "#000";
  li_3.style.borderBottom = "none";
  li_3.style.color = "#000";
  title_mobile.style.display = "none";
  indexpage.style.display = "flex";
  at_header.style.display = "none";
  mb_two.style.display = "flex";
  two_main.style.display = "flex";
  lw.style.display = "none";
  rw.style.display = "none";
  lch.style.display = "none";
  card_h.style.display = "none";
  // left_card_body.style.display = "block";
  // el_card.style.display = "block";
  // left_card_header.style.display = "none";
  // left_card_body.style.display = "flex";
});

li_3.addEventListener("click", function () {
  this.style.borderBottom = "2px solid #ec1525";
  this.style.color = "#ec1525";
  li_1.style.borderBottom = "none";
  li_1.style.color = "#000";
  li_2.style.borderBottom = "none";
  li_2.style.color = "#000";
});

var is_number = document.getElementById("sn");
var number_not = document.getElementById("nn");
var mmm = document.getElementById("mmm");
var mms = document.getElementById("mms");

number_not.addEventListener("click", function () {
  this.style.color = "#fff";
  this.style.borderRadius = "20px";
  this.style.backgroundColor = "#ec1525";
  // this.style.marginRight = "20px";
  this.style.fontWeight = "700";

  is_number.style.color = "#000";
  is_number.style.borderRadius = "0";
  is_number.style.backgroundColor = "#f0f2f5";
});

is_number.addEventListener("click", function () {
  is_number.style.color = "#fff";
  is_number.style.borderRadius = "20px";
  is_number.style.backgroundColor = "#ec1525";
  // this.style.marginRight = "20px";
  is_number.style.fontWeight = "700";

  number_not.style.color = "#000";
  number_not.style.borderRadius = "0";
  number_not.style.backgroundColor = "#f0f2f5";
});

mmm.addEventListener("click", function () {
  is_number.style.color = "#fff";
  is_number.style.borderRadius = "20px";
  is_number.style.backgroundColor = "#ec1525";
  // this.style.marginRight = "20px";
  is_number.style.fontWeight = "700";

  number_not.style.color = "#000";
  number_not.style.borderRadius = "0";
  number_not.style.backgroundColor = "#f0f2f5";
  this.style.cursor = "not-allowed";
  mms.style.cursor = "pointer";
  mms.style.color = "#ababb2";
  this.style.color = "#ababb2";
});

mms.addEventListener("click", function () {
  number_not.style.color = "#fff";
  number_not.style.borderRadius = "20px";
  number_not.style.backgroundColor = "#ec1525";
  // this.style.marginRight = "20px";
  number_not.style.fontWeight = "700";

  is_number.style.color = "#000";
  is_number.style.borderRadius = "0";
  is_number.style.backgroundColor = "#f0f2f5";
  this.style.cursor = "not-allowed";
  mmm.style.cursor = "pointer";
  mmm.style.color = "#ababb2";
  this.style.color = "#ababb2";
});
