// TEMPERATURA
var ctx = document.getElementById('temperatura').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: '°C',
            data: [23, 22, 25, 23, 21, 19, 19, 21, 24, 22, 21, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
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

        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//TURBIDEZ
var ctx = document.getElementById('turbidez').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Variação',
            data: [23, 22, 25, 23, 21, 19, 19, 21, 24, 22, 21, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
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

        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//pH
var ctx = document.getElementById('nivel-ph').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'pH',
            data: [23, 22, 25, 23, 21, 19, 19, 21, 24, 22, 21, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
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

        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//OXIGÊNIO DISSOLVIDO
var ctx = document.getElementById('oxi-dissolvido').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'OD',
            data: [23, 22, 25, 23, 21, 19, 19, 21, 24, 22, 21, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
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

        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//CONDUTIVIDADE
var ctx = document.getElementById('condutividade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '1/Ωm',
            data: [23, 22, 25, 23, 21, 19, 19, 21, 24, 22, 21, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
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

        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Salinidade
var ctx = document.getElementById('salinidade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'ppb',
            data: [23, 22, 25, 23, 21, 19, 19, 21, 24, 22, 21, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
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

        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});