function sendStringToPage(value) {
    const countainer = document.querySelector('.container');
    countainer.innerHTML = `<h1>${value}</h1>`;

};

function addZero(number) {
    // adiciona o 0 (Zero) caso sejaum numero menor que 10
    return number < 10 ? `0${number}` : number;
};

function line() {
    console.log('--------------------------------------------------------------------');
};

function strMonth(params) {
    switch (month) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
        default:
            return 'ERRO: opção inexistente!'
    };
};

function strDayWeek() {
    const dayWeek = date.getDay();
    switch (dayWeek) {
        case 0:
            return `Domingo`;
        case 1:
            return `Segunda-Feira`;
        case 2:
            return `Terça-Feira`;
        case 3:
            return `Quarta-Feira`;
        case 4:
            return `Quinta-Feira`;
        case 5:
            return `Sexta-Feira`;
        case 6:
            return `Sabado`;
        default:
            return 'ERRO: Esse valor é invalido';
    };
};

function partDay(value) {
    if (value < 5) {
        return 'Boa madrugada!';
    } else if (value < 12) {
        return 'Bom dia!';
    } else if (value < 17) {
        return 'Boa tarde!';
    } else if (value < 23) {
        return 'Boa noite!'
    };
};

const date = new Date();
const day = addZero(date.getDate());
const month = date.getMonth();
const year = date.getFullYear();
const hour = addZero(date.getHours());
const minute = addZero(date.getMinutes())
const seconds = addZero(date.getSeconds());
const milleseconds = date.getMilliseconds();
const pDay = partDay(hour);

const txt = `${pDay} <br><br>Data: ${strDayWeek()} ${day} /${strMonth()}/${year}<br><br>Hora: ${hour}:${minute}:${seconds}.${milleseconds}`

sendStringToPage(txt);
