let str = "";

input.addEventListener("#input", (e) => {
  e.preventDefault();
});

let button = document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "ans" || e.target.innerText === "Enter") {
      str = eval(str);
      document.querySelector("#input").value = str;
    }
    // clear whole input text
    else if (e.target.innerText === "del") {
      str = "";
      document.querySelector("#input").value = str;
    } else if (e.target.innerText === "clear") {
      str = str.slice(0, -1);
      document.querySelector("#input").value = str;
    } else {
      str = str + e.target.innerText;
      document.querySelector("#input").value = str;
    }
  });
});
