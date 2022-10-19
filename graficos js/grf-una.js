//RIO UNA
//pH
var ctx = document.getElementById('una-nivel-ph').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'pH',
            data: [02,46,13,29,39,29,77,45,74,08,11,47],
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
var ctx = document.getElementById('una-oxi-dissolvido').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'OD',
            data: [14,19,20,84,04,29,63,24,49,75,64,8,],
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
var ctx = document.getElementById('una-temperatura').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '°C',
            data: [38,36,58,27,49,71,03,17,61,63,06,71],
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
var ctx = document.getElementById('una-condutividade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '1/Ωm',
            data: [66,72,47,51,14,28,44,10,09,29,02,15],
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
var ctx = document.getElementById('una-salinidade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'ppb',
            data: [24,85,73,16,33,36,08,96,05,64,14,70],
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
var ctx = document.getElementById('una-turbidez').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'UNT',
            data: [37,15,35,06,46,62,55,48,22,77,10,34],
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
//FIM RIO UNA ---------------------------------------