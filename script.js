'use sctrict';

let money,
    time,
    mandatory,
    quantity;
    
    

money = prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');
mandatory = prompt('Введите обязательную статью расходов в этом месяце');
quantity = prompt('Во сколько обойдется?');

let appData = {     
    budget : money,  
    timeData : time,
    expenses : {mand : mandatory,
                quant : quantity,
    },
    optionalExpenses : {},
    income : [],
    savings : false,
  };

  let oneDayBudget = appData.budget / 30;
  alert('Ваш бюджет на один день: ' + oneDayBudget);

  console.log(appData);