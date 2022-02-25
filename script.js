const range = $(".range");
const thumb = $(".thumb");
const track = $(".track-inner");
const pricingPerMonth = $(".month-value");
const pageviews = $(".page-views");
const toggle = $(".toggle");
const btn = $(".btn-test");

let clicked = false;
let listPrices = [8.0, 12.0, 16.0, 24.0, 36.0];
listPrices = listPrices.map((l) => l.toFixed(2));

const updateSlider = (value) => {
  thumb.css("left", `${value}%`);
  thumb.css("transform", `translate(-${value}%,-50%)`);
  track.css("width", `${value}%`);
};
toggle.attr("disabled", true);
btn.click(function () {
  toggle.attr("checked", false);
  const val = isChecked();
  intialize(val);
  range.on("input", (e) => {
    if (isChecked()) {
      updateDiscountPrice(e.target.value);
    } else updatePricing(listPrices, e.target.value);
    updateSlider(e.target.value);
  });
});
let flag = false;
function isChecked() {
  $(toggle).click(function () {
    if ($(toggle).is(":checked")) flag = true;
    else flag = false;
  });
  if (flag) {
    return true;
  } else return false;
}
function intialize(value) {
  toggle.attr("disabled", false);
  updateSlider(0);
  if (value == true) intializeDiscount();
  else {
    pageviews.text(`${10}K PAGEVIEWS`);
    pricingPerMonth.text("$8.00");
  }
}
function intializeDiscount() {
  pageviews.text(`${10}K PAGEVIEWS`);
  pricingPerMonth.text("$6.00");
}
updateSlider(50);
function updatePricing(prices, value) {
  switch (+value) {
    case 0:
      pageviews.text(`${10}K PAGEVIEWS`);
      pricingPerMonth.text(`$${prices[0]}`);
      break;
    case 25:
      pageviews.text(`${50}K PAGEVIEWS`);
      pricingPerMonth.text(`$${prices[1]}`);

      break;
    case 50:
      pageviews.text(`${100}K PAGEVIEWS`);
      pricingPerMonth.text(`$${prices[2]}`);

      break;
    case 75:
      pageviews.text(`${500}K PAGEVIEWS`);
      pricingPerMonth.text(`$${prices[3]}`);

      break;
    case 100:
      pageviews.text(`${1}M PAGEVIEWS`);
      pricingPerMonth.text(`$${prices[4]}`);
      break;
  }
}

function updateDiscountPrice(value) {
  const discountListPrices = listPrices.map((l) => (l - l * 0.25).toFixed(2));
  updatePricing(discountListPrices, value);
}
