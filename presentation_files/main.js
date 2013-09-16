$(function(){
  window.timeUpdateInterval = false;
  $('.play').on('click', function(){
    window.playButtonClick();
    $('body').addClass('playing');
    var playStartTime = new Date().getTime();
    $('.pause').html('0 s');
    if(timeUpdateInterval) clearInterval(timeUpdateInterval);
    window.timeUpdateInterval = setInterval(function(){
      var currentTime = new Date().getTime();
      var val = Math.round((currentTime -playStartTime )/100)/10;
      $('.pause').html( val+ (val==Math.ceil(val)?'.0':'') + ' s');
    },100);
  });
  $('.pause').on('click', function(){
    window.stopButtonClick();
    $('body').removeClass('playing');
  });
});
