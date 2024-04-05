const a = prompt('Введите язык, En, Ru, De, Arm')

switch (true) {
    case a === 'En':
        console. log('Hello')
        break
    case a === 'Ru':
        console. log('Привет')
        break
    case a === 'De':
        console. log('Guten Tag')
        break
    case a === 'Arm':
        console. log('Բարեւ')
        break
    default:
        console. log('Вы не ввели нужный язык(')    
}