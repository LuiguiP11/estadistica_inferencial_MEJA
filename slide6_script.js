document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('correlationChart')?.getContext('2d');
    if (ctx) {
        const textColor = '#ccd6f6';
        const gridColor = 'rgba(204, 214, 246, 0.2)';
        const pointColor = '#64FFDA';
        const pointBorderColor = '#E6F1FF';

        const actualData = [
            { x: 3.5, y: 2.1 }, { x: 4.2, y: 4.2 }, { x: 4.6, y: 3.9 }, { x: 3.5, y: 3.2 },
            { x: 3.4, y: 4.4 }, { x: 4.7, y: 3.0 }, { x: 3.5, y: 4.3 }, { x: 4.3, y: 3.7 },
            { x: 3.4, y: 2.8 }, { x: 3.3, y: 3.4 }, { x: 4.2, y: 4.9 }, { x: 4.5, y: 4.5 },
            { x: 4.7, y: 2.7 }, { x: 3.2, y: 3.2 }, { x: 4.3, y: 4.8 }, { x: 3.5, y: 2.8 },
            { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 },
            { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 },
            { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 3.1, y: 2.8 }, { x: 3.1, y: 2.8 },
            { x: 3.1, y: 2.8 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 },
            { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 },
            { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 },
            { x: 2.5, y: 2.0 }, { x: 2.5, y: 2.0 }, { x: 5.0, y: 3.5 }, { x: 4.1, y: 3.5 },
            { x: 3.0, y: 3.8 }, { x: 1.4, y: 1.7 }, { x: 3.7, y: 2.8 }, { x: 2.8, y: 3.2 },
            { x: 3.8, y: 2.9 }, { x: 4.2, y: 3.9 }, { x: 2.8, y: 3.7 }, { x: 4.2, y: 3.9 },
            { x: 4.1, y: 3.5 }, { x: 5.0, y: 5.0 }, { x: 3.5, y: 3.5 }, { x: 4.9, y: 4.7 },
            { x: 3.9, y: 4.7 }, { x: 3.9, y: 4.7 }, { x: 3.9, y: 4.7 }, { x: 3.9, y: 4.7 },
            { x: 3.9, y: 4.0 }, { x: 3.9, y: 4.7 }, { x: 3.9, y: 4.7 }, { x: 3.9, y: 4.7 },
            { x: 4.1, y: 4.7 }, { x: 4.2, y: 4.1 }, { x: 3.9, y: 3.8 }, { x: 4.4, y: 4.2 },
            { x: 0.9, y: 2.9 }, { x: 4.3, y: 3.6 }
        ];

        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Relación entre Dimensiones',
                    data: actualData,
                    backgroundColor: pointColor,
                    borderColor: pointBorderColor,
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { labels: { color: textColor } },
                    tooltip: { backgroundColor: '#0a192f', titleColor: textColor, bodyColor: textColor, borderColor: gridColor, borderWidth: 1 }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Factores Socioeconómicos y Personales (D1)', color: textColor },
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    },
                    y: {
                        title: { display: true, text: 'Factores Académicos e Institucionales (D2)', color: textColor },
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    }
                }
            }
        });
    }
});