'use sctrict';

let money,
  time,
  mandatory,
  quantity,
  mandatory2,
  quantity2;



money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};





for (let i = 1; i < 3; i++) {                                                    //первый цикл
  mandatory = prompt('Введите обязательную статью расходов в этом месяце', '');
  quantity = prompt('Во сколько обойдется?', '');

  if ((typeof (mandatory)) === "string" && (typeof (mandatory)) != null && (typeof (quantity)) != null &&
    mandatory != '' && quantity != '' && mandatory.length < 50) {
    console.log('Done!');
    appData.expenses[mandatory] = quantity;
  } else {
    alert('Вы оставили пустое окно');
    i--;
    console.log(i);
  }

}


/* let i = 1;                                                                          //второй цикл
while (i < 3) {
  
  mandatory = prompt('Введите обязательную статью расходов в этом месяце', '');
  quantity = prompt('Во сколько обойдется?', '');

  if ((typeof (mandatory)) === "string" && (typeof (mandatory)) != null && (typeof (quantity)) != null &&
    mandatory != '' && quantity != '' && mandatory.length < 50) {
    console.log('Done!');
    appData.expenses[mandatory] = quantity;
  } else {
    alert('Вы оставили пустое окно');
    i--;
    console.log(i);
  }
  i++;


} */


/* let i = 1;                                                                              // третий цикл
do {
  mandatory = prompt('Введите обязательную статью расходов в этом месяце', '');
  quantity = prompt('Во сколько обойдется?', '');

  if ((typeof (mandatory)) === "string" && (typeof (mandatory)) != null && (typeof (quantity)) != null &&
    mandatory != '' && quantity != '' && mandatory.length < 50) {
    console.log('Done!');
    appData.expenses[mandatory] = quantity;
  } else {
    alert('Вы оставили пустое окно');
    i--;
    console.log(i);
  }
  i++;
} 
while (i < 3);
 */








/* mandatory1 = prompt('Введите обязательную статью расходов в этом месяце','');
quantity1 = prompt('Во сколько обойдется?','');
mandatory2 = prompt('Введите обязательную статью расходов в этом месяце','');
quantity2 = prompt('Во сколько обойдется?','');

appData.expenses[mandatory1] = quantity1;
appData.expenses[mandatory2] = quantity2; */


let oneDayBudget = appData.budget / 30;
alert('Ваш бюджет на один день: ' + oneDayBudget);

console.log(appData);