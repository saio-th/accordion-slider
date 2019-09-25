function accordionSlider () {

  //DOM
  var $sliderWrap = $('.slider-wrap');
  var $slider = $sliderWrap.find('.slider');
  var $index = $slider.find('.index');

  //数値
  var sliderNum = $slider.length;
  var indexWidth = $index.outerWidth();
  var sliderWrapWidth = $sliderWrap.width();
  var duration = 300;

  $(window).on('resize', function() {
    sliderWrapWidth = $sliderWrap.width();

    init();
  });

  init();

  $index.on('click', function() {
    var num = $index.index(this);
    var start = sliderWrapWidth - (indexWidth * (sliderNum - num - 1));

    for(var i = num; i > 0; i--){
      $slider.eq(i).stop().animate({left: indexWidth * i}, duration, 'swing');
    }

    for(var i = num; i < sliderNum; i++) {
      $slider.eq(i + 1).stop().animate({left: start + (indexWidth * (i - num))}, duration, 'swing');
    }
  });

  //関数
  function init () {
    for(var i = 0; i < sliderNum; i++) {
      $slider.eq(i).css({
        left: i * indexWidth,
        width: sliderWrapWidth - (i * indexWidth)
      });
    }
  }
}

accordionSlider();