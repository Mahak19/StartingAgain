function factorial(){
    let num = prompt("Enter a number to find its factorial:");
    let fact = 1;
    for(let i=num; i>=1; i--){
        fact = fact*i;
    }
    console.log("Factorial of " + num + " is: " + fact);
}
factorial();