// Math.random() => [0,1)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 2; i++) {
    // [1,5]
    console.log(getRandomInt(5) + 1);
}

const workloads = [10, 20, 30, 40];
// TODO: try to find out how to get random index [0, 3]
console.log("random workload = " + workloads[getRandomInt(5)]);

console.log("random workload 2 = " + (10 * (getRandomInt(4) + 1)));

