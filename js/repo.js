$(function () {
  var reposUrl = 'https://api.github.com/users/alexcrist/repos';
  var relevantRepos = [
    { name: 'neural-network', image: 'assets/neural.png' },
    { name: 'van-drivers', image: 'assets/29.jpg' },
    { name: 'photo-booth', image: 'assets/29.jpg' },
    { name: 'ballmer-peak', image: 'assets/29.jpg' }
  ];
  getRepos(reposUrl, relevantRepos);
});

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
                    <h2>' + boldify(repo.name) + '</h2>\
                    <p>' + repo.description + '</p>\
                    <a href="' + repo.htmlUrl + '">View more</a>\
                  </figcaption>\
                </figure>';

    $('.sections__fetching').remove();
    $('.sections__section-left .grid').append(html);
  });
}

function boldify(name) {
  var index = name.indexOf('-');
  if (index === -1) {
    return name;
  }
  return name.substring(0, index)
    + '<span>'
    + name.substring(index + 1, name.length)
    + '</span>';
}

