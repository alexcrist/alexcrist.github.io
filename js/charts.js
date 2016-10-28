// Base config for charts
var baseChartConfig = {
    type: 'bar',
    data: {
        datasets: [{
            backgroundColor: [
                'rgba(150, 150, 150, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(150, 150, 150, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: 10
                }
            }]
        }
    }
};

// Colors
var gray = { fill: 'rgba(150, 150, 150, 0.2)', border: 'rgba(150, 150, 150, 1)' };
var red = { fill: 'rgba(255, 99, 132, 0.2)', border: 'rgba(255, 99, 132, 1)' };
var blue = { fill: 'rgba(54, 162, 235, 0.2)', border: 'rgba(54, 162, 235, 1)' };
var yellow = { fill: 'rgba(255, 206, 86, 0.2)', border: 'rgba(255, 206, 86, 1)' };
var green = { fill: 'rgba(75, 192, 192, 0.2)', border: 'rgba(75, 192, 192, 1)' };
var purple = { fill: 'rgba(153, 102, 255, 0.2)', border: 'rgba(153, 102, 255, 1)' };
var orange = { fill: 'rgba(255, 159, 64, 0.2)', border: 'rgba(255, 159, 64, 1)' };

// Returns a dataset skeleton from a list of color objects
function datasetFromColors(colors) {
    var dataset = { backgroundColor: [], borderColor: [], borderWidth: 1 };
    colors.forEach(function(color) {
        dataset.backgroundColor.push(color.fill);
        dataset.borderColor.push(color.border);
    });
    return dataset;
}

// Creates a deep copy of a JSON object
function deepCopy(json) {
    return JSON.parse(JSON.stringify(json));
}

// Returns a new chart from the given options
function makeChart(options) {
    var element = document.getElementById(options.elementId);
    var config = deepCopy(baseChartConfig);
    var dataset = datasetFromColors(options.colors);
    dataset.data = options.values;
    config.data.datasets = [dataset];
    config.data.labels = options.labels;
    return new Chart(element, config);
}

// Languages
makeChart({
    elementId: "languages",
    labels: ["Ruby", "C++", "Bash", "Lisp", "JS", "Java", "Python"],
    colors: [red, blue, gray, green, yellow, red, purple],
    values: [3, 4, 4, 5, 8, 10, 10]
});

// Frameworks
makeChart({
    elementId: "frameworks",
    labels: ["iOS", "MEAN stack", "Android"],
    colors: [gray, blue, green],
    values: [3, 7, 9]
});

// Version control
makeChart({
    elementId: "version",
    labels: ["SVN", "Mercurial", "Git"],
    colors: [green, blue, orange],
    values: [4, 7, 10]
});

// Editors
makeChart({
    elementId: "editors",
    labels: ["Eclipse", "Vim", "Sublime", "IntelliJ"],
    colors: [purple, green, orange, blue],
    values: [4, 5, 10, 10]
});


