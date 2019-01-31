export const validateBudget = budget =>{
    let totalBudget = parseFloat(budget, 10)|| 0;

    if (totalBudget > 0) return totalBudget;
    else return false;
}

export const reviewBudget = (budget, residuary) =>{
    let cssClass;

    // Test 25%
    if ((budget/4)>residuary) cssClass = 'alert alert-danger';
    else if ((budget/2)>residuary) cssClass = 'alert alert-warning';
    else cssClass = 'alert alert-success';

    return cssClass;
}