// Function to check whether a number is prime or not
function isPrime(n) {
    if (n <= 1)
        return false;

    // Check divisibility from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;

    return true;
}

let n = 11;
console.log(isPrime(n));
