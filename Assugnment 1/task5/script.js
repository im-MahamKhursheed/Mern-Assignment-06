const square =(num) => {
    return num * num;
}

num=prompt("Enter a number to find its square:");
result = square(num);
alert(`The square of ${num} is ${result}.`);
console.log(`The square of ${num} is ${result}.`);