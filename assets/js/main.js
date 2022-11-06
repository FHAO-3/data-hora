function sendStringToPage(value) {
    const countainer = document.querySelector('.container');
    countainer.innerHTML = `<h1>${value}</h1>`;
    
};

function addZero(number) {
    // adiciona o 0 (Zero) caso sejaum numero menor que 10
    return number < 10 ? `0${number}`: number;
};

function line(params) {
    console.log('--------------------------------------------------------------------');
}

const date = new Date();
const day = addZero(date.getDate());
const year = date.getFullYear();
const hour = addZero(date.getHours());
const minute = addZero(date.getMinutes())
const seconds = addZero(date.getSeconds());
const milleseconds = date.getMilliseconds();

const month = date.getMonth();
let strMonth;
switch (month) {
    case 0:
        strMonth ='Janeiro'
        break;
    case 1:
        strMonth = 'Fevereiro'
        break;
    case 2:
        strMonth = 'Março'
        break;
    case 3:
        strMonth = 'Abril'
        break;
    case 4:
        strMonth = 'Maio'
        break;
    case 5:
        strMonth = 'Junho'
        break;
    case 6:
        strMonth = 'Julho'
        break;
    case 7:
        strMonth = 'Agosto'
        break;
    case 8:
        strMonth = 'Setembro'
        break;
    case 9:
        strMonth = 'Outubro'
        break;
    case 10:
        strMonth = 'Novembro'
        break;
    case 11:
        strMonth = 'Dezembro'
        break;
    default:
        break;
};

const dayWeek = date.getDay();
let strDayWeek;
switch (dayWeek) {
    case 0:
        strDayWeek = `Domingo`;
        break;
    case 1:
        strDayWeek = `Segunda-Feira`;
        break;
    case 2:
        strDayWeek = `Terça-Feira`;
        break;
    case 3:
        strDayWeek = `Quarta-Feira`;
        break;
    case 4:
        strDayWeek = `Quinta-Feira`;
        break;
    case 5:
        strDayWeek = `Sexta-Feira`;
        break;
    case 6:
        strDayWeek = `Sabado`;
        break;

    default:
        strDayWeek = 'ERRO: Esse valor é invalido';
        break;
};

let txtFinal;

if (hour < 23 && hour > 18){
    txtFinal = `Boa Noite! <br> ${strDayWeek} ${day} /${strMonth}/${year} ${hour}:${minute}:${seconds}.${milleseconds}`
} else if (hour < 18 && hour > 12){
    txtFinal = `Boa Tarde! <br> ${strDayWeek} ${day} /${strMonth}/${year} ${hour}:${minute}:${seconds}.${milleseconds}`
} else if (hour < 12 && hour > 5) {
    txtFinal = `Bom Dia! <br> ${strDayWeek} ${day} /${strMonth}/${year} ${hour}:${minute}:${seconds}.${milleseconds}`
} else if (hour < 5 && hour > 0) {
    txtFinal = `Boa Madrugada! <br> ${strDayWeek} ${day} /${strMonth}/${year} ${hour}:${minute}:${seconds}.${milleseconds}`
}
line()
console.log(txtFinal);
line()

sendStringToPage(txtFinal)
