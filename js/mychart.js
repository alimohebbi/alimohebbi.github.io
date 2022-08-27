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
            'rgb(215,11,80)',
            'rgb(232,138,55)',
            'rgb(232,223,40)',
            'rgb(28,215,96)',
            'rgb(54, 162, 235)',
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

