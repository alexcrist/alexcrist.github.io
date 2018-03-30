const projectsData = [{
  name: 'van-drivers',
  url: 'https://github.com/alexcrist/van-drivers',
  description: `A web app (Node, AngularJS, MongoDB) that organizes van
    scheduling for my university's climbing team. The app is deployed on Heroku
    and integrates into our team's Slack channel.`
}, {
  name: 'new-hampshire-wildlife-guide',
  url: 'https://github.com/alexcrist/new-hampshire-wildlife-guide',
  description: `A project that first scrapes wildlife information and
    photographs from the internet using Python, then assembles the scraped data
    into a PDF using Lua and LaTeX. I made this to learn about web scraping and
    as a gift for my university's outdoor's club.`
}, {
  name: 'raspberry-pi-photo-booth',
  url: 'https://github.com/alexcrist/raspberry-pi-photo-booth',
  description: `This project turns a Raspberry Pi into a home photo booth. The
    Pi runs a web server that tells the Pi to take a photo whenever a particular
    route is hit, then serve the photo in an HTTP response. This allows users to
    visit the Pi's internal IP address from their phones when on the same
    network and view the photo back on their phone immediately.`,
}, {
  name: 'neural-network',
  url: 'https://github.com/alexcrist/neural-network',
  description: `An exploration into machine learning inspired after watching
    Google's AlphaGo domninate at Go using deep neural networks. This simple
    Python network has one hidden layer and can be applied to a variety of
    numerical datasets.`,
}, {
  name: 'alexcrist.github.io',
  url: 'https://github.com/alexcrist/alexcrist.github.io',
  description: `Meta! This is my personal website to summarize my major
    projects, skills, and work experience. Simple, responsive, and flexible enough
    to allow variable numbers of sections and sub-sections depending on the data
    given in the JSON content file.`,
}];

export default projectsData;
