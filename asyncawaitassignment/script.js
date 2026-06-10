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


function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

async function executeSteps() {
  await step1(); // Wait for step1 to finish
  await step2(); // Then execute step2
}

executeSteps();

function task() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000); // Wait for 2 seconds
  });
}

async function completeTask() {
  await task();
  console.log("Task Completed");
}

completeTask();