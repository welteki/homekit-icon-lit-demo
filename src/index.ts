import "./styles.css";

import "./components/outlet-icon";
import "./components/desklamp-icon";
import "./components/toggle-switch";

const app = document.getElementById("app");
const toggleSwitch = document.createElement("toggle-switch");
const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  toggleSwitch.checked
    ? icon.setAttribute("active", "")
    : icon.removeAttribute("active");
});

toggleSwitch.addEventListener("toggle-changed", () => {
  icons.forEach((icon) => icon.toggleAttribute("active"));
});

app?.appendChild(toggleSwitch);
