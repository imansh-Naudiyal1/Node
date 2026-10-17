// function isPositive(n){
//     if(n > 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isPositive(-1));
// console.log(isPositive(0));
// console.log(isPositive(5));
      
// function isOdd(n){
// return n % 2 !== 0;
// }
// console.log(isOdd(5));
// console.log(isOdd(4));
// console.log(isOdd(0));

// function greet(name){
//     return `Hello , ${name}`;
// }
// console.log(greet("Ravi!"));

// function getGrade(marks){
//     if(marks >= 90){
//         return "A";
//     }else if( marks >= 75){
//         return "B";
//     }else if ( marks >= 50){
//         return "C";
//     }else{
//         return "F";
//     }
// }
// console.log(getGrade(95));
// console.log(getGrade(80));
// console.log(getGrade(55));
// console.log(getGrade(49));

// for(let i = 1; i <= 10;i++){
//     console.log(i);
// }

// let num = 0;
// while( num < 10){
// num++;
// console.log(num);
// }


// function calculateTotal(price,qty){
//     let p = parseInt(price);
//     let q = parseInt(qty); 
//     let subtotal = p * q; 
//     let total = subtotal;
//     if(subtotal >= 1000){
//         total = subtotal * 0.9;
//     }
// if(total < 500){
//    total += 50;
// }
// return total;
// }
// console.log(calculateTotal(100, 5));
// console.log(calculateTotal(200, 5));
// console.log(calculateTotal(50, 5));
// console.log(calculateTotal(100, 15));


// function fizzBuzz(n){
//     for(let i = 1; i <= n;i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("fizzBuzz");
//         }else if(i % 3 === 0){
//             console.log("fizz");
//         }else if(i % 5 === 0){
//             console.log("buzz");
//         }else{
//             console.log(i);
//         }
//     }
// }
// (fizzBuzz(15));
// (fizzBuzz(20));
// (fizzBuzz(30));



// function isPrime(n){
//     if(n <= 1){
//         return false;
//     }
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));


// function sumOfDigits(n){
//     let sum = 0;
//     while( n > 0){
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }
// console.log(sumOfDigits(123));
// console.log(sumOfDigits(456));
// console.log(sumOfDigits(789));

// function reverseNumber(n){
//     let reversed = 0;
//     while(n > 0){
//         reversed = reversed * 10 + n % 10;
//         n = Math.floor(n / 10);
//     }
//     return reversed;
// }
// console.log(reverseNumber(123));
// console.log(reverseNumber(456));
// console.log(reverseNumber(789));

// function isPalindrome(n){
//     let reversed = 0;
//     let original = n
// while(n > 0){
//     reversed = reversed * 10 + n % 10;
//     n = Math.floor(n / 10);
// }
// return original === reversed;
// }
// console.log(isPalindrome(121));
// console.log(isPalindrome(123));
// console.log(isPalindrome(1221));

// function isLeapYear(year){
//     if(year % 4 === 0){
//         if(year % 100 === 0){
//             if(year % 400 === 0){
//                 return true;
//             }
//         }else{
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2023));

// function Fibonacci(n){
//     let a = 0, b = 1, c;
//     if(n === 0){
//         return a;
//     }
//     for(let i = 2; i <= n; i++){
//         c = a + b;
//         a = b;
//         b = c;
//     }
// return b;
// }
// console.log(Fibonacci(0));
// console.log(Fibonacci(1));
// console.log(Fibonacci(10));


// function isPrime(n){
//     if(n <= 1){
//         return false;
//     }
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(2));
// console.log(isPrime(7));
// console.log(isPrime(10));


// function gcd(a,b){
//     while(b !== 0){
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// console.log(gcd(48, 18));
// console.log(gcd(56, 98));
 
// function printTriangle(n){
//     for(let i = 0; i < n;i++){
//         let row = "";
//         for(let j = 0; j <= i;j++){
//             row+= "*";
//         }
//         console.log(row);
//     }
// }
// console.log(printTriangle(5));

// function isArmStrong(n){
//     let sum =0;
//     let original = n;
//     let digits = n.toString().length;
//     while(n> 0){
//         let digit = n %10;
//         sum += Math.pow(digit,digits);
//         n = Math.floor(n / 10);
//     }
//     return sum === original;
// }
// console.log(isArmStrong(153));
// console.log(isArmStrong(9474));
// console.log(isArmStrong(123));
// console.log(isArmStrong(-153));

