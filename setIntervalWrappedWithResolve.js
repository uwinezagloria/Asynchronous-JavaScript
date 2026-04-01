new Promise((resolve) => {
  setInterval(() => {

    resolve("Done");
  }, 1000);
}).then(value => console.log("Promise says:", value));