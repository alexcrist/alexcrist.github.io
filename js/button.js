$(function () {
  $('.buttons__button-left').addClass('buttons__button-selected');
});

$('.buttons__button-left').click(function () {
  $('.sections__container').removeClass('sections__container-slide');
  $('.buttons__button-left').addClass('buttons__button-selected');
  $('.buttons__button-right').removeClass('buttons__button-selected');
});

$('.buttons__button-right').click(function () {
  $('.sections__container').addClass('sections__container-slide');
  $('.buttons__button-left').removeClass('buttons__button-selected');
  $('.buttons__button-right').addClass('buttons__button-selected');
});
