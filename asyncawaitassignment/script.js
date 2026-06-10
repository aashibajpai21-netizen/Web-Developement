async function greet() {
    return "Hello Students";
}

greet().then((result) => {
    console.log(result);
});

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000); // 2 seconds
  });
}

async function fetchData() {
  const result = await getData();
  console.log(result);
}

fetchData();