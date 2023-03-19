$(document).ready(function() {
  var liked = false;
  $('.like').on('click', function() {
    if (liked) {
      $(this).removeClass('red');
      $(this).find('.icon').removeClass('thumbs up').addClass('thumbs outline up');
      $(this).find('.text').text('Like');
    } else {
      $(this).addClass('red');
      $(this).find('.icon').removeClass('thumbs outline up').addClass('thumbs up');
      $(this).find('.text').text('Liked');
    }
    liked = !liked;
  });
});
