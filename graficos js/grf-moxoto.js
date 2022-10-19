//RIO MOXOTÓ
//pH
var ctx = document.getElementById('moxoto-nivel-ph').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'pH',
            data: [03,56,32,61,78,99,41,07,66,49,24,64],
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
var ctx = document.getElementById('moxoto-oxi-dissolvido').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'OD',
            data: [77,55,99,76,80,41,92,93,81,75,91,06],
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
var ctx = document.getElementById('moxoto-temperatura').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '°C',
            data: [61,91,40,87,68,64,63,72,27,61,28,67],
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
var ctx = document.getElementById('moxoto-condutividade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '1/Ωm',
            data: [95,25,46,08,77,54,53,45,94,59,59,34],
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
var ctx = document.getElementById('moxoto-salinidade').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'ppb',
            data: [09,79,70,57,26,23,31,96,90,59,71,63],
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
var ctx = document.getElementById('moxoto-turbidez').getContext('2d');
var temperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'UNT',
            data: [63,00,03,41,35,99,25,89,33,29,06,68],
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
//FIM RIO MOXOTÓ ---------------------------------------