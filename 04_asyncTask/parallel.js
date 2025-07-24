const numbers = [1, 2, 3, 4, 5];

async function square(num) {
  console.log(`Squaring ${num}`);
  await new Promise(res => setTimeout(res, 100));  // simulate async delay
  const result = num * num;
  console.log(`Done: ${num}^2 = ${result}`);
  return result;
}

async function runParallel() {
  const results = await Promise.all(numbers.map(square));
  console.log("Final Results (Parallel):", results);
}

runParallel();



//series execution:-

const numbers1 = [1, 2, 3, 4, 5];

async function square(num) {
  console.log(`Squaring ${num}`);
  await new Promise(res => setTimeout(res, 1000));  // simulate async delay
  const result = num * num;
  console.log(`Done: ${num}^2 = ${result}`);
  return result;
}

async function runSeries() {
  const results = [];
  for (const num of numbers1) {
    const res = await square(num); // wait for each square to complete
    results.push(res);
  }
  console.log("Final Results (Series):", results);
}

runSeries();
 