// function isPerfect(n){
//     let sum = 0;
//     for(let i = 1;i < n;i++){
//         if(n % i === 0){
//             sum += i;
//         }
//     }
//     return sum === n;
// }
// console.log(isPerfect(6));
// console.log(isPerfect(28));
// console.log(isPerfect(12));
// console.log(isPerfect(1));
// console.log(isPerfect(45));


// function printPrime(n){
//     for(let i = 2; i < n;i++){
//         let isPrime = true;
//         for(let j = 2; j * j < i;j++){
//             if(i % j === 0){
//                 isPrime = false;
//                 break;
//             }

//         }
//         if(isPrime){
//             console.log(i);
//         }
//     }
// }
// console.log(printPrime(30));


// function collatSteps(n){
// let steps = 0;
// while(n !== 1){
//     if(n % 2 === 0){
//         n = n / 2;
//     }else{
//         n = 3 * n + 1;
//     }
//     steps++;
// }
// return steps;
// }
// console.log(collatSteps(6));
// console.log(collatSteps(1));
// console.log(collatSteps(27));

// function toBinary(n){
//     let binary = "";
//     while(n>0){
//         binary = (n%2) + binary;
//         n = Math.floor(n/2);
//     }
//     return binary;
// }
// console.log(toBinary(10));
// console.log(toBinary(0));
// console.log(toBinary(255));

// function ispalindroneString(str){
//     while(str.length > 1){
//         if(str[0] !== str[str.length - 1]){
//             return false;
//         }
//         str = str.slice(1, str.length - 1);
//     }
//     return true;
// }
// console.log(ispalindroneString("racecar"));
// console.log(ispalindroneString("hello"));
// console.log(ispalindroneString("madam"));
// console.log(ispalindroneString(""));

// function countVowels(str){
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for(let i =0; i < str.length;i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//         }
//     return count;
// }
// console.log(countVowels("Programming"));
// console.log(countVowels("AEIOU"));
// console.log(countVowels("xyz"));

// function isHappyNumber(n){
//     let seen = new Set();
//     while(n !== 1 && !seen.has(n)){
//         seen.add(n);
//         let sum = 0;
//         while(n > 0){
//             let digit = n % 10;
//             sum += digit * digit;
//             n = Math.floor(n / 10);
//         }
//         n = sum;
//     }
//     return n === 1;
// }
// console.log(isHappyNumber(19));
// console.log(isHappyNumber(2));
// console.log(isHappyNumber(7));
// console.log(isHappyNumber(4));

// function printDiamond(n){
//     for(let i = 0;i < n; i++){
//         let row = "";
//         for(let j = 0; j < n - i - 1;j++){
//             row += " ";
//         }
//         for(let k = 0; k < 2 * i + 1;k++){
//             row += "*";
//         }
//         console.log(row);
//     }
//     return "";
// }

// console.log(printDiamond(3));



// function calculateBills(units){
//     let bill = 0;
//     let fixedCharge = 50;
//     if(units < 0){
//         return "Invalid units";
//     }else if(units <= 100){
//         bill = units * 5;
//     }else if(units <= 200){
//         bill = 100 * 5 + (units - 100) * 7;
//     }else if(units <= 300){
//         bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
//     }else if(units > 300){
//         bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 15;
//     }
//     return bill + fixedCharge;
// }
// console.log(calculateBills(0));
// console.log(calculateBills(100));
// console.log(calculateBills(150));
// console.log(calculateBills(250));
// console.log(calculateBills(350));
// console.log(calculateBills(-5));

// function withdraw(balance,amount,dailyLimit, withdrawnToday){
//  if(amount <= 0 ){
//     return "Invalid amount";
//  }else if(amount % 100 !== 0){
//  return "Amount must be a multiple of 100";
//  }else if(amount > balance){
//     return "Insufficient balance";
//  }else if(withdrawnToday + amount > dailyLimit){
// return "Daily limit exceeded";
//  }else{
//     return "Success. New balance: " + (balance - amount);
//  }
// }
// console.log(withdraw(5000, 1000, 2000, 500));
// console.log(withdraw(5000, 6000, 2000, 500));
// console.log(withdraw(5000, -100, 2000, 500));
// console.log(withdraw(5000, 3500, 2000, 500));

// function isMultipleOf(a,b){
//    if(b === 0) return a === 0;
//    return a % b === 0;
// }
// console.log(isMultipleOf(10, 5));
// console.log(isMultipleOf(10, 3));
// console.log(isMultipleOf(15, 5));
// console.log(isMultipleOf(15, 0));

// function power(base,exp){
//    for(let i = 1; i < exp;i++){
//     base *= base;
//    }
//    return base;   
// }
// console.log(power(2,10));
// console.log(power(5,0));
