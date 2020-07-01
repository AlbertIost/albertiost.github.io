//Настройка input range
let inputRange = document.querySelector('.range input');
calcul(inputRange);
$('.range > p').text($('.range input').val());
inputRange.addEventListener('input', updateValue);
function updateValue(){
    $('.range > p').text($('.range input').val());
    calcul(inputRange);
}
//Конец input range

//Логика калькулятора
function calcul(a){
    const moneyCons = a.value; //Сколько человек тратит денег на электроэнергию в год
    const priceElectricity = 0.063;//Цена кВт в долларах
    const energyСons = moneyCons / priceElectricity; //Затраты кВт в год
    const insolation = 1240; // Инсоляция 1 кВт в год
    const powerStation = 20; //мощность станции
    const generated = insolation * powerStation;
    const priceZT = 0.19; //Тариф по ЗТ в долларах
    const surplus = generated - energyСons;//излишек
    const incomeY = surplus * priceZT;//доход в год на ЗТ
    const incomeM = incomeY / 12;//доход в месяц на ЗТ
    $('.month .money span').text(Math.floor(incomeM));
    $('.year .money span').text(Math.floor(incomeY));
}
//Конец калькулятора