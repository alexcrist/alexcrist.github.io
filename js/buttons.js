// Buttons will redirect client to appropriate URLs

function goToLink(link) {
    return function() {
        window.location.href = link;
    }
}

$("#neural").click(goToLink("https://github.com/alexcrist/neural-network"));
$("#compact").click(goToLink("https://github.com/alexcrist/compact-adventure"));
$("#reddit").click(goToLink("https://github.com/alexcrist/reddit-read-only"));
$("#website").click(goToLink("https://github.com/alexcrist/alexcrist.github.io"));