//RIO CAPIBARIBE
//pH
var ctx = document.getElementById('capibaribe-nivel-ph').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'pH',
            data: [5, 6, 7, 9, 6, 10, 12, 6, 4, 2, 8, 14],
            backgroundColor: [
                '#63FF7C80',
            ],
            borderColor: [
                '#63FF7C',
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
var ctx = document.getElementById('capibaribe-oxi-dissolvido').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'OD',
            data: [47, 99, 22, 25, 29, 08, 25, 45, 44, 07, 75, 78],
            backgroundColor: [
                '#34A2EB80',
            ],
            borderColor: [
                '#34A2EB',
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

// TEMPERATURA
var ctx = document.getElementById('capibaribe-temperatura').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '°C',
            data: [74, 99, 06, 24, 20, 48, 52, 17, 16, 06, 72, 93],
            backgroundColor: [
                '#FF638480',
            ],
            borderColor: [
                '#FF6384',
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
var ctx = document.getElementById('capibaribe-condutividade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '1/Ωm',
            data: [80,84,31,21,50,88, 66,49,38,22,17,87],
            backgroundColor: [
                '#FFCE5680',
            ],
            borderColor: [
                '#FFCE56',
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
var ctx = document.getElementById('capibaribe-salinidade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'ppb',
            data: [46,79,32,37,16,27, 90,08,38,35,04,71],
            backgroundColor: [
                '#C061FF80',
            ],
            borderColor: [
                '#C061FF',
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
var ctx = document.getElementById('capibaribe-turbidez').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'UNT',
            data: [12,12,91,08,55,74, 78,53,72,97,37,84],
            backgroundColor: [
                '#FF5D0080',
            ],
            borderColor: [
                '#FF5D00',
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
//FIM RIO CAPIBARIBE ---------------------------------------
