(function () {
  var method;
  var noop = function () {
  };
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
  set_dynamic_style_sheet_defferfix('css/font_awsome.css');
  set_dynamic_style_sheet_defferfix('css/bootstrap.min.css');
  set_dynamic_style_sheet_defferfix('css/main.css');
  set_dynamic_style_sheet_defferfix('css/responsive.css');

  function set_dynamic_style_sheet_defferfix(href) {

    var myCSS = document.createElement("link");
    myCSS.rel = "stylesheet";
    myCSS.href = href;
// insert it at the end of the head in a legacy-friendly manner
    document.head.insertBefore(myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);

  }

  $(window).on("load", function () {
    preloaderFadeOutTime = 500;

    function hidePreloader() {
      var preloader = $('.spinner-wrapper');
      preloader.fadeOut(preloaderFadeOutTime);
    }

    hidePreloader();
  });

  $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    $(this).siblings().toggleClass("show");


    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass("show");
    });

  });



}());

if ($('#slider0to50').length > 0) {

var sliderLeft = document.getElementById("slider0to50");
var sliderRight = document.getElementById("slider51to100");
var inputMin = document.getElementById("min");
var inputMax = document.getElementById("max");

///value updation from input to slider
//function input update to slider
function sliderLeftInput() {//input udate slider left
  sliderLeft.value = inputMin.value;
}

function sliderRightInput() {//input update slider right
  sliderRight.value = (inputMax.value);//chnage in input max updated in slider right
}

//calling function on change of inputs to update in slider
inputMin.addEventListener("change", sliderLeftInput);
inputMax.addEventListener("change", sliderRightInput);


///value updation from slider to input
//functions to update from slider to inputs
function inputMinSliderLeft() {//slider update inputs
  inputMin.value = sliderLeft.value;
}

function inputMaxSliderRight() {//slider update inputs
  inputMax.value = sliderRight.value;
}

sliderLeft.addEventListener("change", inputMinSliderLeft);
sliderRight.addEventListener("change", inputMaxSliderRight);
  // exists.
}