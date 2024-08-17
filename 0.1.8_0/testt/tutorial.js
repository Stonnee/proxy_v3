var current_page = 0;
var total_page = 7;

jQuery('.slide_list img:not(:eq(0))').hide();

jQuery('.arrow.left').on('click', function() {
  var next_page = current_page - 1;
  if (next_page < 0) next_page = total_page-1;

  jQuery('.slide_list img').fadeOut(200);
  jQuery('.slide_list img:eq('+next_page+')').fadeIn(200);

  jQuery('.pagination li').removeClass('active');
  jQuery('.pagination li:eq('+next_page+')').addClass('active');

  current_page = next_page;
});

jQuery('.arrow.right').on('click', function() {
  var next_page = current_page + 1;
  if (next_page >= total_page) next_page = 0;

  jQuery('.slide_list img').fadeOut(200);
  jQuery('.slide_list img:eq('+next_page+')').fadeIn(200);

  jQuery('.pagination li').removeClass('active');
  jQuery('.pagination li:eq('+next_page+')').addClass('active');

  current_page = next_page;
});

jQuery('.pagination li').on('click', function() {
  var current_page = jQuery(this).attr('slide');

  jQuery('.slide_list img').fadeOut(200);
  jQuery('.slide_list img:eq('+current_page+')').fadeIn(200);

  jQuery('.pagination li').removeClass('active');
  jQuery('.pagination li:eq('+current_page+')').addClass('active');
})