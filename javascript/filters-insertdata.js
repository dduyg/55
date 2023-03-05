$(document).ready(function () {
  let selector_query = window.location.hash.substr(1);
  let filterButtons = $('.item.filter');
  let dataDesignButton = $('#filter-DataDesign');

  if (selector_query) {
    let element = $('#filter-' + selector_query);
    
    if (element.length) {
      filter(selector_query);
      filterButtons.removeClass('active');
      element.addClass('active');
      element.blur();
    }
  } else {
    dataDesignButton.trigger('click');
  }

  filterButtons.click(function () {
    filter(this.id.replace("filter-", ""));
    
    filterButtons.removeClass('active');
    $(this).addClass('active');
    $(this).blur();
  });

  function filter(category) {
    let selector = $('#filterable > div, #filterable > a');

    if (category.toLowerCase() == 'all' || category.toLowerCase() == 'todos') {
      selector.fadeOut('fast', function() {
        selector.attr("style", "display: none !important");
      }).promise().done(function() {
        selector.fadeIn('slow').promise().done(function() {
          $(this).trigger("fadeInComplete");
        });
      });
    } else {
      selector.fadeOut('fast', function() {
        selector.attr("style", "display: none !important");
      }).promise().done(function() {
        $('.' + category).fadeIn('slow').promise().done(function() {
          $(this).trigger("fadeInComplete");
        });
      });
    }
  }
});
