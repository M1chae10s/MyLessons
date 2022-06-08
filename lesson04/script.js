let mission = prompt("Ваша цель");
let money = prompt("Ваш месячный доход?");
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let amount1 = +prompt("Во сколько это обойдётся?");
let amount2 = +prompt("Во сколько это обойдётся?");
let budgetMonth = money - amount1 - amount2;

function getExpensesMonth(){
    if (!amount1) {
        amount1 = 0;
    };
    if (!amount2) {
        amount2 = 0;
    };
    return amount1 + amount2;
};

function getAccumulatedMonth(){
    return (money - getExpensesMonth());
};

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth(){
return (Math.ceil(mission / accumulatedMonth));
};

let budgetDay = Math.floor(budgetMonth / 30);

console.log(getExpensesMonth());
console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log(`Цель будет достигнута за ${getTargetMonth()} месяцев`);
console.log(budgetDay);

const getStatusIncome = (budgetDay) => {
    return isNaN(budgetDay) ? 'Что-то не так. Перепройдите опрос.' :
        (budgetDay < 0) ? 'Что то пошло не так' :
        (budgetDay == 0) ? 'Как вы выживаете???' :
        (budgetDay < 600) ? 'К сожалению у вас уровень дохода ниже среднего' :
        (budgetDay == 600) ? 'Поздровляю, почти средний уровень дохода.' :
        (budgetDay < 1200) ? 'У вас средний уровень дохода' :
        (budgetDay == 1200) ? 'Ух ты! почти высокий уровень дохода.' :
        'У вас высокий уровень дохода';
};
console.log(getStatusIncome(budgetDay));