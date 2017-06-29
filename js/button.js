$(function () {
  $('.buttons__button-1').addClass('buttons__button-selected');
});

$('.buttons__button-1').click(function () {
  $('.sections__container').addClass('sections__container-slide');
  $('.buttons__button-1').removeClass('buttons__button-selected');
  $('.buttons__button-2').addClass('buttons__button-selected');
});

$('.buttons__button-2').click(function () {
  $('.sections__container').removeClass('sections__container-slide');
  $('.buttons__button-1').addClass('buttons__button-selected');
  $('.buttons__button-2').removeClass('buttons__button-selected');
});
