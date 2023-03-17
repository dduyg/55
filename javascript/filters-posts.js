$(document).ready(function() {
  let selector_query = window.location.hash.substr(1);
  let filterButtons = $('.item.filter');
  let filterDropdown = $('.ui.labeled.icon.dropdown.button');
  let viewAllButton = $('.item.all');

  // set initial filter state based on URL hash
  if (selector_query) {
    filterButtons.removeClass('active');
    viewAllButton.removeClass('active');
    $(`[data-filter="${selector_query}"]`).addClass('active');
  } else {
    viewAllButton.addClass('active');
  }

  // set filter state when filter button is clicked
  filterButtons.on('click', function() {
    let filter = $(this).data('filter');
    filterButtons.removeClass('active');
    viewAllButton.removeClass('active');
    $(this).addClass('active');
    filterDropdown.dropdown('clear');
    if (filter === 'all') {
      window.location.hash = '';
    } else {
      window.location.hash = filter;
    }
  });

  // set filter state when view all button is clicked
  viewAllButton.on('click', function() {
    filterButtons.removeClass('active');
    $(this).addClass('active');
    filterDropdown.dropdown('clear');
    window.location.hash = '';
  });
});
