//RIO IPANEMA
//pH
var ctx = document.getElementById('ipanema-nivel-ph').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'pH',
            data: [43,07,62,86,66,68,54,62,93,56,57,23],
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
var ctx = document.getElementById('ipanema-oxi-dissolvido').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'OD',
            data: [64,60,82,69,41,34,29,63,69,13,31,01],
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
var ctx = document.getElementById('ipanema-temperatura').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '°C',
            data: [42,50,57,16,99,48,26,82,52,40,09,56],
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
var ctx = document.getElementById('ipanema-condutividade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '1/Ωm',
            data: [14,63,66,85,77,59,92,33,17,73,59,09],
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
var ctx = document.getElementById('ipanema-salinidade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'ppb',
            data: [68,68,05,51,73,26,19,82,23,86,23,18],
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
var ctx = document.getElementById('ipanema-turbidez').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'UNT',
            data: [64,50,61,70,55,42,33,54,58,10,82,77],
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
//FIM RIO IPANEMA ---------------------------------------