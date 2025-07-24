const users = [1, 2, 3, 4, 5];

async function isUserValid(id) {
  await new Promise(res => setTimeout(res, 100)); 
  return id % 2 === 0; 
}

async function asyncFilterExample() {
  const results = await Promise.all(
    users.map(async (user) => {
      const valid = await isUserValid(user);
      return valid ? user : null;
    })
  );
  const filtered = results.filter(Boolean); 
  console.log("Valid users:", filtered);
}

asyncFilterExample(); 
