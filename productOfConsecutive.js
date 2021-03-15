//product of consecutive fib numbers

function productFib(prod) {
    let fib = [0, 1];
    while (fib[0] * fib[1] < prod) {
        fib.push(fib[0] + fib[1])
        fib.shift()
    }
    return [fib[0], fib[1], fib[0] * fib[1] == prod]
}