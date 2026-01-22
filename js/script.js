let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let themeSwitch = document.getElementById("themeSwitch");

let value = "";

/* btn click */
buttons.forEach(btn => {
  btn.onclick = () => {
    let text = btn.innerText;

    if (text === "DEL") {
      value = value.slice(0, -1);
    } 
    else if (text === "RESET") {
      value = "";
    } 
    else if (text === "=") {
      try {
        value = eval(value);
      } catch {
        value = "Error";
      }
    } 
    else if (text === "x") {
      value += "*";
    } 
    else {
      value += text;
    }

    display.innerText = value || "0";
  };
});

/* input for keybord */
document.onkeydown = e => {
  if ("0123456789+-*/.".includes(e.key)) {
    value += e.key;
  }
  if (e.key === "Enter") value = eval(value);
  if (e.key === "Backspace") value = value.slice(0, -1);

  display.innerText = value || "0";
};

/* theme change */
themeSwitch.oninput = () => {
  document.body.className = "theme-" + themeSwitch.value;
};
