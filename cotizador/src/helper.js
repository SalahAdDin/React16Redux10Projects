export function getYearDifference(year){
    return new Date().getFullYear() - year;
}

export function calculateMarca (model) {
    let increment;

    switch (model) {
        case 'europeo':
            increment = 1.30;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            break;
}

    return increment;
}

export function getPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}

export function firstCapitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}