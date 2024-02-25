// script.js

// Simulated data for statistics
const statisticsData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    values: [50000, 75000, 100000, 125000] // Example sales data
};

// Function to render statistics chart
function renderStatisticsChart() {
    // Assuming you're using a chart library like Chart.js
    // Initialize a chart using data from statisticsData
    // Example:
    const ctx = document.getElementById('statistics-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: statisticsData.labels,
            datasets: [{
                label: 'Electric Car Sales',
                data: statisticsData.values,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

// Call the function to render statistics chart when the page loads
window.onload = function() {
    renderStatisticsChart();
};
