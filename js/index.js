$(domReady);
$('.buttons__button-1').click(button1Clicked);
$('.buttons__button-2').click(button2Clicked);

function domReady() {
  $('.buttons__button-1').addClass('buttons__button-selected');

  var reposUrl = 'https://api.github.com/users/alexcrist/repos';
  var relevantRepos = [
    { name: 'neural-network', image: 'assets/29.jpg' },
    { name: 'van-drivers', image: 'assets/29.jpg' },
    { name: 'photo-booth', image: 'assets/29.jpg' },
    { name: 'ballmer-peak', image: 'assets/29.jpg' }
  ];
  getRepos(reposUrl, relevantRepos);
}

function getRepos(reposUrl, relevantRepos) {
  var success = function (res) {
    relevantRepos.forEach(function (repo) {
      var otherRepo = res.data.find(function (otherRepo) {
        return repo.name === otherRepo.name;
      });
      repo.htmlUrl = otherRepo.html_url;
      repo.description = otherRepo.description;
      repo.stargazersCount = otherRepo.stargazers_count;
    });
    console.log(relevantRepos);
    populateSection1(relevantRepos);
  };

  $.ajax({
    url: reposUrl,
    type: 'GET',
    data: { format: 'json' },
    dataType: 'jsonp',
    error: console.error,
    success: success
  });
}

function populateSection1(repos) {
  repos.forEach(function (repo) {
    var html = '<figure class="hover-effect">\
                  <img src="' + repo.image + '"/>\
                  <figcaption>\
                    <h2>' + repo.name + '</h2>\
                    <p>' + repo.description + '</p>\
                    <a href="#">View more</a>\
                  </figcaption>\
                </figure>';

    $('.sections__section-1 .grid').append(html);
  });
}

function button1Clicked() {
  $('.sections__container').removeClass('sections__container-slide');
  $('.buttons__button-1').addClass('buttons__button-selected');
  $('.buttons__button-2').removeClass('buttons__button-selected');
}

function button2Clicked() {
  $('.sections__container').addClass('sections__container-slide');
  $('.buttons__button-1').removeClass('buttons__button-selected');
  $('.buttons__button-2').addClass('buttons__button-selected');
}
