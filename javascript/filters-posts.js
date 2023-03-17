let selector_query = window.location.hash.substr(1);
let filterButtons = $('.item.filter');
let filterDropdown = $('.ui.toggle.labeled.icon.dropdown.button');
let filterDropdownText = filterDropdown.find('.text');

if (selector_query) {
  let element = $('#filter-' + selector_query);

  if (element.length) {
    filter(selector_query);
    filterButtons.removeClass('active');
    element.addClass('active');
    element.blur();
    filterDropdown.addClass('active');
    filterDropdownText.text(selector_query);
  }
}

filterButtons.click(function () {
  filter(this.id.replace('filter-', ''));

  filterButtons.removeClass('active');
  $(this).addClass('active');
  $(this).blur();
  filterDropdown.addClass('active');
  filterDropdownText.text(this.textContent);
});

filterDropdown.find('#filter-all').click(function () {
  filterButtons.removeClass('active');
  filter(this.id.replace('filter-', ''));
  filterDropdown.removeClass('active');
  filterDropdownText.text('Filter by tag');
});

function filter(category) {
  let selector = $('#filterable > div, #filterable > a');

  if (category.toLowerCase() == 'all' || category.toLowerCase() == 'todos') {
    selector.fadeOut('fast', function () {
      selector.attr('style', 'display: none !important');
    }).promise().done(function () {
      selector.fadeIn('slow').promise().done(function () {
        $(this).trigger('fadeInComplete');
      });
    });
  } else {
    selector.fadeOut('fast', function () {
      selector.attr('style', 'display: none !important');
    }).promise().done(function () {
      $('.' + category).fadeIn('slow').promise().done(function () {
        $(this).trigger('fadeInComplete');
      });
    });
  }
}
