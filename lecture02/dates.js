const dtNow = Date.now().toString();
console.log("now is " + dtNow);

// Month Index ! not month number.
// month numbers: 1-12, indexes 0-11
const dt = new Date(2024, 10, 30, 14, 35);
console.log("today is " + dt.toString());
console.log("today is (ISO) " + dt.toISOString());
console.log("today is (UTC) " + dt.toUTCString());

// if you use string, here will be month number instead month index
const dt2 = new Date("2024-10-30");
console.log("today is " + dt2.toString());

// compare dates
if (dt > dt2) {
    console.log("dt > dt2");
} else {
    console.log("dt2 > dt");
}

console.log("year: " + dt.getFullYear());
// in JS day is day of week
console.log("day: " + dt.getDay());
console.log("day of month: " + dt.getDate());

// create date from string
const dt3 = new Date("2024/10/30");
console.log("dt3: " + dt3);

// no way
//const dt4 = new Date("30/10/2024");
//console.log("dt4: " + dt4);

const dt5 = new Date("2024-11-30T13:35:00.000Z");
console.log("dt5: " + dt5);

// not existed date
const dt6 = new Date(2024, 13, 45);
console.log("dt6: " + dt6);

