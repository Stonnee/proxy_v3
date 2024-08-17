jQuery.each(jQuery('[data-l10n-id]'), function(i, e) {
  if (jQuery(e).attr('data-l10n-id').indexOf('placeholder') == 0) {
    jQuery(e).attr('placeholder', chrome.i18n.getMessage(jQuery(e).attr('data-l10n-id')));
  } if (jQuery(e).attr('data-l10n-id').indexOf('value') == 0) {
    jQuery(e).val(chrome.i18n.getMessage(jQuery(e).attr('data-l10n-id')));
  } else {
    jQuery(e).html(chrome.i18n.getMessage(jQuery(e).attr('data-l10n-id')));
  }
});

var raw_proxy_list = '';
jQuery('.loading').hide();

jQuery('.select').on('click', function() {
  jQuery('.file_selector').trigger('click');
})

jQuery('.file_selector').on('change', function() {
  var file = this.files[0];
  jQuery('.name').text(file.name);
  var reader = new FileReader();
  reader.addEventListener('load', function(e) {
    raw_proxy_list = e.target.result;
  }, false);
  reader.readAsText(file);
})

jQuery('.button').on('click', function() {
  jQuery('.loading').fadeIn(200);
  popup().import(raw_proxy_list, function() {
    jQuery('.loading').fadeOut(200);
    self.close();
  });
})