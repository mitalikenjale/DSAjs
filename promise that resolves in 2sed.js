function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done after 2 seconds");
    }, 2000);
  });
}

waitTwoSeconds().then((msg) => console.log(msg));