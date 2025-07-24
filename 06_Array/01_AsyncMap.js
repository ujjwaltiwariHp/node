// Promise.all()+map


const users = [1, 2, 3, 4, 5];

async function getDouble(userId) {
  await new Promise(res => setTimeout(res, 100));
  return userId * 2;
}

async function asyncMapExample() {
  const result = await Promise.all(users.map(getDouble));
  console.log("Doubled scores:", result);
}

asyncMapExample();
