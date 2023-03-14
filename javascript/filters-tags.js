let filterButtons = $('.ui.fluid.dropdown')
let selector = $('#filterable > div, #filterable > a')

filterButtons.dropdown({
  clearable: true,
  placeholder: 'Filter by tag',
  onChange: function(value, text, $selectedItem) {
    if (value.length > 0) {
      selector.hide()
      $('.' + value.join(',.')).fadeIn('slow')
    } else {
      selector.fadeIn('slow')
    }
  }
})

let selected = window.location.hash.substr(1)
if (selected) {
  filterButtons.dropdown('set selected', selected)
  selector.hide()
  $('.' + selected).fadeIn('slow')
}
