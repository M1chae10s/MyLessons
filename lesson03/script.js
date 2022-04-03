let money = 99999;
let income = 'Part-time job';
let addExpenses = 'bill, transport, food';
let deposit = true;
let mission = 999999999999999;
let period = 1;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log("Период равен "+period+" месяцев");
console.log("Цель заработать "+mission+" рублей");
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(", "));
let budgetDay = money;
console.log(budgetDay);

money = prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Имеется ли у Вас депозит в банке?");
let expenses1 = prompt("Введите обязательную статью расходов");
let expenses2 = prompt("Введите обязательную статью расходов");
let amount1 = prompt("Во сколько это обойдётся?");
let amount2 = prompt("Во сколько это обойдётся?");
let budgetMonth = money - amount1 - amount2;
console.log(budgetMonth);
console.log(Math.ceil(mission / (money - amount1 - amount2)));
console.log(Math.floor(budgetDay = budgetMonth / 30));
if (budgetDay === 1200) 
{
    console.log('У вас почти высокий уровень дохода');
}
else if (budgetDay === 600) 
{
    console.log('У вас почти средний уровень дохода');
}
else if (budgetDay > 1200) 
{
    console.log('У вас высокий уровень дохода');
}
else if (budgetDay < 1200 && budgetDay > 600) 
{
    console.log('У вас средний уровень дохода');
}
else if (budgetDay < 0) 
{
    console.log('Что-то пошло не так');
}
else 
{
    console.log('К сожалению у вас уровень дохода ниже среднего');
};