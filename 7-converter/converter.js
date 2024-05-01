function converter(sum, currency, target) {
    const USD = 90;
    const EUR = 100;
    const RUB = 10;

    switch (currency) {
        case 'USD':

            switch (target) {
                case 'RUB':
                    return sum * USD;
                case 'EUR':
                    return (sum * USD) / EUR;
                default:
                    return null;
            }
    }
    switch (currency) {
        case 'RUB':

            switch (target) {
                case 'USD':
                    return sum / USD;
                case 'EUR':
                    return (sum * RUB) / EUR;
                default:
                    return null;
            }
    }
    switch (currency) {
        case 'EUR':

            switch (target) {
                case 'RUB':
                    return sum * EUR;
                case 'USD':
                    return (sum * EUR) / USD;
                default:
                    return null;         
            }
    }

    return sum * currency / target;
}
console.log(converter(1000, 'EUR', 'USD'));