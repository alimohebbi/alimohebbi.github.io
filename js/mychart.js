const data = {
    labels: [
        'Planning',
        'Effective Communication',
        'Critical Thinking',
        'Team Management',
        'Open-mindedness'
    ],
    datasets: [{
        label: 'Soft Skills',
        data: [90, 75, 80, 70, 55],
        backgroundColor: [
            'rgb(153,6,56)',
            'rgb(215,119,27)',
            'rgb(239,234,11)',
            'rgb(15,127,56)',
            'rgb(18,146,234)',
        ],
        hoverOffset: 4,

    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        animation: {
            animateScale: true
        },
        plugins: {
            deferred: {
                // xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                // yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 16,
                        family: 'Quicksand',

                    },
                    color: 'black'
                }
            }
        }
    }
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

