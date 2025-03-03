
1Q) Write a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

2Q) Write a for loop to calculate the sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

3Q) Write a for loop to print the multiplication table of 7 (up to 10).
  for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

4Q) Write a for loop to print all even numbers between 1 and 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

5Q) Write a for loop to calculate the factorial of a number (e.g., 5!)
let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(`The factorial of ${number} is ${factorial}`);

6Q) Write a for loop to calculate the power of a number (e.g., 2^5).
let base = 2;
let exponent = 5;
let result = 1;

for (let i = 1; i <= exponent; i++) {
    result *= base;
}

console.log(`${base}^${exponent} = ${result}`);

7Q) Write a for loop to print all odd numbers between 20 and 1 in reverse order.
  for (let i = 19; i > 0; i -= 2) {
    console.log(i);
}
















