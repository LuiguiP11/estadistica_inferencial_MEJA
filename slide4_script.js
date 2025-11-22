document.addEventListener('DOMContentLoaded', () => {
    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ccd6f6',
                    font: {
                        size: 10
                    }
                }
            }
        }
    };

    const generoCtx = document.getElementById('generoChart')?.getContext('2d');
    if (generoCtx) {
        new Chart(generoCtx, {
            type: 'pie',
            data: {
                labels: ['Femenino', 'Masculino'],
                datasets: [{
                    label: 'Distribución por Género',
                    data: [45, 22],
                    backgroundColor: ['#64FFDA', 'rgba(100, 255, 218, 0.2)'],
                    borderColor: ['#E6F1FF', '#E6F1FF'],
                    borderWidth: 1
                }]
            },
            options: pieChartOptions
        });
    }

    const trabajaCtx = document.getElementById('trabajaChart')?.getContext('2d');
    if (trabajaCtx) {
        new Chart(trabajaCtx, {
            type: 'pie',
            data: {
                labels: ['Sí Trabaja', 'No Trabaja'],
                datasets: [{
                    label: '¿Trabaja actualmente?',
                    data: [40, 27],
                    backgroundColor: ['#64FFDA', 'rgba(100, 255, 218, 0.2)'],
                    borderColor: ['#E6F1FF', '#E6F1FF'],
                    borderWidth: 1
                }]
            },
            options: pieChartOptions
        });
    }

    const situacionCtx = document.getElementById('situacionChart')?.getContext('2d');
    if (situacionCtx) {
        new Chart(situacionCtx, {
            type: 'pie',
            data: {
                labels: ['Último Año', 'Años Intermedios', 'Primeros Años'],
                datasets: [{
                    label: 'Situación Académica',
                    data: [50, 5, 12],
                    backgroundColor: ['#64FFDA', '#8892b0', 'rgba(100, 255, 218, 0.2)'],
                    borderColor: ['#E6F1FF', '#E6F1FF', '#E6F1FF'],
                    borderWidth: 1
                }]
            },
            options: pieChartOptions
        });
    }
});