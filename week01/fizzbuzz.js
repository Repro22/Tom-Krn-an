// print numbers from 1 to 100
// if number divides on 3 without reminder (0) print "fizz"
// if number divides on 5 without reminder (0) print "buzz"
// if number divides on 3 AND 5 without reminder (0) print "fizzbuzz"

// 1 : "1"
// ...
// 5 : "5 buzz"
// ...
// 15 : "15 fizzbuzz"

// hint: / -- divide ; % -- returns just a reminder
// hint: use % in your HW 2

// console.log(5 / 2); //result is 2.5
// console.log(5 % 2); //result is 1; 5 divide on 2 = 2 reminder 1

for (let i = 1; i <= 100; i++) {
    let s = i.toString() + " : ";
    if (i % 3 === 0){
        s = s + "fizz";
    }
    if (i % 5 === 0){
        s = s + "buzz";
    }
    console.log(s);
}