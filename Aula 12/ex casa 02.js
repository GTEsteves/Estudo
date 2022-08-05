var num = 0

function soma() {
    while (num < 999) {
    ++num
    console.log (num)
        if (num % 3 == 0) {
            console.log(`${num} é múltiplo de 3`)
        }
    }
}

soma()