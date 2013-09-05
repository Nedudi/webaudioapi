$(function(){
  $('.play').on('click', function(){
    window.playButtonClick();
    $('body').addClass('playing');
  });
  $('.pause').on('click', function(){
    window.stopButtonClick();
    $('body').removeClass('playing');
  });
});
