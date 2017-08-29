$.getJSON('../data/content.json', populatePage);

function populatePage(data) {
  data.forEach(renderSection);
  setCssWidths(data);
  setButtonHanlders(data);
}

function renderSection(section, index) {
  renderButton(section.title, index);
  renderSectionContent(section.title, section.desc, section.items);
}

function renderButton(title, index) {
  var classes = 'buttons__button buttons__button-' + index;
  var html = '<div class="' + classes + '">' + title + '</div>';
  $('.buttons__container').append(html);
}

function renderSectionContent(title, desc, items) {
  var html = '<div class="sections__section">'
    + '<div class="sections__title">― ' + title + ' ―</div>'
    + '<div class="sections__desc">' + desc + '</div>'
    + '<div class="sections__items">' + getItemsHtml(items) + '</div>'
    + '</div>';
  $('.sections__container').append(html);
}

function getItemsHtml(items) {
  var html = '';
  items.forEach(function (item) {
    var title = '<div class="item__title">' + item.title + '</div>';
    if (item.url) {
      title = '<a target="_blank" href="' + item.url + '">' + title + '</a>';
    }
    var desc = '<div class="item__desc">' + item.desc + '</div>';
    html += '<div class="item">' + title + desc + '</div>';
  });
  return html;
}

function setCssWidths(data) {
  var sectionWidth = 100 / data.length + '%';
  var containerWidth = 100 * data.length + '%';
  var buttonWidth = (100 - (2 * data.length)) / data.length + '%';

  $('.sections__container').css('width', containerWidth);
  $('.sections__section').css('width', sectionWidth);
  $('.buttons__button').css('width', buttonWidth);
}

function setButtonHanlders(data) {
  data.forEach(function (section, index) {
    $('.buttons__button-' + index).click(function () {
      var marginLeft = -100 * index + '%';
      $('.sections__container').css('margin-left', marginLeft);
    });
  });
}